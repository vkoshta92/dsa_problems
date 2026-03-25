/**
 * ============================================================================
 * PROBLEM: Set Matrix Zeroes
 * ============================================================================
 * Given an m x n matrix, if an element is 0, set its entire row and
 * column to 0. Must be done in-place.
 * 
 * ============================================================================
 * APPROACH: Use First Row and Column as Markers
 * ============================================================================
 * Logic:
 * 1. Use first row and first column as marker arrays
 * 2. First, check if first row/column need to be zeroed
 * 3. For other cells, mark row/column header if cell is 0
 * 4. Second pass: zero cells based on markers
 * 5. Finally, zero first row/column if needed
 * 
 * Why This Works:
 * - Instead of extra arrays, use the matrix itself
 * - matrix[i][0] = 0 means row i should be zeroed
 * - matrix[0][j] = 0 means column j should be zeroed
 * - Special handling needed for first row/column
 * 
 * Example:
 * Original:        After marking:
 * [1, 1, 1]       [1, 0, 1]
 * [1, 0, 1]   →   [0, 0, 0]
 * [1, 1, 1]       [1, 0, 1]
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(m * n)
 * - Multiple passes through matrix
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only two boolean variables for first row/column
 * ============================================================================
 */

function setZeroes(matrix) {
  let firstRowZero = false;
  let firstColZero = false;

  const rows = matrix.length;
  const cols = matrix[0].length;

  // Check if first column has zero
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) firstColZero = true;
  }

  // Check if first row has zero
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) firstRowZero = true;
  }

  // Use first row & column as markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Set cells to zero using markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Handle first column
  if (firstColZero) {
    for (let i = 0; i < rows; i++) matrix[i][0] = 0;
  }

  // Handle first row
  if (firstRowZero) {
    for (let j = 0; j < cols; j++) matrix[0][j] = 0;
  }
}
