export function multiply(a, b) {
  return a * b;
}
export function add(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

function power(a, b) {
  return a ** b;
}
