//import stuff from shapes
const { Triangle, Circle, Square } = require("./shapes");

function createFile(shape, text, textColor, shapeColor) {
  let shapeSVG = "";
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

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shapeSVG}

  <text x="145" y="138" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg> `;
}

module.exports = createFile;
