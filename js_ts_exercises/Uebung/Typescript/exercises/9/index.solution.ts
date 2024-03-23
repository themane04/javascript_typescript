/*

Intro:
    PowerUsers waren eine schlechte Idee.
    Sobald sie ihre zusätzlichen Rechte hatten
    missbrauchten sie diese um andere Benutzer zu
    tyrannisieren wodurch wir viele grossartige Users
    verloren.
    Als Antwort investierten wir das restliche Geld
    in Marketing um mehr User zu bekommen.
    Wir müssen Anfangen Vorbereitung zu treffen um
    eine echte Datenbank zu betreiben.
    Im Moment machen wir dafür nur ein Mockup.

    Das Format der Server API ist folgendermassen:

    Bei Erfolg: { status: 'success', data: RESPONSE_DATA }
    Bei Fehler: { status: 'error', error: ERROR_MESSAGE }

    Der API Architekt hat angefangen types für diese API zu erstellen und
    schnell festgestellt, dass die benötigte Anzahl zu gross ist.

Übung:
    Entfern die UsersApiResponse un AdminsApiResponse Typen
    und ersetze sie stattdessen durch einen generischen ApiResponse
    type, um spezifische Api Antwort-formatierungen zu definieren für jede der
    Funktionen
    Remove UsersApiResponse and AdminsApiResponse types
    and use generic type ApiResponse in order to specify API
    response formats for each of the functions.

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

type Person = User | Admin;

const admins: Admin[] = [
  { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
  { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
];

const users: User[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
];

export type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export function requestAdmins(
  callback: (response: ApiResponse<Admin[]>) => void,
) {
  callback({
    status: "success",
    data: admins,
  });
}

export function requestUsers(
  callback: (response: ApiResponse<User[]>) => void,
) {
  callback({
    status: "success",
    data: users,
  });
}

export function requestCurrentServerTime(
  callback: (response: ApiResponse<number>) => void,
) {
  callback({
    status: "success",
    data: Date.now(),
  });
}

export function requestCoffeeMachineQueueLength(
  callback: (response: ApiResponse<number>) => void,
) {
  callback({
    status: "error",
    error: "Numeric value has exceeded Number.MAX_SAFE_INTEGER.",
  });
}

function logPerson(person: Person) {
  console.log(
    ` - ${person.name}, ${person.age}, ${person.type === "admin" ? person.role : person.occupation}`,
  );
}

function startTheApp(callback: (error: Error | null) => void) {
  requestAdmins((adminsResponse) => {
    console.log("Admins:");
    if (adminsResponse.status === "success") {
      adminsResponse.data.forEach(logPerson);
    } else {
      return callback(new Error(adminsResponse.error));
    }

    console.log();

    requestUsers((usersResponse) => {
      console.log("Users:");
      if (usersResponse.status === "success") {
        usersResponse.data.forEach(logPerson);
      } else {
        return callback(new Error(usersResponse.error));
      }

      console.log();

      requestCurrentServerTime((serverTimeResponse) => {
        console.log("Server time:");
        if (serverTimeResponse.status === "success") {
          console.log(
            `   ${new Date(serverTimeResponse.data).toLocaleString()}`,
          );
        } else {
          return callback(new Error(serverTimeResponse.error));
        }

        console.log();

        requestCoffeeMachineQueueLength((coffeeMachineQueueLengthResponse) => {
          console.log("Coffee machine queue length:");
          if (coffeeMachineQueueLengthResponse.status === "success") {
            console.log(`   ${coffeeMachineQueueLengthResponse.data}`);
          } else {
            return callback(new Error(coffeeMachineQueueLengthResponse.error));
          }

          callback(null);
        });
      });
    });
  });
}

startTheApp((e: Error | null) => {
  console.log();
  if (e) {
    console.log(
      `Error: "${e.message}", but it's fine, sometimes errors are inevitable.`,
    );
  } else {
    console.log("Success!");
  }
});

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/generics.html
