// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => { 
    return inquirer.prompt();
    [
{
    type: "input",
    name: "title",
    message: "What is the title of your application?",
    //validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        console.log("Please enter project name!");
        return false;
        }},},
{
    type: "input",
    name: "purpose",
    message: "What is the description of your application?",
    //validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        console.log("Please enter project description!");
        return false;
        }},},

{
    type: "input",
    name: "installation",
    message: "How do you install your application?",
    //validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        console.log("Please enter installation instructions!");
        return false;
        }},},
{
    type: "input",
    name: "usage",
    message: "How do you use your application?",
    //validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        console.log("Please enter application instructions!");
        return false;
        }},},
{
    type: "input",
    name: "test",
    message: "How do you test your application?",
    //validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        console.log("Please enter test instructions!");
        return false;
        }},},
{
    type: "input",
    name: "credits",
    message: "Who are the collaborators?",
    //validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        console.log("Please enter collaborators!");
        return false;
        }},},
//User's github
{
    type: "input",
    name: "github",
    message: "What is your GitHub profile?",
    //validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        console.log("Please enter GitHub profile!");
        return false;
        }},},
//User's email
{
    type: "input",
    name: "email",
    message: "What is your email address?",
    //validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        console.log("Please enter project name!");
        return false;
        }},},
//User's license
{
    type: "checkbox",
    name: "license",
    message: "What license are you using?",
    choices: ["MIT", "GNU", "Apache 2.0", "None"],
    validate: (nameInput) => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please choose a license!");
            return false;
        }
        }
    }
];
}
]).then((answers) => {
    fs.writeFile("README.md", markdownData, err =>
    err ? console.log(err) : console.log("Input received."));
}


// TODO: Create a function to write README file
function writeToFile(file, data) {
    const markdownData = generateMarkdown;
fs.appendFile("README.md", markdownData, err =>
    err ? console.log(err) : console.log("Input received."));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) =>
    writeToFile("README.md", response)
    );
}

// Function call to initialize app
init();