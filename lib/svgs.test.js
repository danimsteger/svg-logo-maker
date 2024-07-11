const createFile = require("./file");

// Tests creating the SVG file content for each shape
describe("svgs", () => {
  // Tests creating a triangleSVG with a certain shape color and text color
  describe("triangleSVG", () => {
    it("should create a SVG file for a logo with a triangle shape, and the appropriate text and shape color", () => {
      const shape = "triangle";
      const text = "DMS";
      const textColor = "#1D6265";
      const shapeColor = "silver";
      expect(createFile(shape, text, textColor, shapeColor)).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="145,15 280,190 10,190" fill="silver"/><text x="145" y="138" font-size="60" text-anchor="middle" fill="#1D6265">DMS</text></svg>`
      );
    });
  });

  // Tests creating a triangleSVG with a certain shape color and text color
  describe("circleSVG", () => {
    it("should create a SVG file for a logo with a circle shape, and the appropriate text and shape color", () => {
      const shape = "circle";
      const text = "HI";
      const textColor = "#1D6265";
      const shapeColor = "silver";
      expect(createFile(shape, text, textColor, shapeColor)).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="silver"/><text x="145" y="138" font-size="60" text-anchor="middle" fill="#1D6265">HI</text></svg>`
      );
    });
  });

  // Tests creating a triangleSVG with a certain shape color and text color
  describe("squareeSVG", () => {
    it("should create a SVG file for a logo with a square shape, and the appropriate text and shape color", () => {
      const shape = "square";
      const text = "MO";
      const textColor = "#1D6265";
      const shapeColor = "silver";
      expect(createFile(shape, text, textColor, shapeColor)).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="190" height="190" x="50" y="50" fill="silver"/><text x="145" y="138" font-size="60" text-anchor="middle" fill="#1D6265">MO</text></svg>`
      );
    });
  });
});
