/*

Intro:
    Beide Benutzer möchten die Idee der Community. Wir sollten etwas
    Ordnung einbringen, wir sind hier schliesslich in der Schweiz.
    Lasst uns ein paar Admins hinzufügen

    Ursprünglich hatten, wird die Benutzer nur in der in-memory Datenbank.
    Nachdem wir Admins hinzugefügt haben müssen wir die Typen so anpassen,


Übung:
    Der "Person" Typ fehlt, bitte definiere diesen und verwende
    ihn in "persons array" und in der logPerson function um alle
    TS fehler zu beheben

*/

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(user: Person) {
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
