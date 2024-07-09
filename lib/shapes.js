// Sample SVG file:
/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */

class Shape {
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor);
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
  render() {
    return `<polygon points="100,30 175,190 25,190" fill=${data.shapeColor}`;
  }
}

// Triangle SVG:
//<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
{
  /* <polygon points="100,30 175,190 25,190" style="fill:lime;stroke:purple;stroke-width:3" />
Sorry, your browser does not support inline SVG.
</svg> */
}

module.exports = { Shape, Triangle };
