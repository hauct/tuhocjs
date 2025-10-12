const clockElement = document.getElementById("clock"); // Lấy phần tử hiển thị

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0"); // Thêm số 0 khi <10
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clockElement.textContent = `${hours}:${minutes}:${seconds}`; // Cập nhật DOM
}

// Chạy lần đầu và lặp lại mỗi giây
updateTime();
setInterval(updateTime, 1000);
