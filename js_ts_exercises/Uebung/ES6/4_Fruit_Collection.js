//
const examplefruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
//Schreibe eine Klasse namens FruitStorage, welche folgende Funktionen unterstützt
//Speichern eines Lagerbestandes mit verschiedenen Früchten.
//Die Klasse soll entweder mit einem lehren Lagerbestand starten oder bereits beim Erstellen eine Map als Parameter erhalten
//
//1. Neue Frucht hinzufügen(mit Lagerbestand oder default Wert 0, wenn kein Wert gegeben wird). Wenn frucht schon existiert stattdessen
//Menge beim bereits existierenden eintrag dazu zählen.

//2. Löschen einer Frucht
//3.test.js. Reduzieren oder erhöhen des Lagerbestandes einer Frucht (buy und sell)
//4. Eine Liste aller verfügbaren Früchte
//5. Eine Aufsummierung aller existierenden Lagerbestände (fruitlist)
//6. Eine Iterierbare Rückgabe aller früchte mit ihrem Bestand, sortiert nach Bestand (stock)
//7. Das Lager kann nun maximal 1000 Exemplare jeder Frucht lagern und maximal 5 verschiedene Früchte,

// Überprüfe dies beim Hinzufügen neuer Früchte, wenn man mehr hinzufügt soll eine Nachricht mit console.log
// ausgegeben werden, dass das Lager voll ist und wie viele Früchte nicht hinzugefügt worden konnten.
// 8. BONUS: Schreibe eine setStoragecapacity funktion, welche einen rooms und einen capacity parameter entgegennehmen, um mehr Platz
// zu schaffen, überprüfe dabei, ob dies zu wenig Platz für entweder die Anzahl Früchte ist oder ob eine Frucht mit ihrem Bestand nicht in die neue
// capacity passt.
// myFruitcollection.getAllFruits().forEach(value=>console.log(value)

export class FruitStorage {
  constructor(initialFruits = new Map()) {
    this.fruits = initialFruits;
    this.storagecapacity = 1000;
    this.storagerooms = 5;
  }
  setStoragecapacity(rooms, capacity) {
    let additionalCapacity = rooms * capacity;
    this.storagecapacity += additionalCapacity;
  }

  newFruit(fruitName, quantity = 0) {
    if (this.fruits.has(fruitName)) {
      let currentQuantity = this.fruits.get(fruitName);
      if (currentQuantity + quantity <= this.storagecapacity) {
        this.fruits.set(fruitName, currentQuantity + quantity);
      } else {
        console.log("Exceeds storage capacity");
      }
    } else {
      if (this.fruits.size < this.storagerooms) {
        if (quantity <= this.storagecapacity) {
          this.fruits.set(fruitName, quantity);
        } else {
          console.log("Initial quantity exceeds storage capacity");
        }
      } else {
        console.log("There is no more room for new fruits.");
      }
    }
  }
  removeFruit(fruitName) {
    this.fruits.delete(fruitName);
  }
  buy(fruitName, quantity) {
    let currentQuantity = this.fruits.get(fruitName);
    if (
      currentQuantity !== undefined &&
      currentQuantity + quantity < this.storagecapacity
    ) {
      this.fruits.set(fruitName, currentQuantity + quantity);
    } else {
      console.log("Exceeds maximum capacity");
    }
  }
  sell(fruitName, quantity) {
    let currentQuantity = this.fruits.get(fruitName);
    if (currentQuantity !== undefined && currentQuantity - quantity >= 0) {
      this.fruits.set(fruitName, currentQuantity - quantity);
    } else {
      console.log("Exceeds minimum capacity");
    }
  }
  fruitlist() {
    let fruitList = [];
    for (let [fruit, quantity] of this.fruits.entries()) {
      fruitList.push(fruit);
    }
    return fruitList;
  }
  stock() {
    let stockList = Array.from(this.fruits.entries());
    stockList.sort((a, b) => b[1] - a[1]);
    console.log(stockList);
  }
}
let myfruitstorage = new FruitStorage(
  new Map([
    ["apple", 200],
    ["banana", 500],
    ["orange", 800],
    ["mango", 300],
  ]),
);

myfruitstorage.stock();
