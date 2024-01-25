//a class is NOT an object, instead it is a template for a javascript object.
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.kilometer = 0;
  }
  drive(distance) {
    this.kilometer += distance;
  }
}

function Bus(name, year) {
  this.name = name;
  this.year = year;
  this.kilometer = 0;
  this.drive = function (distance) {
    this.kilometer += distance;
  };
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
console.log(myCar1.kilometer);
myCar1.drive(5);
console.log(myCar1.kilometer);
