let n = prompt("Nhập vào số n (từ 1 đến 99):");
console.log(n);
// Có thể dùng n % 1 !== 0 để kiểm tra xem có phải số nguyên không
while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
  n = Number(
    prompt("Số bạn nhập không hợp lệ. Vui lòng nhập lại (từ 1 đến 99):")
  );
}
alert("Bạn đã nhập số n: " + n);
