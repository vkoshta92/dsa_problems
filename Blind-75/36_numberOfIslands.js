// 🌐 BATCH 8 – GRAPHS

function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // DFS to sink the island
  function dfs(r, c) {
    // Boundary + water check
    if (
      r < 0 || c < 0 ||
      r >= rows || c >= cols ||
      grid[r][c] === "0"
    ) return;

    // Mark land as visited (sink it)
    grid[r][c] = "0";

    // Visit all 4 directions
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  // Traverse entire grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Found an unvisited island
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}

// Test
console.log(
  numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ])
); // 3
