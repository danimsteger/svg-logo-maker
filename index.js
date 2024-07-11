// Imports necessary files, functions, and programs
const fs = require("fs");
const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const colors = require("colors");
const createFile = require("./lib/file");

// Registers maxlength-input prompt type with Inquirer
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

inquirer
  .prompt([
    // Prompts users to input the text for their logo
    // Only allows a maximum of three characters to be input
    {
      type: "maxlength-input",
      message: colors.white.bold(
        "Please enter the text for your logo. (You can add up to 3 characters)"
      ),
      name: "text",
      maxLength: 3,
    },
    // Prompts users to pick a text color
    {
      type: "input",
      message: colors.magenta.bold("What color do you want your text?"),
      name: "textColor",
    },
    // Prompts users to pick a shape from a list
    {
      type: "list",
      message: colors.white.bold("What shape would you like your logo to be?"),
      name: "shape",
      choices: ["circle", "triangle", "square"],
    },
    // Prompts users to pick a shape color
    {
      type: "input",
      message: colors.magenta.bold("What color do you want your shape to be?"),
      name: "shapeColor",
    },
  ])
  .then((answers) => {
    // Takes answers from prompt inputs
    const { shape, text, textColor, shapeColor } = answers;

    this.shape = shape;
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;

    // Calls createFile() function with input values
    const mySVG = createFile(shape, text, textColor, shapeColor);

    // Writes file in examples folder with the SVG file content created with createFile()
    fs.writeFile("./examples/logo.svg", mySVG, (err) => {
      // Logs an error if there is an error
      if (err) {
        console.log(err);
      } else {
        // Logs a success message if there is no error
        console.log("Generated logo.svg");
      }
    });
  });
