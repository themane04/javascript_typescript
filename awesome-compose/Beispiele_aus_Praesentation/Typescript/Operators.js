function getDetail(props) {
  if (props.age !== undefined) {
    console.log("my age is ", props.age);
  }
  console.log("my name is ", props.name);
}
var User = /** @class */ (function () {
  function User(params) {
    this.name = "k";
    //this.ahv=params.ahv
    this.favourites = params.favourites;
  }
  User.prototype.getahv = function () {
    //return this.ahv.substring(this.ahv.length-5)
  };
  return User;
})();
var exampleUser = new User({
  name: "john",
  age: 10,
  ahv: "756.2323.434.38",
  favourites: { food: "pommes" },
});
//console.log(exampleUser.favourites.color)
//console.log(exampleUser.favourites!.color)
