//36.5 - Dom -getAttribute and setAttribute
//8.getAttribute
const firstLink = document.querySelector("a");

if (firstLink) {
  const linkHref = firstLink.getAttribute("href");
  console.log(linkHref);
} else {
  console.log("Không tìm thấy thẻ a");
}

// setAttribute
firstLink.setAttribute("target", "_blank");

// Sử dụng querySelectorAll để chọn tất cả các thẻ a trong ul
const links = document.querySelectorAll("ul a");
// Lặp qua mỗi thẻ a và sử dụng setAttribute
// để thêm thuộc tính target="_blank"
links.forEach((singleLink) => {
  singleLink.setAttribute("target", "_blank");
});
