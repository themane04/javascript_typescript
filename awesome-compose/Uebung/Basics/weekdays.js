//schreibe eine funktion, welche bei einer nummer von 1-7 den entsprechendne Wochentag als string zurück gibt
//alles kleingeschrieben, bsp 1->montag , 2 -> dienstag, verwende dazu einen switch
//wenn die zahl kleiner, grösser oder keine ganzzahl ist, soll "none" zurück gegeben werden

//Wenn keine Zahl mitgegeben wird, soll undefined zurück gegeben werden

import { isInt8Array } from "util/types";

export function weekday(number) {
  if (typeof number != "number") {
    return undefined;
  }

  switch (number) {
    case 1:
      return "montag";
    case 2:
      return "dienstag";
    case 3:
      return "mittwoch";
    case 4:
      return "donnerstag";
    case 5:
      return "freitag";
    case 6:
      return "samstag";
    case 7:
      return "sonntag";
    default:
      return "none";
  }
}
