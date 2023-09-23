const { fileCreator } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

fileCreator(argv.n, argv.l, argv.u)
	.then((fileName) => console.log(fileName, "saved"))
	.catch((err) => console.log(err));
