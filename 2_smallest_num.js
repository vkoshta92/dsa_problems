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
 */

function findSmallest(arr) {
    let smallest = Infinity || arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
let arr = [1, -1, 35, 3, 56, 4, -89, 124];

let answer = findSmallest(arr);
console.log(`Largest Number is ${answer}`);