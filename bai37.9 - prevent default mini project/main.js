//37.8 PreventDefault - Form Events
// Lấy tham chiếu đến form, input và danh sách hiển thị người dùng
const form = document.querySelector("#login");
const userName = document.querySelector("#name");
const listUser = document.querySelector("#list");

// Lắng nghe sự kiện submit của form
form.addEventListener("submit", function (e) {
  // Ngăn hành vi mặc định của form (tránh reload trang)
  e.preventDefault();
  // Nếu muốn kiểm tra giá trị, có thể bỏ comment dòng dưới
  // console.log(userName.value);

  // Tạo phần tử <li> mới và gán text là giá trị từ input
  const li = document.createElement("li");
  li.innerText = userName.value;
  // Thêm <li> vào danh sách hiển thị
  listUser.appendChild(li);

  // Tùy chọn: xóa giá trị input sau khi thêm vào danh sách
  userName.value = "";
});

// Ngăn click vào thẻ a sẽ chuyển hướng trang
const link = document.querySelector("a");
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Bạn đã click vào thẻ a nhưng không chuyển hướng!");
});
