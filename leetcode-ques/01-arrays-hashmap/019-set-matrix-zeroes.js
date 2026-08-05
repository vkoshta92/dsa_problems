/*
|--------------------------------------------------------------------------
| Problem: Set Matrix Zeroes
| Difficulty: Medium
| Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg, Uber
| LeetCode: #73
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given an m x n integer matrix, if any cell contains 0, then set its
| entire row and entire column to 0. You must do it in-place.
|
| Follow up: Can you achieve O(1) extra space?
|
| Example 1:
| Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
| Output: [[1,0,1],[0,0,0],[1,0,1]]
|
| Example 2:
| Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
| Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
|
| Example 3:
| Input: matrix = [[1,0]]
| Output: [[0,0]]
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, problem simple lagti hai — jahan 0 dikhe, poori row aur column ko
| 0 kar do. Lekin dikkat yeh hai ki agar hum turant zeroes set karte gaye
| toh newly created zeroes bhi trigger ho jaayenge, aur end mein poora
| matrix zero ban sakta hai. Isliye pehle MARK karna hai, phir SET karna hai.
|
| Approach: First Row & First Column as Markers (O(1) space)
| ----------------------------------------------------------
|
| Idea: Matrix ki first row aur first column ko marker ke roop mein use karo.
|
| 1. Sabse pehle check karo ki first row mein originally koi 0 tha ya nahi
|    → firstRowHasZero = true agar first row mein 0 hai.
|
| 2. Phir check karo ki first column mein originally koi 0 tha ya nahi
|    → firstColHasZero = true agar first column mein 0 hai.
|
| 3. Ab remaining matrix (i=1..m-1, j=1..n-1) traverse karo:
|    - Agar matrix[i][j] === 0, toh matrix[i][0] = 0 aur matrix[0][j] = 0
|      karke mark kar do. Yaani row-i aur col-j ko zero karna padega baad mein.
|
| 4. Ab markers ke hisaab se cells zero karo (i=1..m-1, j=1..n-1):
|    - Agar matrix[i][0] === 0 ya matrix[0][j] === 0, toh matrix[i][j] = 0
|
| 5. Finally, agar firstRowHasZero tha toh poori first row zero kar do.
|    Aur agar firstColHasZero tha toh poori first column zero kar do.
|
| Order of operations is CRITICAL:
| - Pehle first row/col check karo (step 1-2)
| - Phir inner matrix ke markers set karo (step 3)
| - Phir inner matrix ko zero karo (step 4) — yeh step 3 ke baad hi
|   karna hai, nahi toh markers overwrite ho sakte hain.
| - End mein first row/col ko unke respective flags ke hisaab se 0 karo (step 5)
|
| Dry Run: matrix = [[1,1,1],[1,0,1],[1,1,1]]
|
| Step 1: Check first row [1,1,1] → no zero → firstRowHasZero = false
| Step 2: Check first col [1,1,1] → no zero → firstColHasZero = false
|
| Step 3: Inner matrix scan ((1,1) to (2,2)):
|   matrix[1][1] = 0 → mark: matrix[1][0]=0, matrix[0][1]=0
|   matrix[1][2] = 1 → skip
|   matrix[2][1] = 1 → skip
|   matrix[2][2] = 1 → skip
|   Matrix now: [[1,0,1],[0,0,1],[1,1,1]]
|
| Step 4: Apply markers on inner cells:
|   (1,1): matrix[1][0]=0 OR matrix[0][1]=0 → set 0
|   (1,2): matrix[1][0]=0 OR matrix[0][2]=1 → set 0
|   (2,1): matrix[2][0]=1 OR matrix[0][1]=0 → set 0
|   (2,2): matrix[2][0]=1 OR matrix[0][2]=1 → no change
|   Matrix now: [[1,0,1],[0,0,0],[1,0,1]]
|
| Step 5: firstRowHasZero=false, firstColHasZero=false → no change
|
| Output: [[1,0,1],[0,0,0],[1,0,1]] ✓
|
|--------------------------------------------------------------------------
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place.
 */
function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let firstRowHasZero = false;
    let firstColHasZero = false;

    // Step 1: Check if first row has any zero
    for (let j = 0; j < n; j += 1) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    // Step 2: Check if first column has any zero
    for (let i = 0; i < m; i += 1) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // Step 3: Use first row and first column as markers for inner cells
    for (let i = 1; i < m; i += 1) {
        for (let j = 1; j < n; j += 1) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // mark row i
                matrix[0][j] = 0; // mark column j
            }
        }
    }

    // Step 4: Zero out inner cells based on markers
    for (let i = 1; i < m; i += 1) {
        for (let j = 1; j < n; j += 1) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step 5: Handle first row
    if (firstRowHasZero) {
        for (let j = 0; j < n; j += 1) {
            matrix[0][j] = 0;
        }
    }

    // Step 6: Handle first column
    if (firstColHasZero) {
        for (let i = 0; i < m; i += 1) {
            matrix[i][0] = 0;
        }
    }
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(m * n)
| - Matrix is traversed a constant number of times.
| - Each traversal is O(m * n).
|
| Space Complexity: O(1)
| - Only two boolean variables (firstRowHasZero, firstColHasZero).
| - No extra arrays, first row and column act as in-place markers.
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Set Matrix Zeroes ===");
console.log("");

// Test Case 1: 3x3, single zero in middle
console.log("Test 1: matrix = [[1,1,1],[1,0,1],[1,1,1]]");
const matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(matrix1);
console.log("Expected: [[1,0,1],[0,0,0],[1,0,1]]");
console.log("Output:", matrix1);
console.log("");

// Test Case 2: Zeroes in first row and first column
console.log("Test 2: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]");
const matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeroes(matrix2);
console.log("Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]");
console.log("Output:", matrix2);
console.log("");

// Test Case 3: 1x2 edge case
console.log("Test 3: matrix = [[1,0]]");
const matrix3 = [[1, 0]];
setZeroes(matrix3);
console.log("Expected: [[0,0]]");
console.log("Output:", matrix3);
console.log("");

// Test Case 4: 3x3, no zero
console.log("Test 4: matrix = [[1,2,3],[4,5,6],[7,8,9]]");
const matrix4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
setZeroes(matrix4);
console.log("Expected: [[1,2,3],[4,5,6],[7,8,9]]");
console.log("Output:", matrix4);
console.log("");

module.exports = { setZeroes };
