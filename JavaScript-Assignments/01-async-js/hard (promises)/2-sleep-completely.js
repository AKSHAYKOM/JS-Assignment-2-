/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(function(resolve, reject) {
        let start = Date.now();

        while(Date.now() - start < milliseconds) {
         
        }

        resolve("Done sleeping!"); 
    });
}

// Using Promise
console.log("Before sleep!");

sleep(3000)
    .then(function(result) {
        console.log(result);       
        console.log("After sleep!");
    })
    .catch(function(error) {
        console.log(error);
    });

module.exports = sleep;


// Using Async/Await
async function main() {
    console.log("Before sleep!");

    try {
        let result = await sleep(3000);
        console.log(result);         // "Done sleeping!"
        console.log("After sleep!");
    } catch(error) {
        console.log(error);
    }
}

main();
