//8. indexOf(): Trả về vị trí index của phần tử xuất hiện lần đầu tiên
//Trả về -1 nếu không tìm thấy.
let arr9 = [1, 2, 3, 4, 5, 2, 6, 7];
let indexElement = arr9.indexOf(20);
console.log(indexElement);

//9. lastIndexOf(): Trả về vị trí index của phần tử xuất hiện lần cuối cùng
//Trả về -1 nếu không tìm thấy.
let arr10 = [1, 2, 3, 4, 5, 2, 6, 7];
let lastIndex = arr10.lastIndexOf(2);
console.log(lastIndex);

//10. reverse(): đảo ngược thứ tự của các phần tử trong mảng gốc.
//Nó thay đổi mảng gốc và không tạo ra mảng mới.
let arr11 = [1, 3, 5, 7, 9];
arr11.reverse();
console.log(arr11);

// Lưu ý: reverse làm thay đổi mảng gốc,
// Nếu muốn giữ nguyên bản gốc, hãy reverse trên bản sao
let arr12 = [1, 3, 5, 7, 9];
let arr13 = arr12.slice().reverse();
console.log(arr12);
console.log(arr13);

//11. join() :
/*
array.join(separator);
Nối các phần tử trong mảng thành chuỗi, theo ký tự phân tách 'separator'
separator : Nếu bỏ trống sẽ mặc định là dấu phẩy ,
Phương thức này không thay đổi mảng gốc.
*/

// Không truyền separator
let arr14 = ["nam", "trang", 1, 2, 3];
let string1 = arr14.join();
console.log(string1);
console.log(typeof string1);
