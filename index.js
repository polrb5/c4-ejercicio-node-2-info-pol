require("dotenv").config();

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
}, 2000);

const os = require("os");

console.log(`La versión de tu sistema operativo es ${os.version()}`);
