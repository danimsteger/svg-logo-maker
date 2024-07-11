# SVG Logo Maker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project involved creating a command-line application to dynamically generate a SVG file based on user inputs. It involved using JavaScript, Node, npm, Jest, Inquirer, and Colors.

![Sample photo of a generated SVG](/assets/images/mainphoto.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Installation

To view the code of this project, you can clone this repository using the following commands in your command line:

### Clone this repository

```
git clone git@github.com:danimsteger/svg-logo-maker.git
```

### Go into this repository

```
cd svg-logo-maker
```

### Create npm package

```
npm init -y
```

### Install Inquirer v8.2.4 Module

```
npm install inquirer@8.2.4
```

### Install Colors Module

```
npm install colors
```

### Add Inquirer MaxLength-Input-Prompt

```
npm add inquirer-maxlength-input-prompt
```

### Access code of the repository

```
code .
```

## Usage

To view a video walkthrough of this application, click [here](https://drive.google.com/file/d/1iyjGkgTVQJsaJUbGd0j2oZHtBPWN2dnX/view).

To view the program, navigate to the cloned repository and run the following command in your terminal to invoke the application:

```
node index
```

This will display the prompts in the terminal, one question at a time. By using Inquirer MaxLength-Input-Prompt, the application will only allow you to add a maximum of three characters for the text input for the logo.

For the text-color and shape-color prompts, users can enter a color by its hexadecimal number or by entering any of the following colors: aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, and yellow. If no color is inputed or if an invalid color or hexidecimal number is inputed, the color will default to black.

For the shape prompt, users select from a list of three shapes: circle, square, or triangle.

![Sample view of the terminal with completed prompts](/assets/images/terminal.png)

## Tests

Several tests were created to test the code for creating the different shapes for the SVG and creating the SVG file content. To run the tests, make sure that Jest is installed. If it isn't, install using the following command in your terminal:

```
npm install jest --save-dev
```

Additionally, you should add the following code to your package.json file:

```
 "scripts": {
    "test": "jest"
  },
```

To run the tests, run the following command in your terminal.

```
npm run test
```

Once the tests have been run, it should display the following to show that all tests passed:
![Sample of passing tests in terminal](/assets/images/tests.png)

## Credits

This project was entirely created by Danielle Steger. To complete this project, several articles on "MDN Web Docs" and "W3Schools" were referenced. Additionally, materials provided by edX Boot Camps LLC were referenced. This project was completed with the use of node and several npm modules including Inquirer8.2.4, Colors, Jest and their corresponding documentation was referenced as well.

To create a maximum character length for the text input, Inquirer MaxLength-Input-Prompt was used and the documentation that was referenced to do so is linked [here](https://www.npmjs.com/package/inquirer-maxlength-input-prompt).
