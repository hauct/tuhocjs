// 2. Function() constructor : Hàm tạo - sử dụng để tạo khuôn mẫu (prototype)
// Viết hoa chữ cái đầu để phân biệt với các hàm thông thường
// Cách 1 : function expression ( ít dùng )
const SinhVien = function (fullName, ID, birthYear, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;

  // phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
};

// Cách 2 : function decoration ( thường dùng )
function SinhVien(fullName, ID, birthYear, homeTown) {
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

// Các bước tạo ra đối tượng
/*
Step 1: Sử dụng từ khóa new để tạo một thể hiện mới của một hàm tạo
--> 1 đối tượng mới rỗng sẽ được tạo ra

Step 2: Gọi đến hàm tạo Student().
Trong quá trình này, từ khóa this trong hàm tạo tham chiếu đến đối tượng vừa được tạo,
nơi các thuộc tính và phương thức sẽ được gán.

Step 3: {} linked đến prototype :
Khi một thể hiện mới được tạo, JavaScript tự động liên kết nó với nguyên mẫu
Sẽ được học sau

Step 4: Sau khi các thuộc tính và phương thức được gán cho đối
tượng mới thông qua từ khóa this, hàm tạo sẽ tự động trả về đối tượng mới này
*/

// truy cập thuộc tính và phương thức của đối tượng:
console.log(sv1.fullName); // Dot notation 34.2
console.log(sv1["fullName"]); // Bracket Notation (bài 34.2)
console.log(sv2.fullName);
console.log(sv2.showInfo());

// Sv1, và sv2 có thể gọi là các đối tượng cụ thể, hoặc gọi là các instance (thể hiện)
let abc = 5;
console.log("Kiểm chứng instance");
console.log(sv1 instanceof Student);
console.log(abc instanceof Student);
