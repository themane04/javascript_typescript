"use strict";

let publicity = 1500; //public ist ein reserviertes wort und kann deshalb nicht als variable verwendet werden
let person = { age: 10, name: "max" }; //nicht deklarierte variable, korrigiert mit let

let x;
eval("x = 2"); //eval kann keine werte im selben scope verändern
console.log(x);

const obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });
//obj.x = 3.test.js.14;          // Writeable:false bedeutet, dass diese Eigenschaft nicht verändert werden kan

function add(p1, p2) {
  //2 mal der selbe Parametername -> p1 und p2
  return p1 + p2;
}
