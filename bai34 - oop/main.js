// ####34.1 - oop buoi 1 - tong quan - Literal syntax ####
let a = 5;
let b = 7.5;
console.log(typeof a);
console.log(typeof b);
let check = true;
console.log(typeof check);

let str = "Hôm nay tôi học obj";
console.log(typeof str);

M = ["hoa", "trang", "lan", "mai"];
console.log(typeof M);

/* 1. khai báo đối tượng , literal syntax */
let student = {
  // key + value
  // thuộc tính
  fullName: "Trần Như Nhộng",
  birthYear: 2005,
  address: {
    city: "Hà Nội",
    country: "Việt Nam",
  },
  scores: [8, 9, 10],

  // phương thức
  getAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  diemTrungBinh: function () {
    // tinh tổng điểm
    this.sumScores = this.scores.reduce((total, score) => total + score, 0);
    return this.sumScores / this.scores.length;
  },
};

let teacher = {
  "1 fullName": "Jacob",
  "@address": {
    city: "Hanoi",
    country: "VietNam",
  },
};

// Kiểm tra kiểu loại
console.log(typeof student);
console.log(typeof teacher);

// ####34.2 ####
// 2. Truy Cập Thuộc Tính : Dot Notation . và Bracket Notation []
// 2.1 Sử dụng dot (.) - Dot Notation
console.log(student.fullName);
console.log(student.address);
console.log(student.scores);

// 2.2 Sử dụng [] - Bracket Notation - và truyền vào giá trị của key
/*
Bracket Notation dùng khi key đặc biệt -
có khoảng trắng, vi phạm quy tắc đặt tên biến....
*/
console.log(teacher["1 fullName"]);
console.log(student["address"]);

// Linh động sử dụng với biến
let inputKey = prompt("Mời nhập key: (address, scores )");
console.log("Truy xuất đến key dùng với tên biến inputKey:");
console.log(student[inputKey]); // Lưu ý: Dòng này trong ảnh bị cắt mất "inputKey" và chỉ thấy "address", nhưng ý đồ code là dùng biến

// 3.1 Truy cập phương thức
console.log("Truy cập phương thức ");
console.log(student.getAge());
console.log(student.diemTrungBinh());

/*
3.2 Vấn đề : (Giả sử trong chương trình bạn cần gọi nhiều lần hàm getAge
--> Chương trình của bạn sẽ mất nhiều lần tính toán do hàm bị gọi đi gọi lại
*/
student.getAge();

// ####34.4 ####
// 4. Thêm, xóa thuộc tính (thêm cặp key value)
student.email = "tuhoc.cc@gmail.com"; // Thêm mới thuộc tính
student["website"] = "http://tuhoc.cc"; // Thêm mới thuộc tính

// Xuất đối tượng để xem
console.log(student);
console.log(student.email);
console.log(student.website);

// Xóa bỏ thuộc tính
delete student.email;
console.log(student); // đã mất thuộc tính email

// Sửa thuộc tính
student.website = "giá trị đã bị sửa";
console.log(student);
