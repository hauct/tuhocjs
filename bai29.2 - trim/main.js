// 29.3 string js part 3 - trim - trimEnd - trimStart
// 5.3 string.trim();
/*
loại bỏ các khoảng trắng ở cả hai đầu chuỗi.
trả về một chuỗi mới sau khi thực hiện
*/
let s11 = "  He   llo world   ";
console.log(s11.length);
let s12 = s11.trim();
console.log(s12);
console.log(s12.length);

// 5.4 string.trimEnd();
// loại bỏ tất cả các khoảng trắng ở cuối chuỗi.
let s13 = "  He   llo world  ";
let s14 = s13.trimEnd();
console.log(s14);
