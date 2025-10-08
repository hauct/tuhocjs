// 34.12 Static method
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // instance method
  static draw() {
    console.log("Phương thức draw được gọi");
  }
}

// Tạo đối tượng
const c1 = new Circle(10);
const c2 = new Circle(5);

c1.draw();
c2.draw();

// Call static method
console.log(Circle.calcArea(10));
console.log(Circle.calcArea(5));
