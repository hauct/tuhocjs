/* Bài tập js 32:
Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên có n phần tử
, n do người dùng nhập từ bàn phím
*/
// Nhập số lượng phần tử (tối đa 5)
let n;
do {
  n = parseInt(prompt("Bài 32. Nhập số lượng phần tử (n <= 5):"));
} while (isNaN(n) || n <= 0 || n > 5);

// Nhập các phần tử vào mảng
let arr = [];
for (let i = 0; i < n; i++) {
  let num;
  do {
    num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
  } while (isNaN(num));
  arr.push(num);
}

// Hiển thị kết quả
console.log("Mảng vừa nhập:", arr);
alert("Mảng vừa nhập: [" + arr.join(", ") + "]");

/*

Dưới đây là đoạn text được trích xuất từ hình ảnh bạn cung cấp:

Bài tập js 33:
✓ 1. Viết chương trình tạo mảng 1 chiều gồm các phần tử là số nguyên, có n phần tử ngẫu nhiên, n do người dùng nhập từ bàn phím

✓ 2. Xuất các giá trị trong mảng

✓ 3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược

✓ 4. Sắp xếp mảng tăng dần

✓ 5. Tính tổng các phần tử trong mảng

✓ 6. Cho người dùng nhập 1 số bất kỳ, kiểm tra số đó có tồn tại trong mảng hay không, nếu có xuất ra vị trí index của số đó trong mảng
*/

// Nhập vào i là số lượng phần tử của mảng
let i;
do {
  i = parseInt(prompt(" Bài 33. Nhập số lượng phần tử (n <= 5):"));
} while (isNaN(i) || i <= 0 || i > 5);

// Tạo mảng với các phần tử ngẫu nhiên (từ 1 đến 100)
let arr1 = [];
for (let i = 0; i < n; i++) {
  arr1.push(Math.floor(Math.random() * 100) + 1);
}

// 2. Xuất mảng ban đầu
console.log("Mảng ban đầu:", arr1);
alert("Mảng ban đầu: [" + arr1.join(", ") + "]");

// 3. Đảo ngược mảng
let arrReverse = [...arr1].reverse();
console.log("Mảng đảo ngược:", arrReverse);
alert("Mảng đảo ngược: [" + arrReverse.join(", ") + "]");

// 4. Sắp xếp mảng tăng dần
let arrSort = [...arr].sort((a, b) => a - b);
console.log("Mảng sắp xếp tăng dần:", arrSort);
alert("Mảng sắp xếp tăng dần: [" + arrSort.join(", ") + "]");

// 5. Tính tổng các phần tử
let sum = arr.reduce((total, num) => total + num, 0);
console.log("Tổng các phần tử:", sum);
alert("Tổng các phần tử: " + sum);

// 6. Kiểm tra số có tồn tại trong mảng
let search;
do {
  search = parseInt(prompt("Nhập số cần tìm:"));
} while (isNaN(search));

let index = arr.indexOf(search);
if (index !== -1) {
  console.log(`Số ${search} tồn tại tại vị trí index: ${index}`);
  alert(`Số ${search} tồn tại tại vị trí index: ${index}`);
} else {
  console.log(`Số ${search} không tồn tại trong mảng`);
  alert(`Số ${search} không tồn tại trong mảng`);
}
