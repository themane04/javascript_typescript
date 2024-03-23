/*

Intro:
    Die Filteranforderungen sind gewachsen.
    Wir müssen nun in der Lage sein alle Arten von
    Personen zu filtern.


übung:
    Korrigier die typings for die filterPersons Funktion, sodass diese
    user filtert uns User[] zurückgibt wenn personType="user" und Admin[]
    wenn personType="admin".
    Zudem soll filterPersons eine User/Admin Mischung akzeptieren
    und anhand des personTypes die korrekte Aktion durchführen.
    Das criteria argument sollte sich anhand des personTypes
    korrekt verhalten. "type" Feld ist nicht erlaubt im "criteria" Feld.

Bonus Übung:
    Erstelle eine "getObjectKeys()" Funktion, welche
    praktischere resultate zurückgibt, für irgendein gegebenes Argument
    ohne casting benutzen zu müssen.


    let criteriaKeys = Object.keys(criteria) as (keyof User)[];
    -->
    let criteriaKeys = getObjectKeys(criteria);

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

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
  { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
  { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
  { type: "user", name: "Wilson", age: 23, occupation: "Ball" },
  { type: "admin", name: "Agent Smith", age: 23, role: "Anti-virus engineer" },
];

export function logPerson(person: Person) {
  console.log(
    ` - ${person.name}, ${person.age}, ${person.type === "admin" ? person.role : person.occupation}`,
  );
}

export function filterPersons(
  persons: Person[],
  personType: string,
  criteria: unknown,
): unknown[] {
  return persons
    .filter((person) => person.type === personType)
    .filter((person) => {
      let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
      return criteriaKeys.every((fieldName) => {
        return person[fieldName] === criteria[fieldName];
      });
    });
}

export const usersOfAge23 = filterPersons(persons, "user", { age: 23 });
export const adminsOfAge23 = filterPersons(persons, "admin", { age: 23 });

console.log("Users of age 23:");
usersOfAge23.forEach(logPerson);

console.log();

console.log("Admins of age 23:");
adminsOfAge23.forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
