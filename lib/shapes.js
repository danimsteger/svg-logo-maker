class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<polygon points="145,15 280,190 10,190" fill="${this.shapeColor}"/>`;
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<rect width="190" height="190" x="50" y="50" fill="${this.shapeColor}"/>`;
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.shapeColor}"/>`;
  }
}

module.exports = { Triangle, Square, Circle };

// class Triangle {
//   constructor(shapeColor) {
//     this.shapeColor = shapeColor;
//   }
//   render() {
//     return `<polygon points="145,15 280,190 10,190" fill="${this.shapeColor}"/>`;
//   }
// }

// class Square {
//   constructor(shapeColor) {
//     this.shapeColor = shapeColor;
//   }
//   render() {
//     return `<rect width="190" height="190" x="50" y="50" fill="${this.shapeColor}" />`;
//   }
// }

// class Circle {
//   constructor(shapeColor) {
//     this.shapeColor = shapeColor;
//   }
//   render() {
//     return `<circle cx="150" cy="115" r="80" fill="${this.shapeColor}"/>`;
//   }
// }
