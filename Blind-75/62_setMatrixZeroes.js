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
