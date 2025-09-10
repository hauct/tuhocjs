// Bài tập JS 15:
// // Viết chương trình nhập vào số nguyên n, in ra kết quả n!
// let n;
// // Validate input - keep asking until gets valid number
// while (true) {
//   n = parseInt(prompt("Vui lòng nhập số nguyên KHÔNG ÂM:"));
//   if (!isNaN(n) && n >= 0) break;
//   alert("Số không hợp lệ, vui lòng nhập lại!");
// }

// // Handle 0 case first (0! = 1)
// let factorial = 1;
// let i = 1;

// while (i <= n) {
//   factorial *= i;
//   i++;
// }

// console.log(`Giai thừa của ${n} là ${factorial}`);

// // Viết chương trình nhập số a từ bàn phím,

// //  - Nếu a chẵn thì tính tổng các số chẵn từ 0 đến a

// //  - Nếu a lẻ thì in ra dòng chữ "tôi o tính tổng số lẻ, bye bye" và thoát chương trình

// let a;
// let totalEvenNumbers = 0;
// let j = 2;

// // Validate input - keep asking until gets valid number
// while (true) {
//   a = parseInt(prompt("Vui lòng nhập số nguyên KHÔNG ÂM:"));
//   if (!isNaN(a) && a >= 0) break;
//   alert("Số không hợp lệ, vui lòng nhập lại!");
// }

// if (a % 2 == 0) {
//   while (j < a) {
//     totalEvenNumbers += j;
//     j = j + 2;
//   }
//   console.log(`tính tổng các số chẵn từ 0 đến ${a} là ${totalEvenNumbers}`);
// } else {
//   alert("tôi o tính tổng số lẻ, bye bye");
// }

//24.4 giai bai tap 17 - tinh tong so le tu 1 den n
/*
Bài tập JS 17:
Viết chương trình tính tổng các số lẻ từ 1 đến n, n nhập từ bàn phím
Nhập n = 7, Bỏ qua không cộng tổng với số 3 => in ra kết quả
(gợi ý đáp án : 1+5+7 =13)
Thử break khi vòng lặp chạy đến giá trị n=3
*/

let n = Number(prompt("Nhập số n:"));

// kiểm tra xem n có phải là số nguyên
while (!Number.isInteger(n)) {
  n = Number(prompt("Nhập lại n, n phải là số nguyên:"));
}
console.log(n);
