// Asynchrone code simply refers to code which implies having to wait to complete something. A way to
// handle this type of code is by Promises.

// A promise in JavaScript is an object which represents the resolving or rejection of async code.
const myPromise = new Promise((resolve, reject) => {
  // Generates a random number between 1-9
  let random = Math.round(Math.random() * 10);
  // Waits 1 second...
  setTimeout(() => {
    // Depending on the number being greater/equal or lesser than 5, it'll resolve/reject the promise.
    if (random >= 5) {
      return resolve("Success");
    }
    reject("Fail");
  }, 1000);
});

myPromise
  // If it's resolved...
  .then((res) => console.log(res))
  // If it's rejected...
  .catch((err) => console.error(err));
