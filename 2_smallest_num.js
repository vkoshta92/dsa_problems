/**
 * Question: 2_smallest_num (Array: Find Smallest Number)
 * 
 * Explanation (Hinglish):
 * Jaise bada number dhunda tha, waise hi sabse chota number dhundna hai. 
 * Is baar race mein wo jitega jo sabse chota hoga. 
 * Hum shuruat mein ek bahut bada number `Infinity` le lete hain taki koi bhi normal number usse chota hi nikle.
 * 
 * Logic:
 * 1. Ek variable `smallest` banao jisme shuru mein `Infinity` rakho.
 * 2. Array pe loop chalao.
 * 3. Agar current number `smallest` se chota hai, to use `smallest` bana do.
 * 4. Loop ke baad result return kardo.
 * 
 * Complexity:
 * - Time Complexity: O(n) - Hum poore array ko ek baar check karte hain.
 * - Space Complexity: O(1) - Humne koi extra array ya bada dabba use nahi kiya.
 */

function findSmallest(arr) {
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

// --- Test Case ---
let arr_2 = [1, -1, 35, 3, 56, 4, -89, 124];
console.log(`Array: [${arr_2}]`);
console.log(`Smallest Number: ${findSmallest(arr_2)}`); // Expected: -89