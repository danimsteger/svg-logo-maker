//import stuff from shapes

const { Triangle } = require("./shapes");

function createFile(text, textColor, shapeColor) {
  const triangle = new Triangle(shapeColor);
  const triangleSVG = triangle.render();

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${triangleSVG}

  <text x="145" y="145" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg> `;
}

module.exports = createFile;
