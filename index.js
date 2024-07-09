const fs = require("fs");
const inquirer = require("inquirer");
const colors = require("colors");

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
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      message: colors.magenta.bold("What color do you want your shape to be?"),
      name: "shapeColor",
    },
  ])
  .then((data) => {
    const mySVG = `I want text "${data.text}" in ${data.textColor} inside of a ${data.shape} that is ${data.shapeColor}`;

    fs.writeFile("logo.svg", mySVG, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  });
