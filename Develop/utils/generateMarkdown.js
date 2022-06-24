// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Licensing:
  [![license](hyttps://img.shields.io/badge/license${data.licensing}-blue)](https://shields.io)
  
  ## Table of Contents 
  - [Description](#description)
  - [Install](#install)
  - [Use](#use)
  - [Contribution](#contirbution)
  - [Test](#test)
  - [Additional Info](#additional-info)

  ## Description:
  ${data.description}

  ## Install:
  ${data.install}

  ## Use:
  ${data.use}

  ## License:
  ${data.licensing}

  ## Contribution
  ${data.contribution}

  ## Test:
  ${data.test}

  ##Additional Info: 
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} 
  `;
}

module.exports = generateMarkdown;
