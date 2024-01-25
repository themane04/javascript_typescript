/*

Welcome to:

    ................................................................
    .                                                              .
    .     ####################    ####################      E      .
    .     ####################    ####################      X      .
    .             ####            ####                      E      .
    .             ####            ####                      R      .
    .             ####            ####################      C      .
    .             ####                            ####      I      .
    .             ####                            ####      S      .
    .             ####            ####################      E      .
    .             ####            ####################      S      .
    .                                                              .
    ................................................................

Intro:
    Wir starten eine kleine Community von Benutzern.
    Aus Performance-Gründen haben wir entschieden die Benutzer im Code
    zu speichern. Dadurch können wir unseren Entwicklern
    mehr Interaktionsmöglichkeiten mit Benutzern zur Verfügung stellen.
    Zumindest mit Benutzerdaten.
    Alle GDPR Probleme werden später gelöst.
    Dies ist die Basis für zukünftige Übungen


Übung:
    Bestimme das interface "User" anhand der vorhandenen Daten
*/

export interface User {
  name: string;
  age: number;
  occupation: string;
}

export const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);

/* In case if you are stuck:

// https://www.typescriptlang.org/docs/handbook/2/objects.html
*/
