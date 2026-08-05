/*
|--------------------------------------------------------------------------
| Problem: Spiral Matrix
| Difficulty: Medium
| Companies: Amazon, Google, Meta, Microsoft, Apple, Uber, Bloomberg
| LeetCode: #54
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given an m x n matrix, return all elements of the matrix in spiral order.
| Start from the top-left corner and traverse right, then down, then left,
| then up, repeating inward until all elements are collected.
|
| Example 1:
| Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
| Output: [1,2,3,6,9,8,7,4,5]
|
| Example 2:
| Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
| Output: [1,2,3,4,8,12,11,10,9,5,6,7]
|
| Example 3:
| Input: matrix = [[1]]
| Output: [1]
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, spiral order ka matlab hai ki matrix ke bahar se andar ki taraf
| spiral (snail) ki tarah traverse karna hai. Jaise ghoom-phir kar andar
| aate hain.
|
| Approach: Four Boundaries (top, bottom, left, right)
| ------------------------------------------------------
|
| 1. Chaar boundaries define karo:
|    top = 0 (first row)
|    bottom = m - 1 (last row)
|    left = 0 (first column)
|    right = n - 1 (last column)
|
| 2. Direction cycle: Left → Right → Top → Bottom → Right → Left → Bottom → Top
|
| 3. Har step ke baad corresponding boundary ko shrink karo:
|
|    a) Left → Right (top row traverse karo):
|       - left se right tak top row ke elements lo
|       - top++ (top row done, aage badho)
|
|    b) Top → Bottom (right column traverse karo):
|       - top se bottom tak right column ke elements lo
|       - right-- (right column done, peeche aao)
|
|    c) Right → Left (bottom row traverse karo):
|       - ONLY IF top <= bottom (check karo row remaining hai)
|       - right se left tak bottom row ke elements lo
|       - bottom-- (bottom row done, upar aao)
|
|    d) Bottom → Top (left column traverse karo):
|       - ONLY IF left <= right (check karo column remaining hai)
|       - bottom se top tak left column ke elements lo
|       - left++ (left column done, aage badho)
|
| 4. Ruko jab result mein total m*n elements aa jaayein.
|
| Kyun check lagana zaroori hai?
| ------------------------------
| Step c aur d mein boundary check isliye lagate hain kyunki ho sakta hai
| ki step a ya b ke baad saari rows/columns khatam ho gayi hon.
|
| Dry Run: matrix = [[1,2,3],[4,5,6],[7,8,9]]
|
| Initial: top=0, bottom=2, left=0, right=2, result=[]
|
| Step a (left→right, row 0): push 1,2,3 → result=[1,2,3], top=1
| Step b (top→bottom, col 2): push 6,9 → result=[1,2,3,6,9], right=1
| Step c (right→left, row 2): push 8,7 → result=[1,2,3,6,9,8,7], bottom=1
| Step d (bottom→top, col 0): push 4 → result=[1,2,3,6,9,8,7,4], left=1
|
| Loop again:
| Step a (left→right, row 1): push 5 → result=[1,2,3,6,9,8,7,4,5], top=2
|
| Now top > bottom, loop ends.
| Output: [1,2,3,6,9,8,7,4,5] ✓
|
|--------------------------------------------------------------------------
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const result = [];

    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;

    while (top <= bottom && left <= right) {
        // Left → Right (top row)
        for (let col = left; col <= right; col += 1) {
            result.push(matrix[top][col]);
        }
        top += 1;

        // Top → Bottom (right column)
        for (let row = top; row <= bottom; row += 1) {
            result.push(matrix[row][right]);
        }
        right -= 1;

        // Right → Left (bottom row) — check if row still exists
        if (top <= bottom) {
            for (let col = right; col >= left; col -= 1) {
                result.push(matrix[bottom][col]);
            }
            bottom -= 1;
        }

        // Bottom → Top (left column) — check if column still exists
        if (left <= right) {
            for (let row = bottom; row >= top; row -= 1) {
                result.push(matrix[row][left]);
            }
            left += 1;
        }
    }

    return result;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(m * n)
| - Har element exactly ek baar visit hota hai.
| - m = number of rows, n = number of columns.
|
| Space Complexity: O(1) (excluding result array)
| - Sirf chaar variables (top, bottom, left, right) constant space lete hain.
| - Result array problem requirement hai, usko count nahi karte.
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Spiral Matrix ===");
console.log("");

// Test Case 1: 3x3 matrix
console.log("Test 1: matrix = [[1,2,3],[4,5,6],[7,8,9]]");
console.log("Expected: [1,2,3,6,9,8,7,4,5]");
console.log("Output:", spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log("");

// Test Case 2: 3x4 matrix (more columns)
console.log("Test 2: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]");
console.log("Expected: [1,2,3,4,8,12,11,10,9,5,6,7]");
console.log("Output:", spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
console.log("");

// Test Case 3: Single element
console.log("Test 3: matrix = [[1]]");
console.log("Expected: [1]");
console.log("Output:", spiralOrder([[1]]));
console.log("");

// Test Case 4: Single row
console.log("Test 4: matrix = [[1,2,3,4]]");
console.log("Expected: [1,2,3,4]");
console.log("Output:", spiralOrder([[1, 2, 3, 4]]));
console.log("");

// Test Case 5: Single column
console.log("Test 5: matrix = [[1],[2],[3],[4]]");
console.log("Expected: [1,2,3,4]");
console.log("Output:", spiralOrder([[1], [2], [3], [4]]));
console.log("");

module.exports = { spiralOrder };
