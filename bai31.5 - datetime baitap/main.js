// // /*
// // Bài 29. Viết chương trình nhập vào năm sinh và in ra số tuổi,
// // Kiểm tra điều kiện dữ liệu năm sinh nhập vào phải là số nguyên, phải lớn hơn 0
// // */
// function calculateAge(inputYear) {
//   // Ép kiểu dữ liệu truyền vào sang kiểu Number
//   let yearOfBirth = Number(inputYear);
//   console.log(yearOfBirth);

//   // Kiểm tra xem năm sinh có phải là số nguyên, và lớn hơn 0 ?
//   console.log(!Number.isInteger(yearOfBirth));
//   console.log(yearOfBirth <= 0);
//   if (!Number.isInteger(yearOfBirth) || yearOfBirth <= 0) {
//     alert("Năm sinh không hợp lệ. Năm sinh là số nguyên lớn hơn 0");
//     return;
//   }

//   // Lấy năm hiện tại
//   let currentYear = new Date().getFullYear();

//   // Tính tuổi
//   let age = currentYear - yearOfBirth;
//   alert(`Tuổi của bạn là ${age} tuổi`);
// }

// // Nhập năm sinh từ người dùng
// let inputYear = prompt("Nhập năm sinh của bạn :");

// // Gọi hàm tính tuổi
// calculateAge(inputYear);

// /*
// Bài tập js 30:
// Viết chương trình đếm ngược thời gian theo từng giây (countdown)
// Ví dụ thời gian làm bài là 45 phút nếu chạy về 0 thì thông báo hết thời gian
// */

// let timeValue = prompt(`Mời nhập thời gian làm bài (phút):`);
// timeValue = parseInt(timeValue) * 60; // Chuyển phút thành giây

// let intervalCounterMinus;

// function counterMinus() {
//   console.log(
//     `Thời gian còn lại: ${Math.floor(timeValue / 60)} phút ${
//       timeValue % 60
//     } giây`
//   );
//   timeValue--;

//   if (timeValue < 0) {
//     console.log("🚨 HẾT THỜI GIAN LÀM BÀI! 🚨");
//     alert("HẾT THỜI GIAN!");
//     clearInterval(intervalCounterMinus);
//   }
// }

// intervalCounterMinus = setInterval(counterMinus, 1000);

/*
Viết chương trình có tên timeSince, thông báo người dùng offline x phút ...
ví dụ: bạn đang chat với bạn A, sau đó bạn A offline
-> Yêu cầu: update hiển thị thời gian A offline 'x giây trước', 'x phút trước', 'x ngày trước', 'x tháng trước', 'x năm trước'
*/

function timeSince(timestamp) {
  const now = new Date();
  console.log("Xem timestamp hiện tại: " + now.getTime());
  const timeDifference = now - timestamp;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `Online ${years} năm trước`;
  } else if (months > 0) {
    return `Online ${months} tháng trước`;
  } else if (days > 0) {
    return `Online ${days} ngày trước`;
  } else if (hours > 0) {
    return `Online ${hours} giờ trước`;
  } else if (minutes > 0) {
    return `Online ${minutes} phút trước`;
  } else {
    return `Online ${seconds} giây trước`;
  }
}
// Ví dụ sử dụng
let timeOffline = 1707206532854; // Thời điểm bạn A offline
console.log(timeSince(timeOffline));
