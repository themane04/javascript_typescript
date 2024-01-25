/*

Intro:
    Da wir bereits etwas zusätzliche Informationen der Benutzer haben
    wäre es eine gute Idee diese schon auszugeben.

Exercise:

    Fix type errors in logPerson function.
    Behebe die Fehler in der logPerson Funktion

    Die logPerson sollte sowohl User als auch Admin akzeptieren
    und sollte anhand der eingabe die relevanten Informationen ausgeben:
    occupation for User und role für Admin

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

export function logPerson(person: Person) {
  let additionalInformation: string;
  if (admin.role) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing
