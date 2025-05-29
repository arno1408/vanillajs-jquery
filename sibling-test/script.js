const itemList = document.querySelector(".items");

// console.log(itemList.parentElement);
// console.log(itemList.parentNode);

const ul = document.querySelector(".itemlist ul");

// console.log(ul.children);

const sibling = document.querySelector("main .itemlist");

console.log(sibling.nextSibling);
console.log(sibling.nextElementSibling);

console.log(sibling.previousSibling);
console.log(sibling.previousElementSibling);

const div1 = document.createElement("h1");

div1.innerText = "HELLO";

// sibling.previousElementSibling.append(div1);
// sibling.nextElementSibling.append(div1);

const addSec = document.querySelector(".add");

addSec.parentElement.append(div1);

const box = document.querySelector(".dummy-box");

console.log(box.getAttribute("class"));

const header = document.querySelector("header");
const h1 = document.querySelector("header h1");

header.insertBefore(div1, h1);
