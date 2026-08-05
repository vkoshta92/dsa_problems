/* Problem: Word Search | Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Facebook, Apple, Bloomberg
 *
 * Given an m x n grid of characters board and a string word, return true if
 * word exists in the grid. The word can be constructed from letters of
 * sequentially adjacent cells (adjacent cells are horizontally or vertically
 * neighboring). The same cell may not be used more than once.
 *
 * Example 1:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 * Explanation: A -> B -> C -> C -> E -> D forms the word.
 *
 * Example 2:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * Output: true
 *
 * Example 3:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
 * Output: false
 * Explanation: B cannot be used twice.
 *
 * Hinglish Detailed Logic:
 * ------------------------
 * Bhai, yeh grid-based backtracking hai. Har cell se word search start kar
 * sakte hain. Agar first character match ho toh us cell se 4 directions mein
 * (up, down, left, right) DFS explore karo.
 *
 * Key insight: Visited cells ko mark karna hota hai taaki same cell
 * dobaar use na ho. Hum cell ko '#' se mark karte hain aur backtrack
 * par original value wapas daalte hain.
 *
 * Algorithm:
 * 1. Grid ke har cell ke liye check karo kya yeh word ka pehla char hai?
 * 2. Agar haan toh DFS start karo us cell se.
 * 3. DFS mein:
 *    a. Base case: agar poori word match ho gayi (i === word.length) toh true.
 *    b. Boundary check: row/col bahar hai ya char match nahi ho raha toh false.
 *    c. Current cell ko '#' se mark karo (visited).
 *    d. 4 directions mein recurse karo (i+1 ke saath).
 *    e. Backtrack: cell ko original value wapas daalo.
 * 4. Agar kisi bhi cell se word nahi mila toh false.
 *
 * Dry run: board = [["A","B"],["C","D"]], word = "AB"
 * - (0,0): 'A' == 'A' -> mark '#', explore neighbors
 *   - (0,1): 'B' == 'B' -> i=2 == word.length -> FOUND TRUE!
 * - Return true
 *
 * Dry run: board = [["A","B"],["C","D"]], word = "AD"
 * - (0,0): 'A' == 'A' -> mark '#', explore
 *   - (0,1): 'B' != 'D' -> false
 *   - (1,0): 'C' != 'D' -> false
 *   - (-1,0): out of bounds -> false
 *   - (0,-1): out of bounds -> false
 * - backtrack: restore 'A'
 * - (0,1): 'B' != 'A' -> skip
 * - (1,0): 'C' != 'A' -> skip
 * - (1,1): 'D' != 'A' -> skip
 * - Return false
 */

function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r, c, i) {
    // Base case: poori word match ho gayi!
    if (i === word.length) return true;

    // Boundary check ya character match nahi ho raha
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[i]) {
      return false;
    }

    // Current cell ko temporarily mark karo (visited)
    // '#' use karte hain taaki pata chale ki yeh cell already use ho chuka
    const temp = board[r][c];
    board[r][c] = "#";

    // 4 directions mein explore karo: down, up, right, left
    // i+1 kyunki next character match karna hai
    const found =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    // Backtrack: original character wapas daalo taaki dusre paths use kar sakein
    board[r][c] = temp;

    return found;
  }

  // Grid ke har cell se search start karo
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
}

// ============ Test Cases ============

// Test 1: Word exists - "ABCCED"
// Expected: true
console.log(
  "Test 1:",
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
// Output: true

// Test 2: Word exists - "SEE"
// Expected: true
console.log(
  "Test 2:",
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
);
// Output: true

// Test 3: Word doesn't exist - "ABCB" (can't reuse B)
// Expected: false
console.log(
  "Test 3:",
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
// Output: false

// Test 4: Single character word
// Expected: true
console.log(
  "Test 4:",
  exist([["A"]], "A")
);
// Output: true

// Test 5: Word longer than grid characters
// Expected: false
console.log(
  "Test 5:",
  exist([["A", "B"]], "ABCD")
);
// Output: false

// Test 6: Word in zigzag pattern
// Expected: true
console.log(
  "Test 6:",
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "E", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABFSE"
  )
);
// Output: true (A -> B -> F -> S -> E going down then right then down then right)

/*
 * Time Complexity: O(M * N * 4^L)
 *   where M = rows, N = cols, L = word length
 *   - M * N because we start DFS from each cell
 *   - 4^L because at each step we have 4 directions to explore
 *   - Worst case: entire grid is same character and word is all same
 *
 * Space Complexity: O(L)
 *   - Recursion depth = L (word length)
 *   - Grid is modified in-place (no extra space for visited array)
 */

module.exports = { exist };
