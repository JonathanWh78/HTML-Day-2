'use strict';

console.info("I am an info");
console.log("I am an info");
console.warn("I am an info");
console.error("I am an info");

let make = "Audi";
let model = "A5";

console.log("My Favourite Car Is An: " + make + model);

console.log('%c' + 'My Favourite Car Is An: ' + make + model, 'color:orange; font-family:fantasy; font-style: Bold; background-color: black;padding: 10px";');

console.log('%c' + 'My Favourite Car Is An: ' + make + '%c' + ' ' + model, 'color:orange;', 'color:blue');