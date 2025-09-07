// 14. hàm isNan
// 8.hàm Number(value) --> Chuyển value sang số
//--> Nếu không chuyển được trả về NaN
let str = "123a";
console.log(typeof str);
let num = Number(str);
console.log(num);
console.log(typeof num);

// let so = Number(prompt("Mời nhập vào 1 số: "));
// console.log(so);

let a = "123a";
console.log(isNaN(a));

let b = Number(true);
console.log(b);
console.log(typeof b);
console.log(isNaN(b));
console.log(Number(null));

// Hàm Number.isNaN
console.log(Number.isNaN(NaN));
// <- true, NaN is NaN
console.log(Number.isNaN("pony" / "foo"));
// <- true, 'pony'/'foo' is NaN, NaN is NaN
let check = "pony" / "foo";
console.log(`giá trị của biến check: ${check}`);

console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN({})); // <- false, {} is not NaN
console.log(Number.isNaN("ponyfoo")); // <- false, 'ponyfoo' is not NaN
