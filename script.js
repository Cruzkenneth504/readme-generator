const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./generateMarkDown");

function generateAsk() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your title",
      name: "title",
    },
    {
      type: "input",
      message: "Describe your project",
      name: "description",
    },
    {
      type: "input",
      message: "How to install application",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instruction for usage",
      name: "usage",
    },

    {
      type: "input",
      message: "Creditors name",
      name: "credits",
    },
    {
      type: "input",
      message: "Enter your creditors email",
      name: "email",
    },

    {
      type: "list",
      message: "Select a license",
      name: "license",
      choices: [
        "Apache license 2.0",
        "MIT",
        "Open Software License 3.0",
        "Microsoft Public License",
        "Academic Free License v3.0",
        "Artistic license 2.0",
      ],
    },

    {
      type: "input",
      message: "Please add contributers",
      name: "contributors",
    },

    {
      type: "input",
      name: "github",
      message: "Add github username",
    },

    {
      type: "input",
      name: "userEmail",
      message: "Add users email",
    },

    {
      type: "input",
      name: "fileName",
      message: "Name your Readme",
    },
  ]);
}

function writeToFile(fileName, data) {
  fs.appendFile(`${fileName}.md`, data, (err) =>
    err ? console.error(err) : console.log(`${fileName}.md has been generated.`)
  );
}

async function init() {
  let answers = await generateAsk();
  writeToFile(answers.fileName, markDown(answers));
}

init();
