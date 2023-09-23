const fs = require("fs");
const colors = require("colors");
const fileCreator = async (number = 5, list, until) => {
	try {
		let salida = "";
		let consola = "";
		for (i = 1; i <= until; i++) {
			consola += `${number}${colors.blue("x")}${i}${"=".blue}${number * i}\n`;
			salida += `${number} x ${i} = ${number * i}\n`;
		}
		if (list) {
			console.log("====================".green);
			console.log(`Table of ${colors.blue(number)}`);
			console.log("====================".green);
			console.log(consola);
		}

		// fs.writeFileSync es la forma rapida que es de por si una promesa
		// si se quiere atrapar erro se debe usar un "try-catch"
		fs.writeFileSync(`./output/table-of-${number}.txt`, salida);
		return `table-of-${number}.txt`;

		// fs.writeFile es la forma completa de hacerla
		// fs.writeFile(`table-of-${number}.txt`, salida, (error) => {
		// 	if (error) throw error;
		// 	console.log(`table-of-${number}.txt is saved`);
		// });
	} catch (error) {
		throw error;
	}
};

module.exports = {
	fileCreator,
};
