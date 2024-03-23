const users = {
  users: [
    {
      name: "johny",
      age: 32,
      songlist: [
        {
          name: "dawn",
          artists: ["max"],
        },
        {
          name: "dusk",
          artists: ["max", "molly"],
        },
      ],
    },
    {
      name: "max",
      age: 23,
      songlist: [],
    },
    {
      name: "molly",
      age: 29,
      songlsist: [],
    },
  ],
};
const myJSONString = JSON.stringify(users);
console.log(myJSONString);
//{"users":[{"name":"johny","age":32,"songlist":[{"name":"dawn","artists":["max"]},{"name":"dusk","artists":["max","molly"]}]},{"name":"max","age":23,"songlist":[]},{"name":"molly","age":29,"songlsist":[]}]}
