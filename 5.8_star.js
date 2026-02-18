/**
 * Question: 5.8_star (Pattern: Alternating 0-1 Triangle)
 * 
 * Explanation (Hinglish):
 * Stairs banani hai par numbers alternate honge (0 aur 1). 
 * Hum ek switch (toggle) rakhte hain. Har baar number chapne ke baad switch ko ulata kar dete hain. 
 * Agar 1 chapa hai to agla 0 hoga.
 * 
 * Logic:
 * 1. Loop `i` (lines).
 * 2. Loop `j` (inner): `isSwitch` chapo aur use toggle karo (`1 -> 0` ya `0 -> 1`).
 */

let n = 6;
for (let i = 0; i < n; i++) {
    let row = " ";
    let isSwich = 1;
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