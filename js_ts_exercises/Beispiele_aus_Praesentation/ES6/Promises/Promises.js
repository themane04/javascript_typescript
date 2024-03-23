function dosmth() {
  return new Promise(function (fulfill, reject) {
    setTimeout(function () {
      fulfill("test");
    }, 3000);
  });
}

let a = dosmth();
a.then(function (value) {
  console.log(value);
});
console.log("a: ");
console.log(a);

//Promise { <pending> }
async function asyncdo() {
  let b = dosmth();
  console.log(b);
  //Promise { <pending> }
  await b;
  console.log(b);
  //Promise { 'test' }
}

asyncdo();

/*
let newPromise=dosmthelse();
newPromise.then()f

 */
