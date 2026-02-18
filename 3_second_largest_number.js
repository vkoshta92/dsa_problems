/**
 * Question: 3_second_largest_number (Array: Find Second Largest Number)
 * 
 * Explanation (Hinglish):
 * Humein champion ke baad aane wala runner-up (2nd position) dhundna hai. 
 * Jab bhi humein koi naya champion milta hai, hum purane champion ko runner-up bana dete hain. 
 * Agar koi naya contestant champion se chota hai par purane runner-up se bada hai, 
 * to use naya runner-up bana dete hain.
 * 
 * Logic:
 * 1. Do variables lo: `firstLargest` aur `secondLargest` (dono `-Infinity`).
 * 2. Loop characters:
 *    - Agar `current > first`: `second = first`, `first = current`.
 *    - Agar `current > second` aur `current != first`: `second = current`.
 * 3. Last mein `secondLargest` return karo.
 */
function secondLargestNumber(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    if (arr.length < 2) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        // array me aelment duplicate ke case me
        else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }
    // return secondLargest===-Infinity?null:secondLargest;
    return secondLargest;


}

let arr = [1, -1, 35, 3, 124, 4, -89, 124, 56];

let ans = secondLargestNumber(arr);
console.log(ans);