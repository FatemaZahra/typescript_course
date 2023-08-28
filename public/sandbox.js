"use strict";
let greet;
greet = () => {
    console.log("hello, world!");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, "20");
// A function return void when we don't return anything in the function
const subtract = (a, b) => {
    return a + b;
};
let result = subtract(10, 7);
