/*
==========================================================================
Problem Name: Search a 2D Matrix
Difficulty: Medium
Companies: Amazon, Microsoft, Facebook, Apple, Bloomberg
==========================================================================

Problem Statement:
You are given an m x n integer matrix matrix with the following two properties:
- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

Note: You must solve the problem with O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Explanation: 3 is present in the matrix at position (0,1).

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
Explanation: 13 is not present in the matrix.

Example 3:
Input: matrix = [[1]], target = 1
Output: true
==========================================================================
*/

/*
==============================================
  Hinglish Logic Explanation (Top-Right Approach)
==============================================

Dekho bhai, humare paas ek 2D matrix hai jisme har row sorted hai
aur har row ka first element previous row ke last element se bada hai.

Method: Top-Right Corner se start karo
- Hum matrix ke top-right corner (row = 0, col = n-1) se shuru karenge.
- Har step mein 3 cases hote hain:

  Case 1: Agar matrix[row][col] == target
    -> Mil gaya! True return karo.

  Case 2: Agar target < matrix[row][col]
    -> Matlab target is column mein nahi ho sakta (kyunki column sorted hai
       neeche ki taraf badhta hai). Toh hum left jayenge: col--.

  Case 3: Agar target > matrix[row][col]
    -> Matlab target is row mein nahi ho sakta (kyunki row sorted hai
       daayi taraf badhta hai). Toh hum neeche jayenge: row++.

- Yeh tab tak chalega jab tak row < m aur col >= 0 ho.
- Agar loop khatam ho jaye aur target na mile toh false return karo.

Time Complexity: O(m + n) - Har step mein ya toh row badhti hai ya column ghat-ta hai.
Space Complexity: O(1) - Koi extra space nahi chahiye.

Alternative Approach (Binary Search):
- Matrix ko 1D array ki tarah treat karo.
- Har element ka index i se row = i / n aur col = i % n hota hai.
- Standard binary search lagao.
- Time: O(log(m * n)), Space: O(1)
==============================================
*/

function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    const m = matrix.length;
    const n = matrix[0].length;

    // Top-Right corner se start karo
    let row = 0;
    let col = n - 1;

    while (row < m && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (target < matrix[row][col]) {
            // Target chhota hai, left jao (current column chhodo)
            col--;
        } else {
            // Target bada hai, neeche jao (current row chhodo)
            row++;
        }
    }

    return false;
}

/*
==============================================
  Time Complexity: O(m + n)
  - Worst case mein hum ek row aur ek column traverse karenge.

  Space Complexity: O(1)
  - Sirf kuch variables use ho rahe hain.
==============================================
*/

// ===================== TEST CASES =====================

// Test Case 1: Target exists in matrix
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Expected Output: true
console.log("Test 1:", searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); // true

// Test Case 2: Target does not exist
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Expected Output: false
console.log("Test 2:", searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // false

// Test Case 3: Single element matrix, target found
// Input: matrix = [[1]], target = 1
// Expected Output: true
console.log("Test 3:", searchMatrix([[1]], 1)); // true

// Test Case 4: Target is last element
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 60
// Expected Output: true
console.log("Test 4:", searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 60)); // true

// Test Case 5: Empty matrix
// Input: matrix = [], target = 1
// Expected Output: false
console.log("Test 5:", searchMatrix([], 1)); // false

module.exports = searchMatrix;
