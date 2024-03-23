//Ergänze folgende Funktionen so, dass sie den passenden Wert zurückgeben,

export function digitize(number) {
  //Todo Schreibe eine funktion welche aus einem Number input einen Array
  //der Zahlen zurück gibt ex. input 1234, return [1,2,3,4]
  return String(number).split("").map(Number);
}

export function filterArray(array, filter) {
  //input ([1,4,5,"hello",[1,3,"four",[3,4],4],8],3)-> return [ 1, 4, 5, 'hello', [ 1, 'four', [ 4 ], 4 ], 8 ]
  //Filter aus einem ineinander verschachtelten Array gewünschten Elemente heraus
  //Evtl. muss rekursion benutz werden, um weiter verschachtelte Arrays zu filtern

  return array.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(filterArray(item, filter));
    } else if (item !== filter) {
      acc.push(item);
    }
    return acc;
  }, []);
}

export function getNonUniques(array) {
  //return alle Elemente, welche mehr als einmal vorkommen als dictionary [1,2,3,4,3,2,2] -> {"2":3,"3":2}
  //mit der Zahl als key und ihrer Anzahl als value

  let counts = {};
  array.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });

  for (let item in counts) {
    if (counts[item] === 1) {
      delete counts[item];
    }
  }

  return counts;
}
