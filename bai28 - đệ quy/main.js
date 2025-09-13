// 28. Đệ quy trong js
// tính N! = N * (N - 1) * ... * 1
function giaiThua(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * giaiThua(n - 1);
  }
}

// Gọi hàm giai thừa
let ketQua = giaiThua(5);
console.log(ketQua);
