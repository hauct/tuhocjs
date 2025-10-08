// Định nghĩa lớp cơ sở Shape
class Shape {
  constructor(name) {
    this.name = name;
  }

  // Phương thức của lớp Shape
  calculateArea() {
    // Có thể giữ trống hoặc ném lỗi để ép subclass phải triển khai hoặc trả ra là 0
    return 0;
  }
}

class Square extends Shape {
  constructor(name, side) {
    // Thêm tham số 'name' để truyền lên Shape
    super(name); // Gọi super() trước khi sử dụng 'this'
    this.side = side; // Có thể đặt tên là 'side' cho rõ nghĩa
  }
  // Phương thức tính diện tích hình vuông
  calculateArea() {
    return this.side * this.side; // Sử dụng thuộc tính của instance
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    // Thêm tham số 'name'
    super(name); // Gọi super() trước
    this.width = width;
    this.height = height;
  }
  // Phương thức tính diện tích hình chữ nhật
  calculateArea() {
    return this.width * this.height; // Sử dụng thuộc tính của instance
  }
}

// Tạo các đối tượng hình
const sq1 = new Square("Hình vuông", 5);
const rec1 = new Rectangle("Hình chữ nhật", 4, 6);

// Tính diện tích và in ra kết quả
console.log(sq1.calculateArea());
console.log(rec1.calculateArea());
console.log(`Diện tích của ${sq1.name} là ${sq1.calculateArea()}`);
console.log(`Diện tích của ${rec1.name} là ${rec1.calculateArea()}`);
