// 29.6 indexOf, lastIndexOf, includes
// 5.12 string.indexOf(searchValue, fromIndex);
// tìm kiếm (searchValue) trong chuỗi.
// Nếu giá trị tìm kiếm không được tìm thấy, phương thức trả về -1
/*
fromIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi.
Nếu không được cung cấp, tìm kiếm sẽ bắt đầu từ đầu chuỗi.
*/
let s25 = "abcdef abcdef";
let s26 = s25.indexOf("d");
console.log(s26);

// Tìm chữ "c" nhưng bắt đầu từ vị trí index 3
console.log(s25.indexOf("d", 3));

let notFoundIndex = s25.indexOf("g");
console.log(notFoundIndex);

// 5.13 string.lastIndexOf(searchValue, endIndex);
/*
tìm kiếm giá trị xuất hiện cuối cùng của chuỗi tìm kiếm (searchValue)
Nếu giá trị tìm kiếm không được tìm thấy, phương thức trả về -1
endIndex (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi từ phải sang trái.
Nếu không được cung cấp, tìm kiếm sẽ bắt đầu từ cuối chuỗi.
*/
let s27 = "abcdef abcdef";
let s28 = s27.lastIndexOf("a");
console.log(s28);
