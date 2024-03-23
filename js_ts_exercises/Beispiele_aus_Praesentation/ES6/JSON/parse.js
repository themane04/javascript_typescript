const JSONString =
  '{"name":"John", "age":30, "city":"New York","favourites":["Toast","Pommes"]}';
console.log(typeof JSONString);
//string
try {
  console.log(JSONString.favourites[0]);
} catch (error) {
  console.log(error);
  //TypeError: Cannot read properties of undefined (reading '0')
}
const JSONObj = JSON.parse(JSONString);

try {
  console.log(
    JSONObj.favourites[0], //Toast
  );
} catch (error) {
  console.log(error);
}
