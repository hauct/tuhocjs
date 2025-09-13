/*
Cú pháp:
setTimeout(function, milliseconds, param1, param2, ...)
function: Hàm mà chúng ta muốn thực hiện sau khoảng thời gian.
delay: Thời gian chờ trước khi hàm được gọi, được đo bằng mili giây.
*/

// 1. Ôn lại 3 cách khai báo hàm
// a. với Arrow function
let helloArrow = () => {
  console.log("Hello");
};
// Gọi hàm
// helloArrow();
setTimeout(helloArrow, 3000);

// b. với function declaration
function xinChao() {
  console.log("Hello in function declaration");
}
setTimeout(xinChao, 3000);

// c. với function expression
let helloExpression = function () {
  console.log("Hello in ");
};

// 2 Truyền trực tiếp function vào setTimeout
// a. setTimeout với function declaration
// setTimeout(function xinChao() {
//     console.log("Hello in function declaration");
// }, 3000);

// b. setTimeout với function expression
// setTimeout(function () {
//   console.log("Hello in function expression");
// }, 3000);

//c. setTimeout với arrow function
setTimeout(() => {
  console.log("Hello");
}, 3000);
