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
