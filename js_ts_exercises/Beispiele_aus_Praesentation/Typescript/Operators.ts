interface Ifavourites {
  color?: string;
  food?: string;
}

interface IUser {
  name: string;
  age?: number; //equal to age:number |undefined =undefined
  ahv: string | undefined;
  favourites?: Ifavourites | undefined;
}
function getDetail(props: IUser) {
  if (props.age !== undefined) {
    console.log("my age is ", props.age);
  }
  console.log("my name is ", props.name);
}
class User {
  name: string;
  age?: number;
  //ahv:string;
  favourites: Ifavourites | undefined;
  color: string | undefined;
  constructor(params: IUser) {
    this.name = "k";
    //this.ahv=params.ahv
    this.color = params.favourites!.color;
  }
  getahv() {
    //return this.ahv.substring(this.ahv.length-5)
  }
}
let exampleUser = new User({
  name: "john",
  age: 10,
  ahv: "756.2323.434.38",
  favourites: { food: "pommes" },
});
//console.log(exampleUser.favourites.color)
//console.log(exampleUser.favourites!.color)
