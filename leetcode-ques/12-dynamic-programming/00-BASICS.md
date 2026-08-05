# Dynamic Programming - Basics

## DP Kya Hai?
Recursion + Memoization = DP. Jab recursion mein same subproblems bar bar
solve hote hon to unhe store karlo (memoize) ya bottom-up se solve karo.

## Two Approaches

### 1. Top-Down (Memoization) - Recursion + Cache
```javascript
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
```

### 2. Bottom-Up (Tabulation) - Iterative + Array
```javascript
function fib(n) {
  if (n <= 1) return n;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0; dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
```

### 3. Space Optimized
```javascript
function fib(n) {
  if (n <= 1) return n;
  let twoBack = 0, oneBack = 1;
  for (let i = 2; i <= n; i++) {
    const current = oneBack + twoBack;
    twoBack = oneBack;
    oneBack = current;
  }
  return oneBack;
}
```

## DP Steps (Template)

```
1. STATE: dp[i] ya dp[i][j] kya represent karta hai?
2. BASE CASE: dp[0], dp[1] kya hoga?
3. TRANSITION: dp[i] previous states se kaise aayega?
4. ORDER: Chhote se bada compute karo
5. ANSWER: Final answer kahan se aayega?
```

## 5 Classic DP Patterns

### 1. Fibonacci Style
```javascript
// dp[i] = dp[i-1] + dp[i-2]
// Climbing Stairs, House Robber, Decode Ways
dp[0] = base0; dp[1] = base1;
for (let i = 2; i <= n; i++) {
  dp[i] = dp[i-1] + dp[i-2]; // or some combination
}
```

### 2. Knapsack (0/1)
```javascript
// N items, capacity W. Har item ek baar.
for (let i = 0; i < n; i++) {
  for (let w = capacity; w >= weights[i]; w--) { // reverse!
    dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
  }
}
```

### 3. Knapsack (Unbounded)
```javascript
// Items unlimited times use kar sakte ho
for (let i = 0; i < n; i++) {
  for (let w = weights[i]; w <= capacity; w++) { // forward!
    dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
  }
}
```

### 4. Longest Common Subsequence (2D)
```javascript
// dp[i][j] = LCS of s1[0..i-1] and s2[0..j-1]
for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= n; j++) {
    if (s1[i-1] === s2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
    else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
  }
}
```

### 5. Interval DP
```javascript
// dp[i][j] = answer for range [i..j]
for (let len = 1; len <= n; len++) {
  for (let i = 0; i <= n - len; i++) {
    const j = i + len - 1;
    for (let k = i; k < j; k++) {
      dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k+1][j] + cost);
    }
  }
}
```

## When to Use DP?

| Keyword | Pattern |
|---|---|
| "Maximum/Minimum" | DP |
| "Count ways" | DP |
| "Is it possible" | DP |
| "Optimal" | DP |
| Overlapping subproblems | DP |
| Optimal substructure | DP |

## Interview Tips
- Pehle recursion likho, phir memoize karo
- State definition sabse important hai
- Space optimization tab karo jab dp[i] sirf piche ke states pe depend kare
- 2D DP tab jab do strings/arrays ke beech comparison ho
- Edge cases: n=0, n=1, empty input
- "Coin Change" = unbounded knapsack, "Partition Equal Subset" = 0/1 knapsack
