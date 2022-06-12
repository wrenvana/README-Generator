// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
----------------------------------------------------------------
- ## [Description](#Description)
- ## [Installation](#Installation)
- ## [Usage](#usage)
- ## [Contributors](#Contributors)
- ## [Testing](#Testing)
- ## [License](#License)
- ## [Username](#Username)
- ## [Email](#Email)
----------------------------------------------------------------
## Description
${data.description}
----------------------------------------------------------------
## Installation

----------------------------------------------------------------
## Usage

----------------------------------------------------------------
## Contributors

----------------------------------------------------------------
## Testing

----------------------------------------------------------------
## License

----------------------------------------------------------------
## Username

----------------------------------------------------------------
## Email

`;
}

module.exports = generateMarkdown;
