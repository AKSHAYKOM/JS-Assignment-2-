/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("wait1 done!");
        }, t);
    });
}

function wait2(t) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("wait2 done!");
        }, t);
    });
}

function wait3(t) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("wait3 done!");
        }, t);
    });
}

module.exports = calculateTime;




//with async/await

async function calculateTime(t1, t2, t3) {
    let start = Date.now();

    try {
        let results = await Promise.all([
            wait1(t1),
            wait2(t2),
            wait3(t3)
        ]);
        let end = Date.now();
        return end - start;
    } catch(error) {
        console.log(error);
    }
}

// Using it
async function main() {
    let time = await calculateTime(1000, 2000, 3000);
    console.log("Total time:", time, "ms"); // ~3000ms
}
main();