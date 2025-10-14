//https://raw.githubusercontent.com/GalaiIapTrinh/pokemon/main/img/1.png

// 36.15 - Dom - ví dụ vận dụng
//Chọn phần tử cha
const container = document.getElementById("container");

let baseUrl =
  "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

//  Tạo phần tử con mới

// Thêm phần tử con vào container
for (let i = 1; i <= 3; i++) {
  // Tạo một khối div để chứa phần tử img và số thứ tự
  const newDiv = document.createElement("div");
  // Thêm div vào cuối container
  // Và lấy node mới tạo ra gán vào parentDiv
  const parentDiv = container.appendChild(newDiv);

  // Tạo phần tử con img, thêm vào parentDiv
  const newImg = document.createElement("img");
  newImg.src = `${baseUrl}${i}.png`;
  parentDiv.appendChild(newImg);

  // Thêm thẻ span là số thứ tự
  const newSpan = document.createElement("span");
  newSpan.innerText = `#${i}`;
  parentDiv.appendChild(newSpan);
}
