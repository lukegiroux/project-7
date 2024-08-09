// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write your description here!',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Write your install instructions here!',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write your usage instructions here!',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Write your credits here!',
    },
    {
        type: 'checkbox',
        message: 'Select a license!',
        name: 'license',
        choices: [
            'Apache License 2.0', 
            'MIT License', 
            'Creative Commons Zero v1.0 Universal', 
            'Mozilla Public License 2.0', 
            'Eclipse Public License 2.0', 
            'Boost Software License 1.0'
        ],
    },
    // Add more questions here
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./README.md", generateMarkdown({ ...responses }));
    });
}

init();
