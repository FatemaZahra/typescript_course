let age: any = 25;
age = true;
console.log(age);
age = "twenty-five";
console.log(age);
age = { name: "luigi" };
console.log(age);

let mixed: any[] = [];
mixed.push("mario");
mixed.push(5);
mixed.push(false);
console.log(mixed);

let ninja: { name: any; age: any };
ninja = { name: "yoshi", age: 25 };
console.log(ninja);
