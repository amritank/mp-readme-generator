// TODO: Include packages needed for this application

//const { default: inquirer } = require("inquirer");
const inquirer = require("inquirer");
const helper = require("./utils/generateMarkdown.js");
const fs = require('fs');

// TODO: Create an array of questions for user input
// TODO: Pending Table of Contents
const questions = [
    {
        type: "input",
        message: "What is the title of the your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Provide description for your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Provide installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide usage information for your project.",
        name: "usage",
    },
    {
        type: "input",
        message: "Provide contribution guidelines for your project.",
        name: "contribution",
    },
    {
        type: "input",
        message: "Provide testing instructions for your project.",
        name: "test",
    },
    {
        type: "input",
        message: "What is your Github user name?",
        name: "ghubname",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "list",
        message: "Choose liscensing information for your project.",
        name: "license",
        choices: ["None", "MIT License", "Apache License 2.0", "GNU General Public License v3.0", "Creative Commons"],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const tempelate = helper.generateMarkdown(data);
    fs.writeFile(fileName, tempelate, (err) => err ? console.log("Write to file failed!") : console.log("Successfully generated the README file!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("./dist/README.md", response)
        });
}

// Function call to initialize app
init();
