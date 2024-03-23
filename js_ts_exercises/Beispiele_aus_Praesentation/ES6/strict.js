//"use strict";

//Dieser code muss mit dem strict.html ausgeführt werden, da node.js automatisch strict braucht

//x = 3.14;       // This will cause an error because x is not declared

myFunction();
function myFunction() {
  y = 3.14; // This will also cause an error because y is not declared
  console.log(y);
}
delete x;
console.log(x);
