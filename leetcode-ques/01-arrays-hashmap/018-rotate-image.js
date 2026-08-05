/*
|--------------------------------------------------------------------------
| Problem: Rotate Image
| Difficulty: Medium
| Companies: Amazon, Google, Microsoft, Meta, Apple, Uber, Bloomberg
| LeetCode: #48
|--------------------------------------------------------------------------
|
| Problem Statement:
| You are given an n x n 2D matrix representing an image. Rotate the image
| by 90 degrees (clockwise) in-place. You must modify the matrix directly,
| do not allocate another 2D matrix for rotation.
|
| Example 1:
| Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
| Output: [[7,4,1],[8,5,2],[9,6,3]]
|
| Example 2:
| Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
| Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
|
| Example 3:
| Input: matrix = [[1]]
| Output: [[1]]
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, matrix ko 90 degree clockwise rotate karna hai without any extra
| matrix. Yeh two-step trick se ho jaata hai:
|
| Approach: Transpose + Reverse Rows
| -----------------------------------
|
| Step 1: Transpose the matrix
|   - Transpose ka matlab hai row ko column aur column ko row bana do.
|   - matrix[i][j] ko matrix[j][i] ke saath swap karo.
|   - Lekin sirf diagonal ke upar wale elements swap karo (j = i + 1 se start)
|     nahi toh double swap ho kar wapas original ho jayega.
|   - Transpose ke baad rows columns ban jaati hain aur vice-versa.
|
| Step 2: Reverse each row
|   - Har row ko reverse (left-to-right mirror) kar do.
|   - Isse 90 degree clockwise rotation complete ho jaati hai.
|
| Visual Explanation (3x3 matrix):
| --------------------------------
| Original:    Transpose:   Reverse each row (Final):
| [1,2,3]      [1,4,7]      [7,4,1]
| [4,5,6]  →   [2,5,8]  →   [8,5,2]
| [7,8,9]      [3,6,9]      [9,6,3]
|
| Observe karo: Transpose mein rows columns ban gaye, aur phir reverse karne
| se columns ki ordering ulti ho gayi — yahi 90° clockwise rotation hai.
|
| Kya 90° anti-clockwise bhi kar sakte hain?
| Haan! Transpose + reverse columns (ya phir reverse rows + transpose).
|
| In-place kaise?
| ---------------
| Transpose ke liye sirf upper triangle traverse karo (j = i+1 to n-1)
| aur swap karo. Neeche wale elements automatically swap ho jaayenge.
|
| Row reverse ke liye two-pointer approach use karo:
| left = 0, right = n-1, swap karte raho jab tak left < right.
|
| Dry Run: matrix = [[1,2,3],[4,5,6],[7,8,9]]
|
| Step 1 (Transpose):
| i=0, j=1: swap matrix[0][1]↔matrix[1][0] → 2↔4
| i=0, j=2: swap matrix[0][2]↔matrix[2][0] → 3↔7
| i=1, j=2: swap matrix[1][2]↔matrix[2][1] → 6↔8
| Matrix becomes: [[1,4,7],[2,5,8],[3,6,9]]
|
| Step 2 (Reverse each row):
| Row 0: reverse [1,4,7] → [7,4,1]
| Row 1: reverse [2,5,8] → [8,5,2]
| Row 2: reverse [3,6,9] → [9,6,3]
|
| Output: [[7,4,1],[8,5,2],[9,6,3]] ✓
|
|--------------------------------------------------------------------------
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place.
 */
function rotate(matrix) {
    const n = matrix.length;

    // Step 1: Transpose (swap across main diagonal)
    for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i += 1) {
        let left = 0;
        let right = n - 1;
        while (left < right) {
            const temp = matrix[i][left];
            matrix[i][left] = matrix[i][right];
            matrix[i][right] = temp;
            left += 1;
            right -= 1;
        }
    }
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n²)
| - Transpose: O(n²) — upper triangle traversal.
| - Reverse rows: O(n²) — each row of length n, n rows.
| - Overall: O(n²)
|
| Space Complexity: O(1)
| - In-place modification, sirf kuch temp variables use hote hain.
| - No extra matrix allocated.
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Rotate Image ===");
console.log("");

// Test Case 1: 3x3 matrix
console.log("Test 1: matrix = [[1,2,3],[4,5,6],[7,8,9]]");
const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix1);
console.log("Expected: [[7,4,1],[8,5,2],[9,6,3]]");
console.log("Output:", matrix1);
console.log("");

// Test Case 2: 4x4 matrix
console.log("Test 2: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]");
const matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(matrix2);
console.log("Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]");
console.log("Output:", matrix2);
console.log("");

// Test Case 3: 1x1 matrix
console.log("Test 3: matrix = [[1]]");
const matrix3 = [[1]];
rotate(matrix3);
console.log("Expected: [[1]]");
console.log("Output:", matrix3);
console.log("");

// Test Case 4: 2x2 matrix
console.log("Test 4: matrix = [[1,2],[3,4]]");
const matrix4 = [[1, 2], [3, 4]];
rotate(matrix4);
console.log("Expected: [[3,1],[4,2]]");
console.log("Output:", matrix4);
console.log("");

module.exports = { rotate };
