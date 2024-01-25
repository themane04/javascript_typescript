//map macht mit jedem Element etwas und gibt etwas zurück, was den vorherigen Wert ersetzt
const numbers1 = [45, 4, 9, 16, 25];
console.log(numbers1);
//[ 45, 4, 9, 16, 25 ]
const numbers2 = numbers1.map(myFunction);
console.log(numbers2);
//[ 90, 8, 18, 32, 50 ]
function myFunction(value) {
  return value * 2;
}
