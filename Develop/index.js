// Global require's
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js')

// Questions Array 
const questions = [
    // Project name
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title:',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Project title required!');
                return false;
            }
        }
    },
    // Description of project
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Project description required!');
                return false;
            }
        }
    },
    // Install Instructions
    {
        type: 'input',
        name: 'install',
        message: 'Enter install instructions:',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Install instructions required!');
                return false;
            }
        }
    },
    // Usage Information
    {
        type: 'input',
        name: 'use',
        message: 'Enter project use:',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Project use required!');
                return false;
            }
        }
    },
    // Contribution Guidlines
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Contribution guidelines required!');
                return false;
            }
        }
    },
    // Test Instructions 
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Test instructions required!');
                return false;
            }
        }
    },
    // License Options
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose project license:',
        choices: ['Apache', 'Common-Development-and Distribution', 'GNU-General-Public', 'Mozilla-Public', 'MIT', 'None'],
        validate: licenseCheckbox => {
            if (licenseCheckbox) {
                return true;
            } else {
                console.log('Project license choice required!');
                return false;
            }
        }
    },
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter project GitHub username:',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Github username required!');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'If you would like, enter your email address:',
    },
];

// Write README.md file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to README.md file!')
    });
};

// Initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Call to initialize app
init();