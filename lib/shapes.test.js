const { Triangle, Circle, Square } = require("./shapes");

describe("shapes", () => {
  describe("triangle", () => {
    it("should create a triangle SVG with the given color", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="145,15 280,190 10,190" fill="blue"/>'
      );
    });
  });

  describe("circle", () => {
    it("should create a circle SVG with the given color", () => {
      const shape = new Circle();
      shape.setColor("yellow");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="yellow"/>'
      );
    });
  });
  describe("square", () => {
    it("should create a square SVG with the given color", () => {
      const shape = new Square();
      shape.setColor("orange");
      expect(shape.render()).toEqual(
        '<rect width="190" height="190" x="50" y="50" fill="orange"/>'
      );
    });
  });
});
