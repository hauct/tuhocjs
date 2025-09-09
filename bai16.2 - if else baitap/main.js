//bài 16.2, if - else if - else:
/*
Nhập vào điểm TB, in ra xếp loại của học sinh
Giỏi: dtb <= 10 và dtb >=8
Khá : 8>dtb>=6.5
TB : 6.5>dtb>=5
Yếu: 0<= dtb <5
*/

// let dtb = Number(prompt("Mời cụ nhập điểm:"));

// if (dtb <= 10 && dtb >= 8) {
//   console.log("Giỏi");
// } else if (dtb < 8 && dtb >= 6.5) {
//   console.log("Khá");
// } else if (dtb <= 6.5 && dtb >= 5) {
//   console.log("TB");
// } else if (dtb < 5 && dtb >= 0) {
//   console.log("Yếu");
// } else {
//   console.log("Bạn nhập điểm tào lao");
// }

// bai16.2 tính tổng và hiệu

let tong = Number(prompt("Mời nhập tổng:"));
let hieu = Number(prompt("Mời nhập hiệu:"));

let x = (tong + hieu) / 2;
let y = tong - x;

console.log(`Giá trị của x là ${x}`);
console.log(`Giá trị của y là ${y}`);
