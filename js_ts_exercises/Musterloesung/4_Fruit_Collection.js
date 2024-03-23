//
const examplefruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
//Schreibe eine Klasse namens FruitStorage, welche folgende Funktionen unterstützt
//Speichern eines Lagerbestandes mit verschiedenen Früchten.
//Die Klasse soll entweder mit einem lehren Lagerbestand starten oder bereits beim Erstellen eine Map als Parameter erhalten
//1. Neue Frucht hinzufügen mit addFruit(mit Wert 0). Wenn frucht schon existiert oder kein Platz mehr vorhanden ist, da
// zu viele Räume vorhanden sind, nichts machen.
//2. Löschen einer Frucht
//3.test.js. Reduzieren oder erhöhen des Lagerbestandes einer Frucht (buy und sell)
//4. Eine Liste aller verfügbaren Früchte
//5. Eine Aufsummierung aller existierenden Lagerbestände (fruitlist)
//6. Eine Iterierbare Rückgabe aller früchte mit ihrem Bestand, sortiert nach Bestand (stock)
//7. Das Lager kann nun maximal 1000 Exemplare(storagecapacity) jeder Frucht lagern und maximal 5 verschiedene Früchte(storagerooms),
// Überprüfe dies beim Hinzufügen neuer Früchte, wenn man mehr hinzufügt soll eine Nachricht mit console.log
//ausgegeben werden, dass das Lager voll ist und wie viele Früchte nicht hinzugefügt worden konnten.
//Benutze dazu eine setStoragecapacity funktion, um dies anzupassen. Wenn die neue Kapazität kleiner ist, muss überprüft werden, ob dies
//machbar ist, sonst soll eine Nachricht ausgegeben werden welche Frücthe zu viel sind oder wie viele Früchte ganz verkauft werden müssten.
// myFruitcollection.getAllFruits().forEach(value=>console.log(value)

export class FruitStorage {
  constructor(initialCollection = new Map()) {
    this.storage = initialCollection;
    this.storagecapacity = 1000;
    this.storagerooms = 5;
  }
  setCapacity(capacity = this.storagecapacity, rooms = this.storagerooms) {
    if (this.storagecapacity <= capacity) {
      this.storagecapacity = capacity;
    } else {
      for (let fruit of myfruitstorage.stock()) {
        console.log(fruit);
        if (fruit > capacity) {
        }
      }
    }
    if (this.storagerooms <= rooms) {
      this.storagerooms = rooms;
    } else {
      if (this.storage.size > rooms) {
        console.log("overfull storage, cant reduce rools");
      } else {
        this.storagerooms = rooms;
      }
    }
  }
  newFruit(fruitname) {
    if (this.storage.has(fruitname)) {
      console.log("This fruit is already added");
    } else {
      if (this.storage.size < this.storagerooms) {
        this.storage.set(fruitname, 0);
      } else {
        console.log(
          "not enough rooms to add",
          fruitname,
          "add more rooms first",
        );
      }
    }
  }
  removeFruit(fruitname) {
    if (this.storage.has(fruitname)) {
      this.storage.delete(fruitname);
    }
  }
  buy(fruitname, amount) {
    if (this.storage.has(fruitname)) {
      if (this.storage.get(fruitname) + amount <= this.storagecapacity) {
        this.storage.set(fruitname, this.storage.get(fruitname) + amount);
      } else {
        console.log(
          this.storagecapacity - this.storage.get(fruitname),
          fruitname,
          " has been added",
          this.storage.get(fruitname) + amount - this.storagecapacity,
          "was too much",
        );
        this.storage.set(fruitname, this.storagecapacity);
      }
    } else {
      console.log("This fruit is not registered");
    }
  }
  sell(fruitname, amount) {
    if (this.storage.has(fruitname)) {
      if (this.storage.get(fruitname) - amount >= 0) {
        this.storage.set(fruitname, this.storage.get(fruitname) - amount);
      } else {
        console.log(
          "You only have ",
          this.storage.get(fruitname),
          " of this fruit,",
          amount - this.storage.get(fruitname),
          "are missing",
        );
      }
    } else {
      console.log("This fruit is not registered");
    }
  }
  fruitlist() {
    return this.storage.keys();
  }
  stock() {
    return new Map([...this.storage.entries()].sort((a, b) => b[1] - a[1]));
  }
}
let myfruitstorage = new FruitStorage(
  new Map([
    ["apple", 200],
    ["banana", 500],
    ["orange", 800],
    ["mango", 300],
    ["watermelon", 300],
  ]),
);

myfruitstorage.buy("orange", 400);
myfruitstorage.newFruit("pineapple");
myfruitstorage.setCapacity(600, 6);
myfruitstorage.sell("apple", 300);

console.log(myfruitstorage.fruitlist());
//for (let fruit of myfruitstorage.fruitlist()){
//    console.log(fruit)
//}
console.log(myfruitstorage.stock());
