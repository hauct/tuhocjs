// 13. Toán tử Spread (...) - ES6
// 13.1 Tạo bản sao (clone) của mảng:
// Tạo ra mảng mới nằm trên ô nhớ mới, có phần tử giống hệt mảng gốc
let M1 = [1, 2, 3];
// let M2 = [...M1];
let M2 = M1.slice();
console.log(M2);
// Mảng M2 là clone của M1,
// và thay đổi giá trị của M2 không liên quan đến M1
M2[0] = 99;
console.log("Mảng M2 = " + M2);
console.log("Mảng M1 = " + M1);

// 13.2 Truyền đối số vào hàm:
function sum(a, b, c) {
  return a + b + c;
}

let numbers = [5, 2, 3];
let result = sum(...numbers);
console.log(result);

// 13.3 Kết hợp mảng:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combineArr = [...arr1, ...arr2];
console.log(combineArr);

// 13.4 Tạo mảng mới với thêm phần tử:
let M3 = [1, 2, 3];
let M4 = [...M3, 4, 5, 6];
console.log(M4);

// 13.5 Chuyển đổi iterable thành mảng:
let myName = "jacky";
let chars = [...myName];
console.log(chars);
