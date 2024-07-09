//import stuff from shapes

const Triangle = require("./shapes");
const Shape = require("./shapes");

function createFile(triangle) {
  const triangle = new Triangle().render();

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${triangle}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg> `;
}

module.exports = createFile;
