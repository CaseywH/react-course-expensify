const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ name: "Casey", age: 26 });
    reject("something went wrong");
  }, 5000);
});

console.log("before");

promise
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(`error: ${err}`);
  });

console.log("after");
