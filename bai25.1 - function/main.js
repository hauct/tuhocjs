// // 3. function với tham số (parameters)
// let inputName = prompt("Mời nhập vào tên của bạn:");

// // Khai báo hàm
// function xinChao2(name) {
//   console.log(`Chào mừng ${name} đến với tuhoc.cc`);
// }

// // Gọi hàm
// xinChao2(inputName);

// // ================
// // 2.1 Function declaration()
// // Function declaration
// function tenFunction(parameters) {
//   // Thân hàm
//   // return something;
// }

// // Khai báo hàm
// function tong(a = 0, b = 0) {
//   return a + b;
// }

// // Gọi hàm
// console.log(tong(5, 3));

// // 2.2 Function expression
// // Function expression
// let ten_bien = function (parameters) {
//   // Thân hàm
//   // return something;
// };

// // khai báo
// let tich = function (a, b) {
//   return a * b;
// };

// // gọi hàm
// console.log(tich(3, 5));

// 2.3 Arrow Function

let multiply = (a, b) => {
  return a * b;
};
console.log(multiply(9, 10));

// 2.4 Gọi hàm trong hàm

let cong = (a, b) => a + b;
let nhan = (a, b) => a * b;

function congNhan(a, b, c) {
  let sum = cong(a, b);
  let product = nhan(sum, c);
  return product;
}

console.log(congNhan(1, 2, 3));
