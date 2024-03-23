//Zählt alle Zahlen eines Arrays zusammen
var numbers1 = [45, 4, 9, 16, 25];

function myFunction(total, value) {
  return total + value;
}
var sum = numbers1.reduce(myFunction);
console.log(sum);
