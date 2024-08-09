// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
      case 'Apache License 2.0':
          return 'https://www.apache.org/licenses/LICENSE-2.0';
      case 'MIT License':
          return 'https://opensource.org/licenses/MIT';
      case 'Creative Commons Zero v1.0 Universal':
          return 'https://creativecommons.org/publicdomain/zero/1.0/';
      case 'Mozilla Public License 2.0':
          return 'https://www.mozilla.org/en-US/MPL/2.0/';
      case 'Eclipse Public License 2.0':
          return 'https://www.eclipse.org/legal/epl-2.0/';
      case 'Boost Software License 1.0':
          return 'https://www.boost.org/LICENSE_1_0.txt';
      default:
          return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Install Instructions
${data.install}
## Usage Instruction
${data.usage}
## Credits
${data.credits}
## License Used
${data.license}`;
}

export default generateMarkdown;
