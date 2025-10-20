// Generate random HEX color code
function generateRandomColor() {
  const hexChars = "0123456789ABCDEF"; // Các ký tự hợp lệ cho màu HEX
  let color = "#"; // Bắt đầu với ký tự #

  // Tạo 6 ký tự ngẫu nhiên
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    color += hexChars[randomIndex];
  }

  return color;
}

// DOM Elements
const colorChangeButton = document.getElementById("colorBtnChange");

// Xử lý thay đổi màu nền
function changeBackgroundColor() {
  const newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;

  // Chuyển tiêu đề thành tên màu
  document.getElementById("colorCode").textContent = newColor;
}

// Gắn sự kiện click
colorChangeButton.addEventListener("click", changeBackgroundColor);
