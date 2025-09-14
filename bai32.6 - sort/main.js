// 14.2 so sánh với hàm so sánh Compare Function
/*
Hàm So sánh (Compare Function):
Nếu compareFunction(a, b) trả về một giá trị < 0, a sẽ được đặt trước b.
Nếu compareFunction(a, b) trả về 0, thứ tự giữa a và b không thay đổi.
Nếu compareFunction(a, b) trả về một giá trị > 0, b sẽ được đặt trước a.
*/

let M4 = [9, 3, 5, 4];
// Trước khi sắp xếp
console.log(M4);
// Sx tăng dần
let sortedM4 = M4.sort((a, b) => a - b);
console.log(sortedM4);

// SX giảm dần
let sortedM5 = M4.sort((a, b) => b - a);
console.log(sortedM5);
