// Bài 4 và 5: Tính diện tích các hình

// Hình tròn
alert("Tính diện tích hình tròn");

// Khai báo bán kính
let radius = Number(prompt("Bán kính là"));
// Diện tích
let circleAcreage = Math.PI * radius;
console.log(`Diện tích hình tròn là ${circleAcreage}`);

// Hình chữ nhật
alert("Tính diện tích hình chữ nhật");

// Khai báo chiều cao, rộng
let height = Number(prompt("Chiều dài là"));
let width = Number(prompt("Chiều rộng là"));

// Diện tích
let rectangleAcreage = height * width;
console.log(`Diện tích hình chữ nhật là ${rectangleAcreage}`);

// Bài 6: Tính điểm trung bình
// Thông báo nhập điểm
alert("Nhập điểm để tính điểm trung bình");

// Nhập các điểm
let mathGrade = Number(prompt("Điểm Toán là"));
let literatureGrade = Number(prompt("Điểm Văn là"));
let englishGrade = Number(prompt("Điểm Anh là"));

// Điểm trung bình
let averageGrade = (mathGrade + literatureGrade + englishGrade) / 3;
console.log(`Điểm trung bình là ${averageGrade.toFixed(2)}`);
