/**
 * ============================================================================
 * PROBLEM: Pacific Atlantic Water Flow
 * ============================================================================
 * Given an m x n matrix of heights, water can flow to adjacent cells with
 * equal or lower height. Find cells where water can flow to BOTH Pacific
 * (top/left edges) and Atlantic (bottom/right edges) oceans.
 * 
 * ============================================================================
 * APPROACH: DFS from Ocean Borders
 * ============================================================================
 * Logic:
 * 1. Instead of checking each cell, start from ocean borders
 * 2. DFS inward, marking cells reachable from each ocean
 * 3. A cell reachable from both oceans is our answer
 * 
 * Why Reverse Flow?
 * - Original problem: does water flow from cell to ocean?
 * - Reverse: which cells can be reached from ocean?
 * - Both are equivalent but reverse is easier
 * - We only need to check cells "higher or equal" going inward
 * 
 * Pacific Border: Top row + Left column
 * Atlantic Border: Bottom row + Right column
 * 
 * Example:
 * Pacific reachable: Start from top/left, flow uphill
 * Atlantic reachable: Start from bottom/right, flow uphill
 * Intersection = cells reaching both oceans
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(m * n)
 * - Each cell visited at most twice (once per ocean)
 * 
 * SPACE COMPLEXITY: O(m * n)
 * - Two visited matrices
 * - Recursion stack in worst case
 * ============================================================================
 */

function pacificAtlantic(heights) {
  const rows = heights.length;
  const cols = heights[0].length;

  // Visited matrices
  const pac = Array.from({ length: rows }, () => Array(cols).fill(false));
  const atl = Array.from({ length: rows }, () => Array(cols).fill(false));

  function dfs(r, c, visited, prevHeight) {
    // Boundary + height condition
    if (
      r < 0 || c < 0 ||
      r >= rows || c >= cols ||
      visited[r][c] ||
      heights[r][c] < prevHeight
    ) return;

    visited[r][c] = true;

    // Explore neighbors
    dfs(r + 1, c, visited, heights[r][c]);
    dfs(r - 1, c, visited, heights[r][c]);
    dfs(r, c + 1, visited, heights[r][c]);
    dfs(r, c - 1, visited, heights[r][c]);
  }

  // Start DFS from Pacific borders
  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, -Infinity);
    dfs(rows - 1, c, atl, -Infinity);
  }

  // Start DFS from Atlantic borders
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, -Infinity);
    dfs(r, cols - 1, atl, -Infinity);
  }

  // Cells reachable by both oceans
  const result = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pac[r][c] && atl[r][c]) {
        result.push([r, c]);
      }
    }
  }

  return result;
}
