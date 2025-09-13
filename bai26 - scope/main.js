// Global Scope
let a = 1;

// truy xuất thử đến biến a
console.log(a);

function viDu_1() {
  // Có thể truy xuất biến global ở trong hàm
  console.log(a);
}

// Gọi hàm
viDu_1();

// 2. Function Scope:
function viDu_2() {
  let b = 2;

  // 1. Biến b chỉ có thể truy xuất từ bên trong hàm
  console.log(b);

  // 2. Truy xuất được từ các cấp sâu hơn bên trong
  if (b % 2 === 0) {
    console.log(`${b} là số chẵn`);
  } else {
    console.log(`${b} là số lẻ`);
  }
}

viDu_2();

// 3. Block Scope: biến được khai báo trong {}
let n = 3;
let m = 10;
if (n === 3) {
  let m = 1;
  console.log(m);
  if (m % 2 === 0) {
    console.log(`${m} là số chẵn`);
  } else {
    console.log(`${m} là số lẻ`);
  }
}

console.log(m);
