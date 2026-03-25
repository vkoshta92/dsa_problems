/**
 * ============================================================================
 * PROBLEM: Word Search
 * ============================================================================
 * Given an m x n grid of characters and a string word, return true if word
 * exists in the grid. The word can be constructed from adjacent cells
 * (horizontally or vertically). Same cell cannot be used more than once.
 * 
 * ============================================================================
 * APPROACH: DFS with Backtracking
 * ============================================================================
 * Logic:
 * 1. Try starting DFS from each cell
 * 2. At each cell, check if it matches current character in word
 * 3. If match, mark cell as visited and explore 4 directions
 * 4. Backtrack by restoring cell after exploration
 * 
 * Key Insight:
 * - Mark visited cells by changing character temporarily
 * - Restore after DFS (backtracking)
 * - This avoids using extra visited array
 * 
 * DFS Steps:
 * 1. Check bounds and character match
 * 2. Mark cell as visited (change to '#')
 * 3. Recurse in all 4 directions
 * 4. Restore cell (backtrack)
 * 5. Return true if any direction finds remaining word
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(N * 4^L)
 * - N = number of cells (m * n)
 * - L = length of word
 * - Each cell can start DFS, each DFS explores 4 directions L times
 * 
 * SPACE COMPLEXITY: O(L)
 * - L = length of word (recursion depth)
 * - No extra space for visited (we modify board in-place)
 * ============================================================================
 */

function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r, c, index) {
    // If full word matched
    if (index === word.length) return true;

    // Out of bounds or mismatch
    if (
      r < 0 || c < 0 || r >= rows || c >= cols ||
      board[r][c] !== word[index]
    ) {
      return false;
    }

    // Mark cell as visited
    const temp = board[r][c];
    board[r][c] = "#";

    // Explore all 4 directions
    const found =
      dfs(r + 1, c, index + 1) ||
      dfs(r - 1, c, index + 1) ||
      dfs(r, c + 1, index + 1) ||
      dfs(r, c - 1, index + 1);

    // Restore cell
    board[r][c] = temp;

    return found;
  }

  // Try starting DFS from each cell
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
}

// Test
console.log(
  exist(
    [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
    "ABCCED"
  )
);
