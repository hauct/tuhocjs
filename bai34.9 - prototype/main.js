// 34.9 - oop buoi 9 - Prototype trong JavaScript
// Mảng thực chất có kiểu dữ liệu là object (xem lại bài 32.1)
// Khai báo mảng
let M = new Array();
console.log(typeof M);
console.log(M);

// Rõ ràng mảng M rỗng,
// nhưng vì kế thừa các phương thức và thuộc tính của cha
// nên chúng ta có thể sử dụng các thuộc tính
// và phương thức từ nguyên mẫu cha mẹ
console.log(M.length);
M.push(4);
console.log(M);

// 34.10 Khám phá sâu hơn về Prototype và OOP trong JavaScript phần 2
// Ở bài học trước chúng ta đã học về prototype (nguyên mẫu)
function Student(fullName, ID, birthYear, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  // phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
}

// Tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo Student
const sv1 = new Student("Nguyễn Văn A", "2024001", 2005, "Nam Định");
const sv2 = new Student("Nguyễn Văn B", "2024002", 2004, "Hà Nội");
console.log(sv1);

// Có cách nào để kiểm tra nguyên mẫu cha mẹ của đối tượng không?
// 4. Xem nguyên mẫu - cha mẹ của đối tượng sv1
console.log("Kiểm tra nguyên mẫu cha mẹ của sv1: ");
console.log(Object.getPrototypeOf(sv1));
// console.log(sv1.__proto__); // cũ, và không khuyên dùng

// Mọi hàm trong js đều có prototype
console.log("Student.prototype #####: ");
console.log(Student.prototype);

// check
console.log(Student.prototype === Object.getPrototypeOf(sv1));

// 💡 Cách khác
console.log(Student.prototype.isPrototypeOf());

// 5. Thêm phương thức vào Student.prototype
Student.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

console.log(sv1);
sv1.calcAge();
sv2.calcAge();

// 6. Thêm thuộc tính vào Student.prototype
Student.prototype.email = "noemail@gmail.com";

console.log(sv1.email);
console.log(sv2.email);

// Thực vậy, nếu kiểm tra sv1 có trực tiếp chứa thuộc tính email
console.log(sv1.hasOwnProperty("email"));
console.log(sv1.hasOwnProperty("fullName"));
console.log(sv1.hasOwnProperty("homeTown"));
