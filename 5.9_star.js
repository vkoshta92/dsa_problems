/**
 * Question: 5.9_star (Pattern: Binary Triangle)
 * 
 * Explanation (Hinglish):
 * Ye 5.8 jaisa hi hai, bas switch (toggle) ka logic check karna hai. 
 * Har line ke liye 0/1 ka pattern Stairs ki tarah badhta rehta hai.
 * 
 * Logic:
 * 1. Loop `i` (lines).
 * 2. Loop `j` (inner): toggle number variable use karke 1 aur 0 chapo.
 */

let n = 6;
let isSwich = 1;

for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
        row = row + isSwich;
        // new row me toggle 1 se strt ho jega phir alternative hota rhega.
        if (isSwich === 1) {
            isSwich = 0;
        }
        else {
            isSwich = 1;
        }
    }
    console.log("row", row)
}