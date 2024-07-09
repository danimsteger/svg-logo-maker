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
  .then((data) => {
    // const mySVG = `I want text "${data.text}" in ${data.textColor} inside of a ${data.shape} that is ${data.shapeColor}`;

    //     const mySVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    //   <${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />

    //   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

    // </svg>`;

    const mySVG = createFile(this.shape);

    fs.writeFile("./examples/logo.svg", mySVG, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  });
