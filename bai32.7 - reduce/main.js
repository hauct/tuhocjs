/*
//dựa trên một hàm xử lý -> tính toán và trả về một giá trị duy nhất sau
Syntax : reduce(function, [initialValue])
1. function: Một hàm để thực thi cho từng phần tử trong mảng
2. initialValue : Giá trị khởi tạo
*/

// // Bài toán khi không dùng reduce()
// let M1 = [1, 2, 3];
// // Thực hiện tính tổng các phần tử trong mảng
// //1.Giá trị khởi tạo ban đầu
// let sum = 0;
// for (let element of M1) {
//   sum += element;
// }

/*
//dựa trên một hàm xử lý -> tính toán và trả về một giá trị duy nhất sau
Syntax : reduce(function, [initialValue])
1. function: Một hàm để thực thi cho từng phần tử trong mảng
2. initialValue : Giá trị khởi tạo
*/

// Khi dùng reduce()
/*
accumulator: Giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm.
currentValue: Giá trị hiện tại đang xử lý trong mảng.
currentIndex: (Tùy chọn) Chỉ số của phần tử đang xử lý.
array: (Tùy chọn) Mảng đang được reduce.
*/
let sum2 = M1.reduce(
  // Tham số thứ 1: function
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  // Tham số thứ 2: initialValue
  0
);
console.log(sum2);
