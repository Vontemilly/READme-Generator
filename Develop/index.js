// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT_License', 'Apache-2.0', 'GPL-3.0', 'ISC', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
      
    ]);
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Generate README content based on answers
            // const generatedContent = `# ${answers.title}\n\n## Description\n${answers.description}\n\n## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n\n## Installation\n${answers.installation}\n\n## Usage\n${answers.usage}\n\n## License\nThis project is licensed under the ${answers.license} license.\n\n## Contributing\n${answers.contribution}\n\n## Tests\n${answers.tests}\n\n## Questions\nFor additional questions, contact [${answers.github}](https://github.com/${answers.github}) or email at ${answers.email}.`;
            const markdownContent = generateMarkdown(answers);
            // Write the README file
            // writeToFile('README.md', generatedContent);
            fs.writeFileSync('README.md', markdownContent);
            
            
            
            console.log('README.md generated successfully!');
        })
        .catch((error) => {
            console.error('Error generating README:', error);
        });
}

const generateMarkdown = require('./utils/generateMarkdown');

// Function call to initialize app
init();
