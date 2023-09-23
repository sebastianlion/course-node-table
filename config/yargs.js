const argv = require("yargs")
	.options({
		n: {
			alias: "number",
			type: "number",
			demandOption: true,
			describe: "It is the number for the table of multiplication",
		},
		l: {
			alias: "list",
			type: "boolean",
			default: false,
			describe: "It is for show the list of the table of multiplication",
		},
		u: {
			alias: "until",
			type: "number",
			default: 10,
			describe:
				"It is the final number until will go the table of multiplication",
		},
	})
	.check((argv, options) => {
		if (isNaN(argv.n) || isNaN(argv.u)) {
			throw "The input must be a number";
		}
		return true;
	}).argv;

module.exports = argv;
