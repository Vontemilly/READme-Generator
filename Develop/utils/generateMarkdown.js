


function generateMarkdown(data) {
  // Defines a map of license details
  const licenseDetails = {
    'MIT': {
      name: 'MIT License',
      badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
      link: 'https://opensource.org/licenses/MIT',
      description: 'A permissive open source license.'
    },
    'Apache-2.0': {
      name: 'Apache License 2.0',
      badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      link: 'https://opensource.org/licenses/Apache-2.0',
      description: 'A permissive free software license written by the Apache Software Foundation.'
    },
    'GPL-3.0': {
      name: 'GNU General Public License 3.0',
      badge: 'https://img.shields.io/badge/License-GPL%203.0-blue.svg',
      link: 'https://opensource.org/licenses/GPL-3.0',
      description: 'A copyleft license that requires any modified versions of the code to be distributed under the same license.'
    },
    'ISC': {
      name: 'ISC License',
      badge: 'https://img.shields.io/badge/License-ISC-blue.svg',
      link: 'https://opensource.org/licenses/ISC',
      description: 'A simple and permissive open source license.'
    },
  };

  // Gets the license details for the specified license
  const selectedLicense = licenseDetails[data.license] || { name: `${data.license}`, badge: '', link: '', description: '' };

return `# ${data.title}
  ![License](${selectedLicense.badge}) 

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
 
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For additional questions, contact [${data.github}](https://github.com/${data.github}) or email at ${data.email}.

  ## License Section
  The project is licensed under the [${selectedLicense.name}](${selectedLicense.link}). ${selectedLicense.description}
`;
n
}

module.exports = generateMarkdown;
