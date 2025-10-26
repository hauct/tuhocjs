const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");

// Khởi tạo giá trị ban đầu của các bước hoạt động
let currentActive = 1;

// Lắng nghe sự kiện cho nút next
next.addEventListener("click", () => {
  changeStep(1); // Tăng bước lên 1
});

// Lắng nghe sự kiện cho nút prev
prev.addEventListener("click", () => {
  changeStep(-1); // Giảm bước đi 1
});

function changeStep(step) {
  currentActive += step;

  // Giới hạn currentActive trong khoảng [1, steps.length]
  if (currentActive > steps.length) {
    currentActive = steps.length;
  }
  if (currentActive < 1) {
    currentActive = 1;
  }

  update(); // Cập nhật lại giao diện
}

function update() {
  // Duyệt qua các phần tử
  steps.forEach((step, idx) => {
    if (idx < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  // ✅ ĐÚNG - Bật tắt các nút "Prev" và "Next"
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === steps.length;

  // Cập nhật thanh progress
  updateProgressBar();
}

function updateProgressBar() {
  const activeSteps = document.querySelectorAll(".step.active");
  const progressPercent = ((activeSteps.length - 1) / (steps.length - 1)) * 100;
  progress.style.width = progressPercent + "%";
}

// Khởi tạo trạng thái ban đầu
update();
