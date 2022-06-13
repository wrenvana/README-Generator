const generateLicense = require("./license");

// Function to generate markdown for README
function generateMarkdown(data) {
  //Generate license info
  const licenseString = generateLicense(
    data.license[0],
    data.year,
    data.fullName,
    data.title
  );

  //Generate Table of Contents
  return (
    `# ${data.title}
    ` +
    `## Table of Contents
    ` +
    `----------------------------------------------------------------
    ` +
    `- ## [Description](#Description)
    ` +
    `- ## [Installation](#Installation)
    ` +
    `- ## [Usage](#usage)
    ` +
    `- ## [Contributors](#Contributors)
    ` +
    `- ## [Testing](#Testing)
    ` +
    `- ## [License](#License)
    ` +
    `- ## [Username](#Username)
    ` +
    `- ## [Email](#Email)
    ` +
    `----------------------------------------------------------------
    ` +
    `## Description
    ` +
    `${data.description}
    ` +
    `----------------------------------------------------------------
    ` +
    `## Installation
    ` +
    `${data.installation}
    ` +
    `----------------------------------------------------------------
    ` +
    `## Usage
    ` +
    `${data.usage}
    ` +
    `----------------------------------------------------------------
    ` +
    `## Contributors
    ` +
    `${data.credits}
    ` +
    `----------------------------------------------------------------
    ` +
    `## Testing
    ` +
    `${data.test}
    ` +
    `----------------------------------------------------------------
    ` +
    `## License
    ` +
    `${licenseString}
    ` +
    `----------------------------------------------------------------
    ` +
    `## Username
    ` +
    `${data.github}
    ` +
    `----------------------------------------------------------------
    ` +
    `## Email
    ` +
    `${data.email}
    `
  );
}

module.exports = generateMarkdown;
