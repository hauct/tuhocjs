const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// Lắng nghe sự kiện ở giai đoạn CAPTURING (tham số thứ 3 là true)
// Sự kiện lan truyền từ grandparent -> parent -> child

grandparent.addEventListener(
  "click",
  function (e) {
    // e.stopPropagation() ở đây KHÔNG có tác dụng ngăn chặn lan truyền xuống
    // vì nó được kích hoạt sau khi sự kiện đã đi qua grandparent (từ trên xuống)
    console.log("grandparent (Capturing) clicked");
  },
  true
);

parent.addEventListener(
  "click",
  function (e) {
    // LẮNG NGHE ở giai đoạn Capturing
    // Ngay lập tức dừng sự kiện lan truyền xuống child
    e.stopPropagation();
    console.log("parent (Capturing) clicked, propagation stopped!");
  },
  true
);

child.addEventListener(
  "click",
  function (e) {
    // Nếu sự kiện bị dừng ở parent, code này sẽ KHÔNG bao giờ chạy
    console.log("child (Capturing) clicked");
  },
  true
);

// (Bạn có thể giữ nguyên tham số mặc định (false) cho bubbling
// để ngăn chặn lan truyền lên nếu cần)
