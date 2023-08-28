//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = "luigi";
age = 35;

//isLoggedIn = 34;
isLoggedIn = true;

//Arrays
let ninjas: string[] = []; //to be able to push
ninjas = ["10", "20"];
ninjas.push("shaun");

//Union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = 123;
uid = "123";

//Objects
let ninjaOne: object;
ninjaOne = { name: "fama", age: 25 };
ninjaOne = [];

let ninjaTwo: {};
