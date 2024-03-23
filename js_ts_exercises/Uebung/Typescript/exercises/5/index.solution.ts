/*

Intro:
    Es ist Zeit die daten zu filtern. Um flexibel zu sein
    filtern, wie sie anhand diverser Kriterien und geben nur
    die Einträge zurück, welche alle Erfüllen.
    Wir brauchen noch keine Admins, nur Users


Übung:
    Ohne die typenstruktur zu kopieren, änder die
    filterUsers Funktionsdefinition so, dass wir
    die benötigten Kriterien mitgeben können und nicht
    nur die User Information welche sie im Moment nach
    Typendefinition benötigt.

Bonus Übung:
    Versuche das ganze so zu machen, damit der type theoretisch nicht benötigt würde (z.B.
    person.type === 'admin').

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
  {
    type: "admin",
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    type: "user",
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    type: "admin",
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
  {
    type: "user",
    name: "Wilson",
    age: 23,
    occupation: "Ball",
  },
  {
    type: "admin",
    name: "Agent Smith",
    age: 23,
    role: "Administrator",
  },
];

export const isAdmin = (person: Person): person is Admin =>
  person.type === "admin";
export const isUser = (person: Person): person is User =>
  person.type === "user";

export function logPerson(person: Person) {
  let additionalInformation = "";
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(
  persons: Person[],
  criteria: Partial<Omit<User, "type">>,
): User[] {
  return persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria) as (keyof Omit<User, "type">)[];
    return criteriaKeys.every((fieldName) => {
      return user[fieldName] === criteria[fieldName];
    });
  });
}

console.log("Users of age 23:");

filterUsers(persons, {
  age: 23,
}).forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types
