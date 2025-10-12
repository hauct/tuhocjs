// getElementsByTagName
console.log("getElementsByTagName");
let li_items = document.getElementsByTagName("li");
console.log(li_items);

// Kiểm tra xem có bao nhiêu phần tử
console.log(li_items.length);

li_items[1].innerHTML = "aaaa";

// getElementsByClassName
console.log("getElementsByClassName");
let li_items2 = document.getElementsByClassName("list");
console.log(li_items2);
console.log(li_items2.length);
li_items2[0].innerHTML = "bbbb";

// getElementById
console.log("getElementById");
let checkbox = document.getElementById("agree");
console.log(checkbox);
checkbox.checked = true;
