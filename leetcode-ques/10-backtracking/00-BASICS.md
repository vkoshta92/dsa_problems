# Backtracking - Basics

## Backtracking Kya Hai?
Recursion ka ek pattern jisme har choice "explore" karte hain, phir undo karke
next choice try karte hain. Jaise maze mein jaana - ek rasta try karo, fail
ho to wapas aao aur doosra rasta try karo.

## Template

```javascript
function backtrack(path, choices) {
  if (END_CONDITION) {
    result.push(path.slice()); // snapshot
    return;
  }
  for (const choice of choices) {
    // 1. CHOOSE: choice add karo
    path.push(choice);
    // 2. EXPLORE: recursively aage jao
    backtrack(path, nextChoices);
    // 3. UNDO: choice remove karo (backtrack)
    path.pop();
  }
}
```

## Three Steps (Choose, Explore, Undo)

```
[1, 2, 3] ke permutations:
                    []
            /       |       \
          [1]      [2]      [3]
         /   \    /   \    /   \
       [1,2] [1,3] [2,1] [2,3] [3,1] [3,2]
       /      \
    [1,2,3] [1,3,2]
```

## Common Patterns

### 1. Subsets
```javascript
function subsets(nums) {
  const result = [];
  function backtrack(start, path) {
    result.push(path.slice());
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }
  backtrack(0, []);
  return result;
}
```

### 2. Permutations
```javascript
function permute(nums) {
  const result = [];
  const used = new Set();
  function backtrack(path) {
    if (path.length === nums.length) { result.push(path.slice()); return; }
    for (let i = 0; i < nums.length; i++) {
      if (used.has(i)) continue;
      used.add(i);
      path.push(nums[i]);
      backtrack(path);
      path.pop();
      used.delete(i);
    }
  }
  backtrack([]);
  return result;
}
```

### 3. Combination Sum (reuse allowed)
```javascript
function combinationSum(candidates, target) {
  const result = [];
  function backtrack(start, path, remaining) {
    if (remaining === 0) { result.push(path.slice()); return; }
    if (remaining < 0) return;
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, remaining - candidates[i]); // i (not i+1) for reuse
      path.pop();
    }
  }
  backtrack(0, [], target);
  return result;
}
```

### 4. N-Queens
```javascript
function solveNQueens(n) {
  const board = Array(n).fill(null).map(() => Array(n).fill('.'));
  const result = [];
  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
      if (col - (row-i) >= 0 && board[i][col-(row-i)] === 'Q') return false;
      if (col + (row-i) < n && board[i][col+(row-i)] === 'Q') return false;
    }
    return true;
  }
  function backtrack(row) {
    if (row === n) { result.push(board.map(r => r.join(''))); return; }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  }
  backtrack(0);
  return result;
}
```

## Backtracking vs Other Approaches

| When to Use | Approach |
|---|---|
| All subsets | Backtracking |
| All permutations | Backtracking |
| All combinations with constraint | Backtracking |
| N-Queens, Sudoku | Backtracking |
| Word search on grid | Backtracking |

## Interview Tips
- "All subsets", "all permutations", "all combinations" = Backtracking
- Path copy karo `path.slice()` before pushing to result
- Hamesha undo karo (path.pop()) recursion ke baad
- Used set/index array se duplicate avoid karo
- Pruning: `if (remaining < 0) return` se unnecessary calls bachao
- Time complexity usually O(2^n) ya O(n!)
