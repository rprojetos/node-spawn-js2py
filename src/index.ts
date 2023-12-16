
// desistruturando child_process para pegar apenas a função spawn
const { spawn } = require("child_process");

function sendNode2Python(msg: string){

  const child = spawn("python", ["src/main.py"]);
  // evento exit, acionado quando o programa termina
  // code 0 - indica que o programa terminou com sucesso.
  child.on("exit", (code: number) => console.log("exitCode:", code));
  // buffer de retorno da mensagem
  child.stdout.on("data", function (buffer: any) {
    const message = String(buffer);
    console.log("stdout:", message);
  });
  // envia mensagem para o processo Python
  child.stdin.write(msg);
}
 
sendNode2Python("Olá Python!\n");