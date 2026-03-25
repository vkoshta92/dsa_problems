/**
 * ============================================================================
 * PROBLEM: Number of Islands
 * ============================================================================
 * Given a 2D grid of '1's (land) and '0's (water), count the number of
 * islands. An island is surrounded by water and formed by connecting
 * adjacent lands horizontally or vertically.
 * 
 * ============================================================================
 * APPROACH: DFS to Sink Islands
 * ============================================================================
 * Logic:
 * 1. Scan the grid for land ('1')
 * 2. When land found, it's a new island → increment count
 * 3. Use DFS to "sink" all connected land (mark as visited)
 * 4. This ensures we don't count same island multiple times
 * 
 * Sinking Technique:
 * - Instead of separate visited array, mark visited by changing '1' to '0'
 * - This modifies grid in-place, saving space
 * - DFS explores all 4 directions and sinks connected land
 * 
 * Example:
 * Grid:
 *   ["1","1","0","0","0"],
 *   [1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * 
 * - Find '1' at (0,0): island #1, sink entire top-left cluster
 * - Find '1' at (2,2): island #2, sink it
 * - Find '1' at (3,3): island #3, sink diagonal cluster
 * - Total: 3 islands
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(m * n)
 * - Each cell visited at most once
 * - m = rows, n = columns
 * 
 * SPACE COMPLEXITY: O(m * n)
 * - Worst case: recursion stack for DFS
 * - Could be O(m * n) if entire grid is land
 * ============================================================================
 */

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
