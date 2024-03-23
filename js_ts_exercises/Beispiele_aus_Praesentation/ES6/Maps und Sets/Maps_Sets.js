const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits.get("apples"));
fruits.set("apples", 800);
console.log(fruits.get("apples"));
// Create a Set
const letters = new Set();
// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log("----------iterating over a set----------");
console.log(letters);
for (let element of letters) {
  console.log(element);
}
