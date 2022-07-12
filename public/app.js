"use strict";
const anchor = document.querySelector("a");
// if (anchor) {
//   console.log(anchor.href);
// }
// or we can add '!' mark at the end of the querySelector
console.log(anchor.href);
//TYPE CASTING
//when you grab tag itself, TS knows what what tag it is and all of the properties and methods are available for us. But when you grab class name better specify the tag name, by adding 'as', like '... as HTMLFormElement', in order to help TS recognize the tag and get access to all the props and method of it.
const form = document.querySelector(".new-item-form");
// console.log(form.children);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
