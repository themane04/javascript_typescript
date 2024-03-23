export function digitize(num) {
  //Todo Schreibe eine funktion welche aus einem Number input einen Array
  //der Zahlen zurück gibt ex. input 1234, return [1,2,3,4]
  return Array.from(String(num), (num) => Number(num));
}

export function filterArray(array, filter) {
  //input ([1,4,5,"hello",[1,3,"four",4],8],4)-> return [1,5,"hello,[1,3,"four"]]
  //Filter aus einem ineinander verschachtelten Array gewünschten Elemente heraus
  for (let e in array) {
    if (Array.isArray(array[e])) {
      array[e] = filterArray(array[e], filter);
    } else if (array[e] === filter) {
      array.splice(e, 1);
      e -= 1; //since 1 element got removed, the right side slides one to the left
    }
  }
  return array;
}

export function getNonUniques(array) {
  //return alle Elemente, welche mehr als einmal vorkommen als dictionary [1,2,3,4,3,2,2] -> {"2":3,"3":2}
  //mit der Zahl als key und ihrer Anzahl als value
  let dic = {};
  for (let a of array) {
    if (a in dic) {
      dic[a] += 1;
    } else {
      dic[a] = 1;
    }
  }
  return Object.fromEntries(Object.entries(dic).filter(([k, v]) => v > 1));
}
console.log(getNonUniques([1, 4, 5, 3, 5, 6, 2, 1, 3, 4, 5]));
