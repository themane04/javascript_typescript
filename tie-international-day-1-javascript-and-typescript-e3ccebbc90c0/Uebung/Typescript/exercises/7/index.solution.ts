/*

Intro:
    Filtern wurde komplett aus dem Projekt entfernt.
    Es hat sich herausgestellt, dass dieses Feature
    gar nicht vom Endbenutzer verwendet wurde und wir
    viel zu viel Zeit verschwendet habe nur, weil unser
    Manager dies so wollte. Nächstes Mal sollten wir auf
    den Product Manager hören.

    Ohnehin haben wir einen Plan. Nick, ein Freund des CEOs,
    meinte, es könnte sehr lustig werden, wenn ab und zu
    ein "user name" zufällig vertauscht werde und das Produkt
    werde dadurch sicher ein Erfolg


Übung:
    Implementier swap() was 2 persons erhält und diese dann in umgekehrter Reihenfolge zurückgibt.
    Die Funktion ist bereits vorhanden. Wir müssen sie nur mit den
    korrekten Typen ergänzen. Zudem sollte diese nicht nur mit Personen,
    sondern mit allen Typen funktioniert.

*/

interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

function logUser(user: User) {
  const pos = users.indexOf(user) + 1;
  console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}

function logAdmin(admin: Admin) {
  const pos = admins.indexOf(admin) + 1;
  console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}

const admins: Admin[] = [
  {
    type: "admin",
    name: "Will Bruces",
    age: 30,
    role: "Overseer",
  },
  {
    type: "admin",
    name: "Steve",
    age: 40,
    role: "Steve",
  },
];

const users: User[] = [
  {
    type: "user",
    name: "Moses",
    age: 70,
    occupation: "Desert guide",
  },
  {
    type: "user",
    name: "Superman",
    age: 28,
    occupation: "Ordinary person",
  },
];

export function swap<T1, T2>(v1: T1, v2: T2): [T2, T1] {
  return [v2, v1];
}

function test1() {
  console.log("test1:");
  const [secondUser, firstAdmin] = swap(admins[0], users[1]);
  logUser(secondUser);
  logAdmin(firstAdmin);
}

function test2() {
  console.log("test2:");
  const [secondAdmin, firstUser] = swap(users[0], admins[1]);
  logAdmin(secondAdmin);
  logUser(firstUser);
}

function test3() {
  console.log("test3:");
  const [secondUser, firstUser] = swap(users[0], users[1]);
  logUser(secondUser);
  logUser(firstUser);
}

function test4() {
  console.log("test4:");
  const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
  logAdmin(firstAdmin);
  logAdmin(secondAdmin);
}

function test5() {
  console.log("test5:");
  const [stringValue, numericValue] = swap(123, "Hello World");
  console.log(` - String: ${stringValue}`);
  console.log(` - Numeric: ${numericValue}`);
}

[test1, test2, test3, test4, test5].forEach((test) => test());

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// https://www.typescriptlang.org/docs/handbook/2/generics.html
