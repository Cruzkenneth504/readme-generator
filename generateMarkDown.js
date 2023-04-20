const licenseArr = [
  "Apache license 2.0",
  "MIT",
  "Open Software License 3.0",
  "Microsoft Public License",
  "Academic Free License v3.0",
  "Artistic license 2.0",
];

// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == licenseArr[0]) {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]";
  } else if (license == licenseArr[1]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == licenseArr[2]) {
    return "[![License: OSL-3.0](https://img.shields.io/badge/License-OSL--3.0-lightgrey.svg)](https://opensource.org/licenses/OSL-3.0)";
  } else if (license == licenseArr[3]) {
    return "[![License: MS-PL](https://img.shields.io/badge/License-MS--PL-lightgrey.svg)](https://opensource.org/licenses/MS-PL)";
  } else if (license == licenseArr[4]) {
    return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)";
  } else if (license == licenseArr[5]) {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArr[0]) {
    return `[${licenseArr[0]}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === licenseArr[1]) {
    return `[${licenseArr[1]}](https://opensource.org/licenses/MIT)`;
  } else if (license === licenseArr[2]) {
    return `[${licenseArr[2]}](https://opensource.org/licenses/OSL-3.0)`;
  } else if (license === licenseArr[3]) {
    return `[${licenseArr[3]}](https://opensource.org/licenses/MS-PL)`;
  } else if (license === licenseArr[4]) {
    return `[${licenseArr[4]}](https://opensource.org/licenses/AFL-3.0)`;
  } else if (license === licenseArr[5]) {
    return `[${licenseArr[5]}](https://opensource.org/licenses/Artistic-2.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArr[0]) {
    return `Read more about ${licenseArr[0]} here:`;
  } else if (license === licenseArr[1]) {
    return `Read more about ${licenseArr[1]} here:`;
  } else if (license === licenseArr[2]) {
    return `Read more about ${licenseArr[2]} here:`;
  } else if (license === licenseArr[3]) {
    return `Read more about ${licenseArr[3]} here:`;
  } else if (license === licenseArr[4]) {
    return `Read more about ${licenseArr[4]} here:`;
  } else if (license === licenseArr[5]) {
    return `Read more about ${licenseArr[5]} here:`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
 ## Description 
   ${data.description}
  

  
## Table of Contents (Optional)
  
If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  ${data.installation}

  
  
  ## Usage 
  ${data.usage}

  To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it.
  Then, using the relative filepath, add it to your README using the following syntax:
  
  ![alt text](assets/images/screenshot.png)


  ## Credits
   
  Name: ${data.credits} Email: ${data.email}


  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  
  ---
  
  🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  ${renderLicenseBadge(data.license)}
 

  
  ## Features
  
  If your project has a lot of features, consider adding a heading called "Features" and listing them there.
  
  ## Contributing
    ${data.contributers}
   
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them.
  
  ---
  ## Questions?
  ###Contact: 
  [${data.github}](https://github.com/${data.github})  
  ${data.email};
 

`;
}

module.exports = generateMarkdown;
