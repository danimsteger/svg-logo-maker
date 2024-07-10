const fs = require("fs");
const inquirer = require("inquirer");
const colors = require("colors");
const createFile = require("./lib/file");

inquirer
  .prompt([
    {
      type: "input",
      message: colors.white.bold(
        "Please enter the text for your logo. (You can add up to 3 characters)"
      ),
      name: "text",
    },
    {
      type: "input",
      message: colors.magenta.bold("What color do you want your text?"),
      name: "textColor",
    },
    {
      type: "list",
      message: colors.white.bold("What shape would you like your logo to be?"),
      name: "shape",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: colors.magenta.bold("What color do you want your shape to be?"),
      name: "shapeColor",
    },
  ])
  .then((answers) => {
    const { text, textColor, shapeColor } = answers;

    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;

    const mySVG = createFile(this.text, this.textColor, this.shapeColor);

    fs.writeFile("./examples/logo.svg", mySVG, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  });
