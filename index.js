//File system to create README
const fs = require("fs");

//Inquirer package
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

//Array of questions for user input
const questions = () => {
  return inquirer.prompt([
    //Application title
    {
      type: "input",
      name: "title",
      message: "What is the title of your application?",
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          //   console.log("Please enter project name!");
          return false;
        }
      },
    },

    //Current year for license info
    {
      type: "input",
      name: "year",
      message: "What is the year?",
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          //   console.log("Please enter current year!");
          return false;
        }
      },
    },

    //Application description
    {
      type: "input",
      name: "description",
      message: "What is the description of your application?",
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          //   console.log("Please enter project description!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "installation",
      message: "How do you install your application?",
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          //   console.log("Please enter installation instructions!");
          return false;
        }
      },
    },

    //Usage instructions
    {
      type: "input",
      name: "usage",
      message: "How do you use your application?",
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          //   console.log("Please enter application instructions!");
          return false;
        }
      },
    },

    //Test instructions
    {
      type: "input",
      name: "test",
      message: "How do you test your application?",
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          //   console.log("Please enter test instructions!");
          return false;
        }
      },
    },

    //Author name for license info
    {
      type: "input",
      name: "fullName",
      message: "What is your name?",
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          //   console.log("Please enter your full name!");
          return false;
        }
      },
    },

    //Project contributors
    {
      type: "input",
      name: "credits",
      message: "Are there any other contributors?",
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          //   console.log("Please enter other contributors!");
          return false;
        }
      },
    },

    //User's github
    {
      type: "input",
      name: "github",
      message: "What is your GitHub profile?",
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          //   console.log("Please enter GitHub profile!");
          return false;
        }
      },
    },

    //User's email
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          //   console.log("Please enter project name!");
          return false;
        }
      },
    },

    //User's license
    {
      type: "checkbox",
      name: "license",
      message: "What license are you using?",
      choices: ["MIT", "GNU", "Apache 2.0", "None"],
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          //   console.log("Please choose a license!");
          return false;
        }
      },
    },
  ]);
};

//Function call to initialize app
questions().then((answers) => {
  console.log(answers);
  fs.writeFile("README.md", generateMarkdown(answers), (err) =>
    err ? console.log(err) : console.log("Input received.")
  );
});
