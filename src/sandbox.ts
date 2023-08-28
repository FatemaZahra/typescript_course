let greet: Function;
greet = () => {
  console.log("hello, world!");
};

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};
add(5, 10, "20");
// A function return void when we don't return anything in the function

const subtract = (a: number, b: number) => {
  return a + b;
};

let result = subtract(10, 7);
