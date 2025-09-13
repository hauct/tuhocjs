// 29.1 string js part 1: khái quát, index, length
// 1.các cách xuất chuỗi
console.log("xin chào, ABC, 123, !@#$");
console.log("xin chào, ABC, 123, !@#$");
console.log(`xin chào, ABC, 123, !@#$`);

// 2. khởi tạo chuỗi
let s1 = `Hồi đó tôi chê mồm e rộng
Không tin hai đứa chập mồm đo`;

console.log(s1);

let s2 = "Hồi đó tôi chê mồm e rộng\nKhông tin hai đứa chập mồm đo";
console.log(s2);
console.log(typeof s1);

// 3. index chuỗi: Index bắt đầu từ 0
let ten = "Linh";
console.log(ten[2]);

// 4. string length
let s3 = "abcdef";
// kiểm tra chiều dài chuỗi s3
console.log(s3.length);

// 4.2 ví dụ vận dụng:
// nhập vào 1 tin nhắn, giới hạn ký tự nhập tối đa 140,
// nếu quá báo số ký tự vượt quá
let message = prompt("Mời nhập vào chuỗi");

if (message.length <= 140) {
  alert(`bạn đã nhập ${message.length} ký tự`);
} else {
  alert(`bạn đã nhập quá ${message.length - 140} ký tự`);
}

// 5.1 slice cắt chuỗi
let s4 = "234987657";
// Cắt chuỗi dùng slice
let s5 = s4.slice(2, 9); //cắt từ index 2 đến 9-1 = 8
console.log(s5);

// endIndex: Nếu không nhập sẽ ngầm định là cắt đến cuối chuỗi
// có thể hiểu ngầm định, thì endIndex = s4.length
console.log(s4.length);

// ví dụ: chỉ cho phép tin nhắn dài tối đa 20 ký tự,
// nếu quá thì tự cắt xuất chuỗi sau xử lý
let s6 = prompt("Mời nhập vào chuỗi");
console.log(`Bạn đã nhập ${s6.length} ký tự`);

// So sánh slice() và substring()
/*
Đối số truyền vào:
substring(start, end): Nhận vào hai tham số là vị trí bắt đầu và kết thúc
slice(start, end): Cũng nhận vào hai tham số là vị trí bắt đầu và kết thúc
*/
let s10 = "0123456789";
console.log("Sử dụng substring");
console.log(s10.substring(1, 4)); //123
console.log(s10.substring(4, 1)); //123

// Khác nhau khi Xử lý với số âm:
/*
substring(start, end):
substring sẽ chuyển số âm thành 0 và
nếu end < start sau khi chuyển số âm thì nó sẽ đảo ngược chúng.
*/

let s11 = "0123456789";
console.log("Sử dụng substring với tham số âm");
console.log(s11.substring(-3, -1));
//s11.substring(-3, -1) -> s11.substring(0, 0) -> ""

// TH2: substring nếu end < start đảo ngược vị trí start và end)
console.log("Trường hợp substring có 1 tham số âm, end < start");
console.log(s11.substring(4, -5));
//s11.substring(4, -5) --> s11.substring(4, 0) --> s11.substring(0, 4)

console.log("Sử dụng slice với tham số âm");
console.log(s11.slice(-3, -1)); //cắt từ -3 đến -2
