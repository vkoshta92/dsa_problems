/* Problem: Sudoku Solver | Difficulty: Hard
 * Companies: Amazon, Google, Microsoft, Meta, Apple
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 *
 * A sudoku solution must satisfy all of the following rules:
 * 1. Each of the digits 1-9 must occur exactly once in each row.
 * 2. Each of the digits 1-9 must occur exactly once in each column.
 * 3. Each of the digits 1-9 must occur exactly once in each of the 9
 *    3x3 sub-boxes of the grid.
 *
 * The '.' character indicates empty cells.
 *
 * Example 1:
 * Input: board = [
 *   ["5","3",".",".","7",".",".",".","."],
 *   ["6",".",".","1","9","5",".",".","."],
 *   [".","9","8",".",".",".",".","6","."],
 *   ["8",".",".",".","6",".",".",".","3"],
 *   ["4",".",".","8",".","3",".",".","1"],
 *   ["7",".",".",".","2",".",".",".","6"],
 *   [".","6",".",".",".",".","2","8","."],
 *   [".",".",".","4","1","9",".",".","5"],
 *   [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: Same board with all '.' filled with valid numbers.
 *
 * Note: The input board is guaranteed to have exactly one solution.
 *
 * Hinglish Detailed Logic:
 * ------------------------
 * Bhai, yeh pure backtracking ki problem hai. Sudoku solve karna matlab
 * khaali cells ko ek ek karke fill karna aur check karna ki kya placement
 * valid hai. Agar koi number rakhne se conflict hoti hai toh backtrack karo
 * aur doosra number try karo.
 *
 * Key insight: Hum left-to-right, top-to-bottom order mein cells fill karte
 * hain. Jab ek row complete ho jaaye toh next row par jaate hain. Har khaali
 * cell ke liye 1-9 tak saari numbers try karte hain.
 *
 * Algorithm:
 * 1. Board traverse karo aur pehla khaali ('.') cell dhundho.
 * 2. Agar koi khaali cell nahi mila toh Sudoku solve ho gaya! (return true)
 * 3. Khaali cell milne par:
 *    a. 1 se 9 tak har number try karo:
 *       - Check karo kya number is position par valid hai:
 *         i.  Same row mein number pehle se maujood nahi hona chahiye.
 *         ii. Same column mein number pehle se maujood nahi hona chahiye.
 *         iii. 3x3 box mein number pehle se maujood nahi hona chahiye.
 *       - Agar valid hai toh:
 *         i.  Board[row][col] = number
 *         ii. Recursively agla cell fill karo.
 *         iii. Agar recursion true return kare toh solution mil gaya!
 *         iv. Agar false return kare toh backtrack karo: cell ko '.' banao.
 *    b. Agar 1-9 mein se koi bhi valid nahi hai toh false return karo
 *       (yeh path galat hai, previous cell change karna hoga).
 *
 * 3x3 Box formula:
 * - Box starting row = 3 * Math.floor(row / 3)
 * - Box starting col = 3 * Math.floor(col / 3)
 *
 * Dry run (simplified 4x4):
 * - Pehla '.' cell (0,2) mila
 * - Try 1: row check pass, col check pass, box check pass -> place 1
 * - Recurse: agla '.' cell (0,3) mila
 * - Try 1: row mein 1 already hai -> skip
 * - Try 2: sab pass -> place 2
 * - Recurse: agla '.' cell (1,1) mila
 * - ... continue until sab cells filled ya backtrack
 */

function solveSudoku(board) {
  function isValid(row, col, num) {
    // Check karo kya num is position par rakhna safe hai

    for (let i = 0; i < 9; i += 1) {
      // Row check: kya same row mein num pehle se hai?
      if (board[row][i] === num) return false;

      // Column check: kya same column mein num pehle se hai?
      if (board[i][col] === num) return false;

      // 3x3 Box check: kya same box mein num pehle se hai?
      // Box ki starting row/column nikalte hain
      const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const boxCol = 3 * Math.floor(col / 3) + (i % 3);
      if (board[boxRow][boxCol] === num) return false;
    }

    return true;
  }

  function solve() {
    // Board traverse karo aur pehla khaali cell dhundho
    for (let row = 0; row < 9; row += 1) {
      for (let col = 0; col < 9; col += 1) {
        // Agar cell khaali hai toh try karo 1-9 fill karna
        if (board[row][col] === ".") {
          // 1 se 9 tak har number try karo
          for (let num = 1; num <= 9; num += 1) {
            const numStr = String(num);

            // Check karo kya yeh number is position par valid hai
            if (isValid(row, col, numStr)) {
              // Number place karo
              board[row][col] = numStr;

              // Recursively baaki board solve karo
              // Agar solve() true return kare toh solution mil gaya
              if (solve()) return true;

              // Backtrack: number hatao (yeh path galat tha)
              board[row][col] = ".";
            }
          }

          // Agar 1-9 mein se koi bhi valid nahi hai toh
          // yeh path galat hai - previous cell change karna hoga
          return false;
        }
      }
    }

    // Agar koi khaali cell nahi mila toh Sudoku solve ho gaya!
    return true;
  }

  solve();
  return board;
}

// ============ Test Cases ============

// Test 1: Standard Sudoku
const board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log("Test 1 - First row:", JSON.stringify(solveSudoku(board1)[0]));
// Output: ["5","3","4","6","7","8","9","1","2"]

// Verify the board is valid
const solved = solveSudoku(board1);
console.log("Test 1 - Board[1][1]:", solved[1][1]);
// Output: "7" (was ".", now filled)

// Test 2: Another Sudoku puzzle
const board2 = [
  [".", ".", "9", "7", "4", "8", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", ".", ".", ".", "2", "4", "."],
  [".", "6", "4", ".", "1", ".", "5", "9", "."],
  [".", "9", "8", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "8", ".", "3", ".", "2", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."],
];
const solved2 = solveSudoku(board2);
console.log("Test 2 - First row:", JSON.stringify(solved2[0]));
// Output: ["5","1","9","7","4","8","6","3","2"]

// Test 3: Verify a cell was empty and now filled
const board3 = [
  ["." , ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];
const solved3 = solveSudoku(board3);
let filled = true;
for (let r = 0; r < 9; r++) {
  for (let c = 0; c < 9; c++) {
    if (solved3[r][c] === ".") filled = false;
  }
}
console.log("Test 3 - All cells filled:", filled);
// Output: true

/*
 * Time Complexity: O(9^(M))
 *   where M = number of empty cells
 *   - Worst case: every empty cell tries all 9 numbers
 *   - But pruning via isValid check reduces this significantly
 *   - With good pruning: roughly O(9^M / constraints)
 *
 * Space Complexity: O(1) or O(81)
 *   - Board is modified in-place (no extra space)
 *   - Recursion depth: at most 81 (all cells empty)
 *   - But typically much less due to pre-filled cells
 *   - technically O(81) for recursion stack, but constant space overall
 */

module.exports = { solveSudoku };
