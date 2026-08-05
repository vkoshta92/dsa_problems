# Quick Revision Sheet - All Topics

## Arrays & HashMap

**Pattern 1: Frequency Counter**
```
Map ya Object se count karo
O(n) time, O(n) space
```

**Pattern 2: Two Sum Template**
```
Map mein complement dhundho
O(n) time
```

**Pattern 3: Prefix Sum**
```
Cumulative sum array banao
Subarray sum = prefix[j+1] - prefix[i]
O(n) time
```

**Must Know:**
- Kadane's Algorithm: `currentSum = Math.max(num, currentSum + num)`
- Majority Element: Boyer-Moore voting
- Sort + Two Pointer for pair problems

---

## Two Pointers

**Opposite Direction:**
```
left = 0, right = n-1
while (left < right) { move based on condition }
```

**Same Direction (Slow-Fast):**
```
slow = 0; for fast: if condition slow++
```

**Key Insight:** Chhota height wala pointer move karo (Container, Rain Water)

---

## Sliding Window

**Fixed:**
```
window sum of first k elements, then slide: add new, remove old
```

**Variable:**
```
right expand karo, invalid ho to left shrink karo
```

**Key:** Window invalid hone ka condition identify karo

---

## Stack & Queue

**Monotonic Stack (Next Greater/Smaller):**
```
Stack mein indices, jab bada element aaye to pop
```

**Balanced Parentheses:**
```
Opening = push, Closing = pop and check match
```

**BFS:** Queue for level-order traversal

---

## Binary Search

**Template:**
```
while (left <= right) { // inclusive
  mid = floor((left+right)/2)
  if (match) return
  if (too small) left = mid+1
  else right = mid-1
}
```

**Answer Space:** `while (left < right)` with `right = mid` or `left = mid+1`

---

## Linked List

**Dummy Node:** Head delete/merge problems mein simplify

**Slow-Fast:**
- Middle: fast=fast.next.next, slow=slow.next
- Cycle: slow==fast means cycle

**Reverse:**
```
prev=null, while(curr) { next=curr.next; curr.next=prev; prev=curr; curr=next; }
```

---

## Trees

**DFS (Recursion):**
```
if (!root) return base;
left = solve(root.left)
right = solve(root.right)
return combine
```

**BFS (Queue):**
```
queue=[root]; while(queue) { size loop; process; add children }
```

**BST:** Inorder = sorted, left < root < right

---

## Heap

**Top K:** Min-heap of size k, larger elements pop karo

**Kth Largest:** Min-heap size k, root = kth largest

**Two Heaps (Median):** Max-heap left, min-heap right

---

## Intervals

**Merge:** Sort by start, overlap check: `curr[0] <= last[1]`

**Non-overlapping:** Sort by end, greedy pick

**Sweep Line:** Events [start, +1], [end, -1], sort and scan

---

## Backtracking

**Template:**
```
path.push(choice)    // CHOOSE
explore()            // EXPLORE
path.pop()           // UNDO
```

**Permutations:** Used set for tracking
**Subsets:** Start index to avoid duplicates
**N-Queens:** Row by row, check diagonals

---

## Graphs

**BFS:** Queue, shortest path unweighted
**DFS:** Stack/Recursion, cycle detection
**Topological Sort:** In-degree based (Kahn's)
**Union-Find:** Cycle detection, connected components
**Dijkstra:** Weighted shortest path

---

## Dynamic Programming

**State:** `dp[i]` = answer for first i elements

**Fibonacci Style:** `dp[i] = dp[i-1] + dp[i-2]`

**0/1 Knapsack:** Reverse loop for weights

**LCS:** `if match dp[i][j] = dp[i-1][j-1]+1 else max`

**Space Optimization:** Sirf last 2 states track karo

---

## Greedy

**Sort + Scan:** Sort by start/end, greedy pick

**Jump Game:** `maxReach = max(maxReach, i + nums[i])`

**Gas Station:** `totalTank >= 0` means possible

**Key:** Prove greedy choice property

---

## Tries & Design

**Trie:** Insert O(L), Search O(L)

**LRU Cache:** HashMap + DLL, O(1) get/put

**Randomized Set:** Array + HashMap, swap with last

**Design:** Pehle API define karo, phir data structures choose karo

---

## Interview Day Checklist

1. **Edge cases:** Empty, single element, all same, duplicates
2. **Complexity:** Time aur space dono batao
3. **Brute force pehle:** Phir optimize karo
4. **Dry run:** Example se trace karo
5. **Test:** 2-3 test cases chalao
6. **Edge cases:** Overflow, negative, zero
