/**
 * Question: 5.1_star (Pattern: Square Star Pattern)
 * 
 * Explanation (Hinglish):
 * Humein ek square (chaukone) pattern banana hai sitaron (*) se. 
 * Jitni rows hain, utni hi har line mein sitare honge. 
 * Ek loop baahar wala lines (rows) ginta hai, aur andar wala loop har line mein sitare chapta (print) hai.
 * 
 * Logic:
 * 1. Loop `i` chalao jitni lines chaiye (jaise 4).
 * 2. Har line ke liye ek khali `row` string banao.
 * 3. Loop `j` chalao har line mein sitare jodne ke liye (jaise 4 baar).
 * 4. Line poori hone par `console.log(row)` karke chapa do.
 * 
 * Complexity:
 * - Time Complexity: O(n^2) - Nested loop chal raha hai.
 * - Space Complexity: O(n) - Har row ko string mein store kar rahe print karne ke liye.
 */

function squareStar(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += " * ";
        }
        console.log(row);
    }
}

console.log("Square Star Pattern (4x4):");
squareStar(4);
