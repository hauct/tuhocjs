// /*
// Bài 24. Nhập vào 1 chuỗi từ bàn phím,
// đếm xem có bao nhiêu ký tự thường
// bao nhiêu in hoa
// bao nhiêu số
// bao nhiêu space
// */

// // Nhập chuỗi từ bàn phím
// let inputString = prompt("Nhập vào một chuỗi:");

// // Khởi tạo các biến đếm
// let lowerCaseCount = 0;
// let upperCaseCount = 0;
// let digitCount = 0;
// let spaceCount = 0;

// // Duyệt qua từng ký tự trong chuỗi
// for (let i = 0; i < inputString.length; i++) {
//   let char = inputString[i];

//   // Kiểm tra ký tự thường
//   if (char >= "a" && char <= "z") {
//     lowerCaseCount++;
//   }
//   // Kiểm tra ký tự in hoa
//   else if (char >= "A" && char <= "Z") {
//     upperCaseCount++;
//   }
//   // Kiểm tra ký tự số
//   else if (char >= "0" && char <= "9") {
//     digitCount++;
//   }
//   // Kiểm tra khoảng trắng
//   else if (char === " ") {
//     spaceCount++;
//   }
// }

// // Hiển thị kết quả
// console.log("Số ký tự thường: " + lowerCaseCount);
// console.log("Số ký tự in hoa: " + upperCaseCount);
// console.log("Số ký tự số: " + digitCount);
// console.log("Số khoảng trắng: " + spaceCount);

// /*
// Bài tập js 25:
// a. Viết chương trình kiểm tra tính hợp lệ của mật khẩu:
// 1. mật khẩu hợp lệ khi có ít nhất 6 ký tự
// 2. chứa ít nhất 1 chữ cái viết hoa
// 3. chứa ít nhất 1 chữ cái viết thường
// 4. chứa ít nhất 1 chữ số
// b. Cho người dùng nhập vào mật khẩu để login / so sánh, nếu đúng mở
// cửa, sai quá 5 lần khóa đăng nhập, thoát chương trình
// // Ví dụ mật khẩu hợp lệ: Abc123
// */

// let correctPassword = "Abc123"; // Mật khẩu đúng để đăng nhập
// let loginAttempts = 0;
// let maxAttempts = 5;

// let checkValidPassword = (inputString1) => {
//   // 1. Kiểm tra độ dài ít nhất 6 ký tự
//   if (inputString1.length < 6) {
//     return false;
//   }

//   // 2. Kiểm tra có ít nhất 1 chữ cái viết hoa
//   let hasUpperCase = false;
//   for (let i = 0; i < inputString1.length; i++) {
//     if (inputString1[i] >= "A" && inputString1[i] <= "Z") {
//       hasUpperCase = true;
//       break;
//     }
//   }
//   if (!hasUpperCase) return false;

//   // 3. Kiểm tra có ít nhất 1 chữ cái viết thường
//   let hasLowerCase = false;
//   for (let i = 0; i < inputString1.length; i++) {
//     if (inputString1[i] >= "a" && inputString1[i] <= "z") {
//       hasLowerCase = true;
//       break;
//     }
//   }
//   if (!hasLowerCase) return false;

//   // 4. Kiểm tra có ít nhất 1 chữ số
//   let hasNumber = false;
//   for (let i = 0; i < inputString1.length; i++) {
//     if (inputString1[i] >= "0" && inputString1[i] <= "9") {
//       hasNumber = true;
//       break;
//     }
//   }
//   if (!hasNumber) return false;

//   return true; // Mật khẩu hợp lệ
// };

// // Phần a: Kiểm tra tính hợp lệ
// let inputString1 = prompt("Nhập vào mật khẩu:");
// if (checkValidPassword(inputString1)) {
//   alert("Mật khẩu hợp lệ!");
// } else {
//   alert(
//     "Mật khẩu không hợp lệ! Cần ít nhất 6 ký tự, 1 chữ hoa, 1 chữ thường, 1 chữ số."
//   );
// }

// // Phần b: Hệ thống đăng nhập
// while (loginAttempts < maxAttempts) {
//   let loginPassword = prompt(
//     `Nhập mật khẩu để đăng nhập (còn ${maxAttempts - loginAttempts} lần thử):`
//   );

//   if (loginPassword === correctPassword) {
//     alert("🎉 Đăng nhập thành công! Cửa đã mở!");
//     break;
//   } else {
//     loginAttempts++;
//     if (loginAttempts >= maxAttempts) {
//       alert("🔒 Sai quá 5 lần! Hệ thống bị khóa. Thoát chương trình!");
//     } else {
//       alert(`❌ Sai mật khẩu! Còn ${maxAttempts - loginAttempts} lần thử.`);
//     }
//   }
// }

/*
Bài tập js 26:
Viết chương trình chuyển tin nhắn sang mật mã theo bảng:
const a="abcdefghijklmnopqrstuvwxyz"
const b="zxcvbnmasdfghjklqwertyuiop"
*/
function encryptMessage(message) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  const b = "zxcvbnmasdfghjklqwertyuiop";
  let result = "";

  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase; // chuyển đổi thành chữ thường

    // Kiểm tra ký tự nhập có trong bảng mã không?
    if (a.includes(char)) {
      // Thực hiện chuyển đổi
      // Kiểm tra vị trí index kỹ tự nhập vào trong a
      let index = a.indexOf(char);
      // Lấy giá trị index, đóng sang chuỗi b để lấy ký tự tương ứng trên b
      result += b[index];
    }
    // Nếu không có trong bảng mã, thì giữ nguyên ký tự và dồn vào biến result
    else {
      result += char; //result = result +char
    }
  }
}

/*
Bài tập js 27:
const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
Đếm từ tôi trong string a trên?
*/

/*
Bài tập js 28:
Viết chương trình tách số và chữ từ chuỗi nhập vào thành 2 chuỗi:
* ví dụ nhập vào : abc123 sẽ tách và in ra thành 2 chuỗi abc và 123
*/
