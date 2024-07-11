//Import classes of each shape
const { Triangle, Circle, Square } = require("./shapes");

// Function that creates the SVG file content
function createFile(shape, text, textColor, shapeColor) {
  let shapeSVG = "";

  //The value of shapeSVG changes depending on which shape was selected by the user.
  if (shape === "triangle") {
    const triangle = new Triangle(shapeColor);
    shapeSVG = triangle.render();
  } else if (shape === "circle") {
    const circle = new Circle(shapeColor);
    shapeSVG = circle.render();
  } else {
    const square = new Square(shapeColor);
    shapeSVG = square.render();
  }

  // Returned SVG content to use when writing the SVG file.
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSVG}<text x="145" y="138" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
}

module.exports = createFile;
