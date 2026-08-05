/* Problem: N-Queens | Difficulty: Hard
 * Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard
 * such that no two queens attack each other.
 *
 * Given an integer n, return the number of distinct solutions to the n-queens
 * puzzle. Also return the board configurations.
 *
 * A queen attacks another queen if:
 *   - They are in the same row
 *   - They are in the same column
 *   - They are on the same diagonal
 *
 * Example 1:
 * Input: n = 4
 * Output: 2
 * Explanation: There are two distinct solutions to the 4-queens puzzle:
 *   Solution 1: [".Q..","...Q","Q...","..Q."]
 *   Solution 2: ["..Q.","Q...","...Q",".Q.."]
 *
 * Example 2:
 * Input: n = 1
 * Output: 1
 * Explanation: Single queen on 1x1 board.
 *
 * Example 3:
 * Input: n = 8
 * Output: 92
 *   There are 92 distinct solutions for 8-queens.
 *
 * Hinglish Detailed Logic:
 * ------------------------
 * Bhai, yeh bahut famous backtracking problem hai. Humne n x n chessboard
 * par n queens place karni hain jismein koi do queens ek doosre ko attack
 * na kar sakein.
 *
 * Key insight: Har row mein exactly ek queen hoti hai. Isliye hum row by
 * row place karte hain. Har row mein har column mein queen place karne
 * ka try karte hain aur check karte hain ki kya yeh safe position hai.
 *
 * Safety check (3 conditions):
 * 1. Same column mein koi queen nahi honi chahiye (upar se niche check).
 * 2. Upper-left diagonal mein koi queen nahi honi chahiye.
 * 3. Upper-right diagonal mein koi queen nahi honi chahiye.
 * (Neeche ki taraf check ki zaroorat nahi kyunki hum top-to-bottom ja rahe hain)
 *
 * Algorithm:
 * 1. Board banao n x n ka, sab '.' se filled.
 * 2. Backtracking function jo current row leta hai:
 *    a. Base case: agar row === n toh saari queens place ho gayi!
 *       Board ka format karke answer mein daal do.
 *    b. Har column ke liye:
 *       - Check karo kya current (row, col) par queen safe hai.
 *       - Agar safe hai toh:
 *         i.  Board[row][col] = 'Q' karo.
 *         ii. Next row ke liye recurse karo.
 *         iii. Backtrack: Board[row][col] = '.' karo.
 * 3. isSafe function:
 *    - Loop through all rows from 0 to row-1 (sirf upar dekho).
 *    - Column conflict: board[i][col] === 'Q'?
 *    - Left diagonal: board[i][col - (row - i)] === 'Q'?
 *    - Right diagonal: board[i][col + (row - i)] === 'Q'?
 *
 * Dry run: n = 4
 * - row=0, try col=0: safe -> place Q at (0,0)
 *   - row=1, try col=0: same column! not safe
 *   - row=1, try col=1: left diagonal! not safe
 *   - row=1, try col=2: safe -> place Q at (1,2)
 *     - row=2, try col=0: safe -> place Q at (2,0)
 *       - row=3, try col=1: safe -> FOUND [".Q..","...Q","Q...","..Q."]
 *     - backtrack, try col=1: not safe, col=2: same column, col=3: not safe
 *   - row=1, try col=3: safe -> place Q at (1,3)
 *     - row=2, try col=1: safe -> place Q at (2,1)
 *       - row=3, try col=2: safe -> FOUND ["..Q.","Q...","...Q",".Q.."]
 * Answer: 2 solutions
 */

function solveNQueens(n) {
  const result = [];

  // Board banao n x n ka, sab dots se filled
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function isSafe(row, col) {
    // Check karo kya current position par queen rakhna safe hai
    // Sirf UPAR ke rows check karte hain (hum top-to-bottom ja rahe hain)

    for (let i = 0; i < row; i += 1) {
      // Same column check: kya upar kisi row mein same column mein queen hai?
      if (board[i][col] === "Q") return false;

      // Upper-left diagonal check:
      // Diagonal formula: row difference = col difference
      // (row - i) steps left jao column mein
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q") return false;

      // Upper-right diagonal check:
      // (row - i) steps right jao column mein
      if (col + (row - i) < n && board[i][col + (row - i)] === "Q") return false;
    }

    return true;
  }

  function backtrack(row) {
    // Base case: agar saari rows process ho gayin toh solution mil gaya!
    if (row === n) {
      // Board ko string format mein convert karo
      result.push(board.map((r) => r.join("")));
      return;
    }

    // Current row mein har column mein queen place karne ka try karo
    for (let col = 0; col < n; col += 1) {
      if (isSafe(row, col)) {
        // Queen place karo
        board[row][col] = "Q";

        // Next row ke liye recurse karo
        backtrack(row + 1);

        // Backtrack: queen hatao taaki next option try ho sake
        board[row][col] = ".";
      }
    }
  }

  backtrack(0);
  return result;
}

// ============ Test Cases ============

// Test 1: n = 4, should have 2 solutions
const solutions4 = solveNQueens(4);
console.log("Test 1 - n=4 solution count:", solutions4.length);
console.log("Test 1 - Solution 1:", JSON.stringify(solutions4[0]));
console.log("Test 1 - Solution 2:", JSON.stringify(solutions4[1]));
// Output: 2
// Solution 1: [".Q..","...Q","Q...","..Q."]
// Solution 2: ["..Q.","Q...","...Q",".Q.."]

// Test 2: n = 1, should have 1 solution
const solutions1 = solveNQueens(1);
console.log("Test 2 - n=1 solution count:", solutions1.length);
console.log("Test 2 - Solution:", JSON.stringify(solutions1[0]));
// Output: 1, [["Q"]]

// Test 3: n = 2, should have 0 solutions (impossible)
console.log("Test 3 - n=2 solution count:", solveNQueens(2).length);
// Output: 0

// Test 4: n = 3, should have 0 solutions (impossible)
console.log("Test 4 - n=3 solution count:", solveNQueens(3).length);
// Output: 0

// Test 5: n = 5, should have 10 solutions
console.log("Test 5 - n=5 solution count:", solveNQueens(5).length);
// Output: 10

// Test 6: n = 8, should have 92 solutions
console.log("Test 6 - n=8 solution count:", solveNQueens(8).length);
// Output: 92

/*
 * Time Complexity: O(N!)
 *   - First row: N choices
 *   - Second row: at most N-1 choices (one column blocked)
 *   - Third row: at most N-2 choices
 *   - ... and so on
 *   - Total: N * (N-1) * (N-2) * ... * 1 = N!
 *   - isSafe check is O(N) but overall complexity dominated by N!
 *
 * Space Complexity: O(N^2)
 *   - Board storage: N x N = N^2
 *   - Recursion depth: N
 *   - Total: O(N^2)
 */

module.exports = { solveNQueens };
