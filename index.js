// // TODO: Include packages needed for this application

// const fs = require('fs');
// const inquirer = require('inquirer');

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


const fs = require('fs');
const inquirer = require('inquirer');

const generateREADME = (title, description, installation, usage, contributions, testing, license, github, email, questions) => {
  return `
  
  # **${title}**

  ## **Table of Contents**
1. [Description](#description)
2. [How to Install](#installation)
3. [Usage](#usage)
4. [How to Contribute](#contributions)
5. [Testing](#testing)
6. [License](#license)
7. [Contact Information](#contact-information)
8. [Submitting Questions](#submitting-questions)
 
  ## **Description**<a name="description"></a>
  
  ${description}
  
  ## **How to Install**<a name="installation"></a>

  ${installation}

  ## **Usage Information**<a name="usage"></a>
  
  ${usage}
  
  ## **How to Contribute**<a name="contributions"></a>
  
  ${contributions}
  
  ## **Testing**<a name="testing"></a>
  
  ${testing}
  
  ## **License**<a name="license"></a>
  
  ${license}  

  ## **Contact Information**<a name="contact-information"></a>
  
  ${github}
  ${email}

  ## **Submitting Questions**<a name="submitting-questions"></a>
  
  ${questions}
  
  `;
}

inquirer
  .prompt([{
      type: 'input',
      name: 'title',
      message: 'What is the Title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the procedure for installing your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are your directions for using your project?',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'What are the guidelines for users who want to contrubute to your project?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'What instructions do you have for people what want to test your project?',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What kind of license would you like for your project?',
      choices: ["Academic Free License v3.0	", "Creative Commons Attribution 4.0	", "MIT", "Mozilla Public License 2.0	"],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub Username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'How should people reach you if they have questions about your project?',
    },
  ])
  .then((answers) => {
    console.log(answers);
    const READMEContent = generateREADME(
      answers.title,
      answers.description,
      answers.installation,
      answers.usage,
      answers.contributions,
      answers.testing,
      answers.license,
      answers.github,
      answers.email,
      answers.questions,
    );

    fs.writeFile('PRO-README.md', READMEContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
  });