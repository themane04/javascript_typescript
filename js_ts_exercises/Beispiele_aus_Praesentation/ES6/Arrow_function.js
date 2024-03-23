// ES5
var mul1 = function (x, y) {
  return x * y;
};
// ES6
const mul2 = (x, y) => x * y;

let normal_greet = function (platform) {
  console.log("Welcome to ", platform);
};
//normal_greet("React")
let greet = (g) => console.log(g);
greet("hi");

function add(variable) {
  return variable + 1;
}

let a = (variable) => variable + 1;

console.log(a(5));
