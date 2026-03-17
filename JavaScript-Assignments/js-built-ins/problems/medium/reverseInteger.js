/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

function reverseInteger(num) {
    let isNegative = num < 0;
    let str = Math.abs(num).toString();
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }

    if (isNegative) {
        return -parseInt(reversed);
    }

    return parseInt(reversed);
}

console.log(reverseInteger(123));   // Output: 321

module.exports = reverseInteger;
