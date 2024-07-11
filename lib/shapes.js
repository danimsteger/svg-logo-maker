// Shape Class
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

// Triangle Class
class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    // Creates triangle shape for SVG
    return `<polygon points="145,15 280,190 10,190" fill="${this.shapeColor}"/>`;
  }
}

// Square Class
class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    // Creates square shape for SVG
    return `<rect width="190" height="190" x="50" y="50" fill="${this.shapeColor}"/>`;
  }
}

// Circle Class
class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  // Create circle shape for SVG
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.shapeColor}"/>`;
  }
}
// Exports classes to be used when creating the file.
module.exports = { Triangle, Square, Circle };
