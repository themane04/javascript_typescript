//schreibe eine funktion welche alle Zahlen zwischen parameter 1 und parameter 2 aufsummiert (inklusve parameter 1 und 2
//fals paramtere 2 kleiner als 1 ist gib 0 zurück   bsp. (1,4)-> 10,  (2,3)->5 , (4,3)->0.
//falls eine zahl keine ganzzahl ist, soll "null" zurück gegeben werden
export function addup(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "null";
  }
  if (end < start) {
    return 0;
  }
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
