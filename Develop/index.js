// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of your application?",
},
{
    type: "input",
    name: "purpose",
    message: "What is the purpose of your application?",
},
{
    type: "input",
    name: "installation",
    message: "How do you install your application?",
},
{
    type: "input",
    name: "usage",
    message: "How do you use your application?",
},
{
    type: "input",
    name: "test",
    message: "How do you test your application?",
},
{
    type: "input",
    name: "credits",
    message: "Who are the collaborators?",
},
{
    type: "input",
    name: "github",
    message: "What is your GitHub profile?",
},
{
    type: "input",
    name: "email",
    message: "What is your email address?",
},
{
    type: "input",
    name: "license",
    message: "What license are you using?",
},
];

// TODO: Create a function to write README file
function writeToFile("README.md", data) {
    if (err) console.log(err);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();