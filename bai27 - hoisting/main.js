// 27. var và let, hoisting trong js
console.log("Giá trị của biến c = " + c);
// khởi tạo c
var c = 9; //undefined

//let c = 9; //Cannot access 'c' before initialization
// Cách js hiểu
/*
var c;
console.log("Giá trị của biến c = " + c);
// khởi tạo
c = 9;
*/

/*
2. Phạm vi sử dụng (Scope):
var: Có phạm vi là function-scope
let: Có phạm vi là block-scope
*/
//var: Có phạm vi là function-scope
function exampleVar() {
  if (true) {
    var y = 20; //khởi tạo y nằm trong phạm vi block scope
    console.log(`${y} trong block scope`);
  }
  console.log(`${y} trong vi function scope`);
}
exampleVar();

//  Trình biên dịch hiểu
// JS hiểu
function exampleVar() {
  var y;
  if (true) {
    y = 20; //khởi tạo y nằm trong phạm vi block scope
    console.log(`${y} trong block scope`);
  }
  console.log(`${y} trong vi function scope`);
}
exampleVar();

/*
3. Re-declaration:
var: Có thể khai báo lại một biến sử dụng var mà không gây ra lỗi.
let: Không thể khai báo lại một biến sử dụng let trong cùng một phạm vi.
*/

var diemToan;
// code chương trình
var diemToan;

// let
// let diemVan;
// let diemVan;

// 27.2 - Hoisting in function
/*
1. Hoisting:
Function Declaration: Có hoisting. Bạn có thể gọi hàm trước khi khai báo.
*/

hoistedFunction();

function hoistedFunction() {
  console.log("Hello");
}
// Engine của trình duyệt đọc:
function hoistedFunction() {
  console.log("Hello");
}
hoistedFunction();

/*
Function Expression: Không có hoisting. Phải gọi hàm sau khi khai báo.
*/
// nonHoistedFunction();
let nonHoistedFunction = function () {
  console.log("Hello");
};

/*
Arrow Function: Không có hoisting. Phải gọi hàm sau khi đã khai báo.
*/
// arrowFunction();
let arrowFunction = () => {
  console.log("Hello");
};
