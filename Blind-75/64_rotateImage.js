/**
 * ============================================================================
 * PROBLEM: Rotate Image
 * ============================================================================
 * Given an n x n matrix, rotate it by 90 degrees clockwise in-place.
 * 
 * ============================================================================
 * APPROACH: Transpose + Reverse Rows
 * ============================================================================
 * Logic:
 * 1. Transpose the matrix (swap rows and columns)
 * 2. Reverse each row
 * 
 * Why This Works:
 * - Transpose: rows become columns
 * - Row reversal: columns are in correct order for rotation
 * - Together: 90° clockwise rotation
 * 
 * Rotation Pattern:
 * Original:  After Transpose:  After Reverse:
 * [1, 2, 3]  [1, 4, 7]        [7, 4, 1]
 * [4, 5, 6]  [2, 5, 8]        [8, 5, 2]
 * [7, 8, 9]  [3, 6, 9]        [9, 6, 3]
 * 
 * Transpose:
 * - Swap matrix[i][j] with matrix[j][i]
 * - Only swap upper triangle (j >= i) to avoid double swapping
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n²)
 * - Transpose: O(n²)
 * - Reverse rows: O(n²)
 * 
 * SPACE COMPLEXITY: O(1)
 * - In-place operations
 * ============================================================================
 */

function rotate(matrix) {
  const n = matrix.length;

  // Step 1: Transpose matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] =
        [matrix[j][i], matrix[i][j]];
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}
