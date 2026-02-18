/**
 * Question: 3.1_third_largest_number (Array: Find Third Largest Number)
 * 
 * Explanation (Hinglish):
 * Ye toh bilkul runner-up wale khel jaisa hai, bas is baar hume 3rd position wale ko bhi track karna hai. 
 * Champion badla to 1st->2nd aur 2nd->3rd shift ho jayenge. 
 * Aise hi dhyan se check karte raho ki naya contestant kahan fit hota hai.
 * 
 * Logic:
 * 1. Teen variables lo: `first`, `second`, `third` (dono `-Infinity`).
 * 2. Loop elements:
 *    - Agar `current > first`: 3rd=2nd, 2nd=1st, 1st=current.
 *    - Agar `first > current > second`: 3rd=2nd, 2nd=current.
 *    - Agar `second > current > third`: 3rd=current.
 * 3. Last mein `third` return karo.
 */
function thirdLargestNumber(arr) {
    if (arr.length < 3) {
        return null;
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        }
        else if (arr[i] > thirdLargest && arr[i] !== firstLargest && arr[i] !== secondLargest) {
            thirdLargest = arr[i];
        }
    }

    // return thirdLargest === -Infinity ? null : thirdLargest;
    return thirdLargest;

}

let arr = [1, -1, 35, 45, 3, 56, 4, -89, 124, 467];
console.log(thirdLargestNumber(arr)); // 124
