/**
 * ============================================================================
 * PROBLEM: Letter Combinations of a Phone Number
 * ============================================================================
 * Given a string containing digits 2-9, return all possible letter 
 * combinations that the number could represent (like old phone keypad).
 * 2: abc, 3: def, 4: ghi, 5: jkl, 6: mno, 7: pqrs, 8: tuv, 9: wxyz
 * 
 * ============================================================================
 * APPROACH: Backtracking
 * ============================================================================
 * Logic:
 * 1. Map each digit to its corresponding letters
 * 2. For each digit, try all possible letters
 * 3. Move to next digit and repeat
 * 4. When all digits processed, add combination to result
 * 
 * Key Insight:
 * - This is like generating permutations with constraints
 * - Each position has limited choices (based on digit)
 * - Total combinations = product of choices per digit
 * 
 * Example: "23"
 * - Digit 2: can choose a, b, or c
 * - Digit 3: can choose d, e, or f
 * - All combinations: ad, ae, af, bd, be, bf, cd, ce, cf
 * 
 * Decision Tree:
 *              ""
 *           /   |   \
 *         "a"  "b"  "c"
 *        /|\   /|\   /|\
 *      ad ae af ... ... cf
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(4^n * n)
 * - n = number of digits
 * - Worst case: each digit has 4 letters (7 and 9)
 * - Total combinations: 4^n
 * - Each combination takes O(n) to build
 * 
 * SPACE COMPLEXITY: O(n)
 * - Recursion depth = n
 * - Output space: O(4^n * n) for storing results
 * ============================================================================
 */

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
