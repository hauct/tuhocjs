// Chọn tất cả các phần tử có class panel
const panels = document.querySelectorAll(".panel");

// Duyệt từng phần tử trong danh sách panels
panels.forEach((panel) => {
  // Lắng nghe sự kiện click
  panel.addEventListener("click", () => {
    // Xóa class active của panel khác (nếu có)
    removeActive();
    // Thêm class active cho panel được click
    panel.classList.add("active");
  });
});

// Hàm xóa class active
function removeActive() {
  const activePanel = document.querySelector(".panel.active");
  if (activePanel) {
    activePanel.classList.remove("active");
  }
}
