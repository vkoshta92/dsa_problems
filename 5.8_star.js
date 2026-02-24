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
 * 
 * Complexity:
 * - Time Complexity: O(n^2) - nested loops.
 * - Space Complexity: O(n) - row string storage.
 */

function alternatingTriangle(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        let isSwitch = (i % 2 === 0) ? 1 : 0;
        for (let j = 0; j < i + 1; j++) {
            row += isSwitch;
            isSwitch = (isSwitch === 1) ? 0 : 1;
        }
        console.log(row);
    }
}

console.log("Alternating 0-1 Triangle Pattern (6 rows):");
alternatingTriangle(6);