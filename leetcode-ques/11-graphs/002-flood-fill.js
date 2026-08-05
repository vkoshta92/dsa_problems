/* Flood Fill | Easy
 * Company: Amazon, Google, Microsoft, Meta, Apple
 * Hinglish: Starting pixel ka original color save karo. DFS me same-color
 * neighbors ko new color karo; already-new color par infinite recursion avoid hoti hai.
 */
function floodFill(image, startRow, startColumn, color) {
  const original = image[startRow][startColumn];
  if (original === color) return image;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  function fill(row, column) {
    if (row < 0 || row >= image.length || column < 0 || column >= image[0].length || image[row][column] !== original) return;
    image[row][column] = color;
    for (const [rowStep, columnStep] of directions) fill(row + rowStep, column + columnStep);
  }
  fill(startRow, startColumn);
  return image;
}

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));
// Time: O(rows * columns), Space: O(rows * columns) worst-case recursion.
module.exports = { floodFill };
