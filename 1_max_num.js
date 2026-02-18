/**
 * Question: 1_max_num (Array: Find Largest Number)
 * 
 * Explanation (Hinglish):
 * Humein ek array mein se sabse bada number dhundna hai. 
 * Hum maan lete hain ki pehla number hi sabse bada hai (ya phir ek bahut chota number `-Infinity` le lete hain). 
 * Phir baaki saare numbers se uski race karwate hain. Jo bada nikla, wo winner!
 * 
 * Logic:
 * 1. Ek variable `largestValue` banao jisme shuru mein `-Infinity` rakho.
 * 2. Array pe loop chalao.
 * 3. Agar current number `largestValue` se bada hai, to `largestValue` ko update kardo.
 * 4. Loop khatam hone par winner return kardo.
 */

function findLargest(arr) {
    let largestValue = -Infinity || arr[0];
    // sbse chota number lenge tki compare kar ske.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestValue) {
            largestValue = arr[i];
        }
    }
    return largestValue;
}
let arr = [1, -1, 35, 3, 56, 4, -89, 124];

let answer = findLargest(arr);
console.log(`Largest Number is ${answer}`);