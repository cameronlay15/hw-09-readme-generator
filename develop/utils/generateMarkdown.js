function generateMarkdown(data) {
  return `# [${data.title}](https://github.com/${data.accountname}/${data.title})
  ![Most recent commit](https://img.shields.io/github/last-commit/${data.accountname}/${data.title})
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](##Installation)
  * [Usage](##Usage)
  * [License](##License)
  * [Tests](##Tests) 
  * [Contribute](##Contribute)
  ## Installation
  ${data.install}
  ## Usage
  ${data.use}
  ## License
  ${data.license}
  ## Tests
  ${data.test}
  ## Contribute
  ${data.contribute}
  ## Support
  <img src="${data.image}" width="200" height="200"/>
  <br/>Email ${data.name} with any support questions at ${data.accountemail}
  `;
  }
  module.exports = generateMarkdown;
