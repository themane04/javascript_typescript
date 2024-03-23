let array = ["potato", "cucumber", "tomato", "apple"];
array.someproperty =
  "An array is also an object but this property wont be iterated over";
let string = "A string"; //Die for in funtkion gäbe die Indexe und die for of die einzelnen Buchstaben
for (let element in array) {
  //Iteritert über ein objekt (keys), in array sind das einfach die indexe, someproperty
  //nicht angegeben, die
  console.log(element);
  /*
    0
    1
    2
    3
     */
}
for (let element of array) {
  //iteriert über die werte
  console.log(element);
  /*
    someproperty      wird auch ausgegeben, da es eine property ist.
    Potato
    cucumber
    tomato
    apple
     */
}
