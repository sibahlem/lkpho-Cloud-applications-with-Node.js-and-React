//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("promise resolve")
    },6000)
})

//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved, then print a message
myPromise.then((successMessage) => {
    console.log("From Callback" + successMessage)
})

//Console log after calling the promise
console.log("After calling promise")

/*The order in which the console logs are executed tell you that the statements after the promise call are executed
one after the other and the promise is simultaneouly getting resolved or rejected.*/