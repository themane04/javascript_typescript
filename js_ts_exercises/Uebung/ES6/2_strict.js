//1. Entferne // vor "use strict"
//2. Begründe bei entstehenden Fehlern wieso diese fehlerhaft sind, als Code-Kommentar entweder auf der
//nächsten Zeile oder hintendran.
//3.test.js. Korrigiere die Fehler so, dass diese korrekt sind und die gleiche Funktion beibehalten, solange
//dies unter "strict" möglich ist.
//https://www.w3schools.com/js/js_strict.asp dient als Hilfe
"use strict";

let var_public = 1500; // 'public' ist für Klassen reserviert
person = { age: 10, name: "max" };

let x;
eval("x = 2");
console.log(x);

const obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });
console.log(obj.x);
obj.x = 3.14;

function add(p1) {
  // die gleiche Variable ist zweimal deklariert
  return p1 + p1;
}
