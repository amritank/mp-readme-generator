// TODO: Create a function that returns a license badge based on which license is passed in

const { read } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const prefix = "![Static Badge]"
  let licenseBadgeStr = ""
  if (license.includes("MIT")) {
    licenseBadgeStr = prefix + "(https://img.shields.io/badge/MIT-License-blue)";;
  } else if (license.includes("Apache")) {
    licenseBadgeStr = prefix + "(https://img.shields.io/badge/Apache-License-green?logo=apache)";
  } else if (license.includes("GNU")) {
    licenseBadgeStr = prefix + "(https://img.shields.io/badge/GNU-License-green?logo=gnu)";
  } else if (license.includes("Creative Commons")) {
    licenseBadgeStr = prefix + "(https://img.shields.io/badge/CreativeCommons-License-green?logo=creativecommons)";
  }
  return licenseBadgeStr;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes("MIT")) {
    return "https://www.tldrlegal.com/license/mit-license";
  } else if (license.includes("Apache")) {
    return " http://www.apache.org/licenses/";
  } else if (license.includes("GNU")) {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (license.includes("Creative Commons")) {
    return "https://creativecommons.org/share-your-work/cclicenses/"
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  const licenseLink = renderLicenseLink(license);
  return `## License\nThis project is licensed under the ${license} license. Visit [LICENSE](${licenseLink}) for details.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadgeStr = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  let readmeTxt = `
  # ${data.title} \n
  ${licenseBadgeStr} \n
  ## Description\n${data.description} \n
  ## Table Of Contents\n
  - [Installation](#installation)
  - [Usage](#usage)
  - [How To Contrbute](#how-to-contribute)
  - [Testing Instructions](#testing-instructions)
  - [Questions](#questions)
  - [License](#license)\n
  ## Installation\n${data.installation} \n
  ## Usage\n${data.usage} \n
  ## How to Contribute\n${data.contribution} \n
  ## Testing Instructions\n${data.test} \n
  ## Questions\n`;

  if (data.ghubname !== "") {
    readmeTxt += `- Github Profile: https://github.com/${data.ghubname}\n`;
  }

  if (data.email !== "") {
    readmeTxt += `- Contact Me: ${data.email} \n`;
  }

  readmeTxt += `${licenseSection}`;

  console.log(readmeTxt);
  return readmeTxt;
}

module.exports = { generateMarkdown };
