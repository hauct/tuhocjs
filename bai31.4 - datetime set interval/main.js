// /31.4 setInterval in js
// /B. setInterval
// /1. Cú pháp:
// /setInterval(function, milliseconds,param1, param2,.. )

// // /Ví dụ 1 : với function declaration
// function showNotification() {
//   console.log("Bạn có xxx tin nhắn chưa đọc");
// }
// setInterval(showNotification, 2000);

// // 2. function expression
// let counter = 0;

// let count = function () {
//   console.log(counter++);
// };
// setInterval(count, 1000);

// // 3. arrow function
// let counter = 0;
// let count = () => {
//   console.log(counter++);
// };
// setInterval(count, 1000);

// 4. Hủy lặp
let counter = 0;

let count = () => {
  console.log(counter++);
  if (counter === 5) {
    // Dừng vòng lặp
    clearInterval(stopInterval);
  }
};

let stopInterval = setInterval(count, 1000);
