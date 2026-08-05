# Greedy - Basics

## Greedy Kya Hai?
Har step par locally optimal choice karo (sabse achha lagta hai), hope karo
global optimal mil jayega. Proof chahiye ki greedy kaam karti hai!

## Greedy vs DP

| Feature | Greedy | DP |
|---|---|---|
| Approach | Local optimal choice | Explore all options |
| Time | Usually O(n log n) | Usually O(n^2) or O(n * W) |
| Proof | Invariant/proof needed | Correct by definition |
| When to use | Greedy choice property holds | Overlapping subproblems |

## Greedy Choice Property
Agar optimal solution mein greedy choice include ho sakti hai, to greedy kaam karega.

```
Example: Fractional Knapsack
- Value/Weight ratio se sort karo
- Sabse zyada ratio wala item pehle lo
- Greedy works because partial items allowed hain
```

## Common Greedy Patterns

### 1. Sort and Scan
```javascript
// Meeting Rooms II, Non-overlapping Intervals
intervals.sort((a, b) => a[1] - b[1]); // sort by end
let count = 0, end = 0;
for (const [s, e] of intervals) {
  if (s >= end) { count++; end = e; }
}
```

### 2. Jump Game Pattern
```javascript
// Can you reach the end?
let maxReach = 0;
for (let i = 0; i < n; i++) {
  if (i > maxReach) return false;
  maxReach = Math.max(maxReach, i + nums[i]);
}
return true;
```

### 3. Gas Station
```javascript
// Circular tour - maintain tank, if negative restart
let totalTank = 0, currentTank = 0, start = 0;
for (let i = 0; i < n; i++) {
  const diff = gas[i] - cost[i];
  totalTank += diff;
  currentTank += diff;
  if (currentTank < 0) { start = i + 1; currentTank = 0; }
}
return totalTank >= 0 ? start : -1;
```

### 4. Candy (Two-Pass)
```javascript
// Left to right, then right to left
const candy = new Array(n).fill(1);
for (let i = 1; i < n; i++) {
  if (ratings[i] > ratings[i-1]) candy[i] = candy[i-1] + 1;
}
for (let i = n-2; i >= 0; i--) {
  if (ratings[i] > ratings[i+1]) candy[i] = Math.max(candy[i], candy[i+1] + 1);
}
```

## When to Use?
- "Maximum/Minimum profit" with local choice
- "Can you reach end" (Jump Game)
- "Minimum removals" (Non-overlapping intervals)
- "Task scheduling" (Task Scheduler)
- Interval problems (sort by end time)

## Interview Tips
- Greedy prove karna hota hai - invariant batao
- Sort first, phir scan karo
- "Proof by contradiction" se samjhao ki greedy kyun kaam karti hai
- Agar greedy nahi karti to DP socho
- Edge cases: single element, all same, already sorted
