//36.11 :Truy cập Phần Tử cha, con, anh em
//Truy cập vào các phần tử cha, con, anh em
//Parent: cha 👨‍
//Child: con 👶
//Sibling: anh em ruột 🧑‍🤝‍🧑
//ví dụ:
let elm = document.querySelector(".hero__content");
//1. Truy cập vào phần tử cha (phần tử cha chỉ là duy nhất)
console.log(elm.parentElement);

// đổi màu nề
elm.parentElement.style.backgroundColor = "red";

//2. Truy cập vào phần tử con (phần tử con có thể có nhiều)
console.log(elm.children);
//HTMLCollection(3) [h1.hero__heading, p.hero__desc, div.hero__row]
console.log(elm.children[0]);
console.log(elm.children[1]);
console.log(elm.children[2]);

//36.12 : append, prepend :
//Phương thức dùng để thêm một hoặc nhiều phần tử con vào trong phần tử cha
//append: Thêm vào cuối
//prepend: Thêm vào đầu
// // Ví dụ 1:
// 💡 Bước 1. create element
//Cú pháp: document.createElement('element')  //element: tên thẻ cần tạo
const newImg = document.createElement("img");
console.log(newImg);

//kiểm tra toàn bộ thuộc tính và phương thức newImg
console.dir(newImg);

//💡Bước 2. set attribute
newImg.setAttribute("src", "./assets/img/most_slide_1.jpg");

// Cách 2
newImg.src = "./assets/img/most_slide_1.jpg";

//Bước 3. append: thêm vào 1 phần tử đã có sẵn
document.body.append(newImg); //thêm vào cuối phần tử cha(trong trường hợp này là body)
//set chiều rộng 100% viewport width
newImg.style.width = "100vw";

// ✌️ Ví dụ 2: Thêm thẻ p
const newText = document.createElement("p"); //bước 1: tạo element
//💡
newText.textContent = "Xin chào, em đang học JS"; // bước 2: set attribute
document.body.append(newText);

// ví dụ 3: thêm vào 1 phần tử khác
const p = document.querySelector(".hero__desc");
p.append("Sông cầu nước chảy lơ thơ, có đôi trai gái ngồi hờ quần đùi");

// Ví dụ 4: Thêm nhiều phần tử vào cuối phần tử cha
// Tạo các phần tử mới
let elm1 = document.createElement("p");
elm1.textContent = "Đây là đoạn văn mới thêm";

let elm2 = document.createElement("span");
elm2.textContent = "Đây là thẻ span";

// Lấy phần tử cha
let container = document.querySelector(".hero__heading");

// Thêm nhiều phần tử mới vào cuối phần tử cha
container.append(elm1, elm2, "Some more text");

// Prepend
// Nếu muốn thêm đầu phần tử cha thì dùng prepend
container.prepend("Hi ! ");
