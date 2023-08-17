// NPM packages.
const fs = require('fs');
const inquirer = require('inquirer');

// Stores prompt answers in a variable and returns data in a markdown template for the README.md file that is being generated.
const generateREADME = (title, description, installation, usage, contributions, testing, license, github, email, questions) => {
  
  return `
  
  # **${title}** 

  ## **Table of Contents**
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Testing](#testing)
  6. [License](#license)
  7. [Contact Information](#contact-information)
  8. [Questions](#questions)
 
  ## **Description**<a id="description"></a>
  
  ${description}
  
  ## **Installation**<a id="installation"></a>

  ${installation}

  ## **Usage**<a id="usage"></a>
  
  ${usage}
  
  ## **Contributing**<a name="contributing"></a>
  
  ${contributions}
  
  ## **Testing**<a id="testing"></a>
  
  ${testing}
  
  ## **License**<a id="license"></a>
  
  ${license}  

  ## **Contact Information**<a id="contact-information"></a>
  
  ${github}\n
  ${email} 

  ## **Questions**<a id="questions"></a>
  
  ${questions}
  
  `;
}

// Questions for README.md.
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

  // Console.logs and stores data from inquierer prompts.
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

    // Function to write README.md file using user data gathered from inquierer prompts.
    fs.writeFile('PRO-README.md', READMEContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
  });