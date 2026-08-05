/* Problem: Number of Islands | Difficulty: Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Count connected groups of '1' in a grid; adjacent means up/down/left/right.
 * Hinglish: Unvisited land mile to ek island count karo, then DFS se uske
 * saare connected land cells ko water mark kar do.
 */
function numIslands(grid) {
  if (grid.length === 0) return 0;
  let islands = 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  function visit(row, column) {
    if (row < 0 || row >= grid.length || column < 0 || column >= grid[0].length || grid[row][column] !== "1") return;
    grid[row][column] = "0";
    for (const [rowStep, columnStep] of directions) visit(row + rowStep, column + columnStep);
  }

  for (let row = 0; row < grid.length; row += 1) {
    for (let column = 0; column < grid[0].length; column += 1) {
      if (grid[row][column] === "1") { islands += 1; visit(row, column); }
    }
  }
  return islands;
}

console.log(numIslands([["1", "1", "0"], ["0", "1", "0"], ["0", "0", "1"]])); // 2
// Time: O(rows * columns), Space: O(rows * columns) worst-case recursion.

module.exports = { numIslands };
