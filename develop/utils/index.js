const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const api = require("./api.js");
const generateMarkdown = require("./generateMarkdown.js");

// function to write README file
const writeFileAsync = util.promisify(fs.writeFile)

function askUser() {
	return inquirer.prompt([
		{
			type: "input",
			message: "What is your github username?",
			name: "accountname"
    },
    {
			type: "input",
			message: "What is your github email address?",
			name: "accountemail"
		},
		{
			type: "input",
			message: "What is the name of the project repository?",
			name: "title"
		},
		{
			type: "input",
			message: "Desribe your project.",
			name: "description"
		},
		{
			type: "input",
			message: "How do you install this project?",
			name: "install"
		},
		{
			type: "input",
			message: "How do you use this project?",
			name: "use"
		},
		{
			type: "input",
			message: "What license is used for this project?:",
			name: "license"
		},
		{
			type: "input",
			message: "How is this project tested?",
			name: "test"
		},
		{
			type: "input",
			message: "Lastly, how can someone contribute to this project?",
			name: "contribute"
		},
	]);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function init() {
	try {
		const readmefile = await askUser();
		await api.getUser(readmefile.accountname).then(function (result) {
			readmefile.image = result.data.avatar_url;
			readmefile.name = result.data.name;
        });
        const mdfile = generateMarkdown(readmefile);
		await writeFileAsync("./README.md", mdfile);
		console.log("README.md created");
	} catch (err) {
		console.log("Error: " + err);
	}
}

// function writeToFile(fileName, data) {
// }

// function to initialize program


// function call to initialize program
init();
