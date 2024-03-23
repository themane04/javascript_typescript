interface params {
  x: number;
  y: number;
}
interface Useratributes {
  name: string;
  id: number;
  isActive: boolean;
  favouriteNumbers?: number[];
  children: Childattributes[];
  favouriteFunction: (any: any) => any;
}

interface Childattributes extends Useratributes {
  favouriteFood: String;
}
function add_0(x: number, y: number) {
  return x + y;
}
function add_1(input: params): number {
  return input.x + input.y;
  //return "someString"
}
function multiply(input: params): number {
  return input.x * input.y;
}
let addresult = add_1({ x: 1, y: 2 });
console.log(addresult);
let mulresult = multiply({ x: 3, y: 4 });
console.log(mulresult);
