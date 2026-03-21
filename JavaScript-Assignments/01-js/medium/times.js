/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let start = Date.now();   // Get the current timestamp in milliseconds

    let sum = 0;      // Calculate the sum from 1 to n
    for (let i = 1; i <= n; i++) {          // Loop from 1 to n and add each number to the sum
        sum += i;               
    }

    let end = Date.now();    // Get the current timestamp after the calculation is done

    return (end - start) / 1000;
}


console.log(calculateTime(100));          // Time taken to calculate sum from 1 to 100
