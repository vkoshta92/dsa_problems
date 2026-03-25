/**
 * ============================================================================
 * PROBLEM: Spiral Matrix
 * ============================================================================
 * Given an m x n matrix, return all elements in spiral order.
 * Spiral: left→right, top→bottom, right→left, bottom→top, repeat.
 * 
 * ============================================================================
 * APPROACH: Four Boundaries
 * ============================================================================
 * Logic:
 * 1. Maintain four boundaries: top, bottom, left, right
 * 2. Traverse in spiral order, updating boundaries after each direction
 * 3. Stop when boundaries cross
 * 
 * Spiral Order:
 * 1. Left to Right: along top row, then top++
 * 2. Top to Bottom: along right column, then right--
 * 3. Right to Left: along bottom row (if top <= bottom), then bottom--
 * 4. Bottom to Top: along left column (if left <= right), then left++
 * 
 * Example: [[1,2,3], [4,5,6], [7,8,9]]
 * - Left→Right: 1, 2, 3 (top: 0→1)
 * - Top→Bottom: 6, 9 (right: 2→1)
 * - Right→Left: 8, 7 (bottom: 2→1)
 * - Bottom→Top: 4 (left: 0→1)
 * - Left→Right: 5 (top: 1, bottom: 1)
 * - Result: [1,2,3,6,9,8,7,4,5]
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(m * n)
 * - Visit each cell exactly once
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only boundary pointers (excluding output)
 * ============================================================================
 */

function spiralOrder(matrix) {
  const result = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // left → right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // top → bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // right → left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // bottom → top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}

// Test
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
