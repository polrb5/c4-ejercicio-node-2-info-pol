require("dotenv").config();
const fs = require("fs");
const path = require("path");
const os = require("os");
const { username, homedir } = os.userInfo();

const bytesToMb = (bytes) => (bytes / 1024 / 1024).toFixed(2);

console.log("Hackeando tu sistema operativo...");
setTimeout(() => {
  if (process.platform === "win32") {
    console.log("Tú no molas mucho");
  } else if (process.platform === "darwin") {
    console.log(
      "Tú no molas nada. Bueno, excepto si eres Geraldine o Pol. En ese caso molas. Pero por ser tú, no por usar Mac"
    );
  } else if (process.platform === "linux") {
    console.log("Tú molas");
  }

  console.log(`Cuidado, te quedan ${bytesToMb(os.freemem())} Mb de RAM libre`);
  console.log(`La versión de tu sistema operativo es ${os.version()}`);
  console.log(
    `Tu usuario del sistema operativo es ${username} y tu carpeta es ${homedir}`
  );
  console.log("Éstos son los archivos y carpetas de tu carpeta de usuario: ");
  fs.readdir(homedir, (err, archivos) => {
    if (err) {
      console.log(`¡Error, algo ha petado! ${err.message}`);
      return;
    }
    for (const archivo of archivos) {
      fs.stat(path.join(homedir, archivo), (err, info) => {
        console.log(
          "\n",
          info.isDirectory()
            ? `${archivo} es un directorio que ocupa ${info.size} Bytes`
            : `${archivo} es un archivo que ocupa ${info.size} Bytes`
        );
        console.log("\n#############################");
      });
    }
  });
}, 2000);
