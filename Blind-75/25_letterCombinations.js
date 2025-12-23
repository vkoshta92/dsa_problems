function letterCombinations(digits) {
  if (digits.length === 0) return [];

  const map = {
    2: "abc", 3: "def", 4: "ghi",
    5: "jkl", 6: "mno", 7: "pqrs",
    8: "tuv", 9: "wxyz"
  };

  const result = [];

  function backtrack(index, path) {
    // If path length equals digits length
    if (index === digits.length) {
      result.push(path);
      return;
    }

    // Get letters for current digit
    for (let char of map[digits[index]]) {
      // Choose character
      backtrack(index + 1, path + char);
    }
  }

  backtrack(0, "");
  return result;
}

// Test
console.log(letterCombinations("23"));
