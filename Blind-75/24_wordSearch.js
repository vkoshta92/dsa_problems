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
