# FAANG SDE Interview Cheatsheet - Hinglish Quick Revision

> ⏱️ Last 30-minute revision before interview. Trust the patterns.

---

## Top 25 Most Asked Questions (100% Guaranteed in any FAANG interview)

| # | Problem | Rating | Companies | Hinglish Approach |
|---|---------|--------|-----------|-------------------|
| 1 | **Two Sum** | ⭐⭐⭐ | All companies | Map me `target - nums[i]` check karo. Ek pass me hi complement dhundo, index return karo. |
| 2 | **LRU Cache** | ⭐⭐⭐ | Amazon, Google, Meta, Microsoft, Apple | Doubly linked list + HashMap combo. Get/Put O(1) - dummy head/tail se easy eviction. |
| 3 | **Valid Parentheses** | ⭐⭐⭐ | All companies | Stack use karo. Opening push, closing pe pop + match check. End me stack empty hona chahiye. |
| 4 | **3Sum** | ⭐⭐⭐ | Google, Meta, Amazon, Microsoft | Sort karo, ek fix karo, baaki do pe two-pointer. Duplicates skip karna mat bhoolna. |
| 5 | **Course Schedule** | ⭐⭐⭐ | Google, Amazon, Meta | Topological sort via BFS (Kahn's algo) ya DFS cycle detection. In-degree array + queue. |
| 6 | **Number of Islands** | ⭐⭐⭐ | All companies | Grid traversal DFS/BFS. '1' mila to count++ karo aur poora island flood-fill (mark visited). |
| 7 | **Binary Tree Level Order Traversal** | ⭐⭐⭐ | All companies | BFS with queue. Level-size track karo inner loop se, har level ka array alag push karo. |
| 8 | **Merge Intervals** | ⭐⭐⭐ | All companies | Start time pe sort karo. Ek-ek karke merge: prev.end >= curr.start to max end lelo. |
| 9 | **Lowest Common Ancestor** | ⭐⭐⭐ | Amazon, Google, Meta, Microsoft | Recursively left-right search. Dono non-null mile to current LCA hai, warna jo non-null ho return. |
| 10 | **Product of Array Except Self** | ⭐⭐⭐ | Amazon, Google, Meta, Apple | Left pass (prefix product) + Right pass (suffix product). O(n) time, O(1) extra space. |
| 11 | **Trapping Rain Water** | ⭐⭐⭐ | Google, Amazon, Meta, Microsoft | Two-pointer: leftMax, rightMax track karo. Chhoti side se paani calculate karte jao. |
| 12 | **Word Break** | ⭐⭐⭐ | Amazon, Google, Meta | DP array: dp[i] = kya s[0..i] break ho sakta hai. Har partition pe dictionary lookup karo. |
| 13 | **Longest Substring Without Repeating** | ⭐⭐⭐ | All companies | Sliding window + Set/Map. Duplicate aate hi left pointer shrink karo, maxLen update karte jao. |
| 14 | **Validate BST** | ⭐⭐⭐ | Amazon, Google, Meta, Microsoft | Recursive min-max bound check. Left subtree < root.val, Right subtree > root.val range maintain. |
| 15 | **Kth Largest Element** | ⭐⭐⭐ | All companies | Min-Heap of size k, ya QuickSelect O(n) average. Heap approach interview me easy explain. |
| 16 | **Clone Graph** | ⭐⭐⭐ | Google, Amazon, Meta | DFS/BFS with old→new node mapping via HashMap. Visited nodes reuse karo, deep copy banao. |
| 17 | **Subarray Sum Equals K** | ⭐⭐ | Amazon, Google, Meta | Running prefix sum + HashMap. `prefixSum - k` map me dhundho, count add karo. |
| 18 | **Coin Change** | ⭐⭐ | Amazon, Google | DP: dp[amount] = min coins. Har coin ke liye dp[i] = min(dp[i], 1 + dp[i - coin]). |
| 19 | **Search in Rotated Sorted Array** | ⭐⭐ | Amazon, Google, Microsoft | Modified binary search. Har step pe check middle sorted left ya right half me hai, target wahi shift. |
| 20 | **Merge K Sorted Lists** | ⭐⭐ | Amazon, Google, Meta | Min-Heap pe saare list heads push. Har pop ke baad usi list ka next push. O(N log K). |
| 21 | **Minimum Window Substring** | ⭐⭐ | Meta, Amazon, Google | Sliding window + frequency maps. `have == need` condition tak expand, phir contract karo. |
| 22 | **Rotting Oranges** | ⭐⭐ | Amazon, Google, Meta | Multi-source BFS. Saare rotten oranges queue me daal ke BFS chalao, time track via level count. |
| 23 | **Longest Consecutive Sequence** | ⭐⭐ | Google, Amazon | HashSet me saare numbers. Sirf sequence-start (num-1 nahi hai) pe hi iterate karo, length count. |
| 24 | **Word Ladder** | ⭐⭐ | Google, Amazon, Meta | BFS on string transformations. Har character replace karo a-z, dictionary me exist karta hai to push. |
| 25 | **Median of Two Sorted Arrays** | ⭐⭐ | Google, Amazon, Microsoft | Binary search on chhoti array. Partition karo dono arrays me jaise left half ≤ right half. O(log(min(m,n))). |

> 🎯 **If you solve only these 25 problems thoroughly, you can crack 90% of FAANG coding rounds.**

---

## Pattern Recognition Guide

### 30-Second Pattern Identification

| Keyword in Problem | Pattern to Use | Common Complexity |
|--------------------|----------------|-------------------|
| "Contiguous subarray" | **Sliding Window** or **Prefix Sum** | O(n) / O(n) |
| "All subsets / permutations" | **Backtracking** | O(n × 2^n) / O(n!) |
| "Shortest path" | **BFS** (unweighted) / **Dijkstra** (weighted) | O(V+E) / O((V+E) log V) |
| "Top K / Kth largest" | **Heap** (Priority Queue) | O(n log k) |
| "Pairs / triplets sum" | **Two Pointers** | O(n log n) |
| "Balanced parentheses" | **Stack** | O(n) |
| "Sorted array" | **Binary Search** or **Two Pointers** | O(log n) / O(n) |
| "Maximum / Minimum" | **DP** or **Greedy** | O(n) / O(n²) |
| "Cycle detection" | **Floyd's (slow-fast)** or **Union-Find** | O(n) / O(n · α(n)) |
| "Substring" | **Sliding Window** | O(n) |
| "Connected components" | **DFS / BFS** or **Union-Find** | O(V+E) |
| "Merge / Overlap" | **Sort + Scan** | O(n log n) |
| "Longest / Count ways" | **Dynamic Programming** | O(n²) / O(n) |
| "Parent / Child in Tree" | **Recursion (DFS)** | O(n) |
| "Exists / Find any" | **HashSet / HashMap** | O(n) |

### Pattern → Go-To Code Skeleton

```
Sliding Window:  while (right < n)
Two Pointers:    while (left < right)
Backtracking:    for each choice → choose → recurse → undo
BFS:             queue = [start]; while queue: level by level
DFS (grid):      dfs(r, c) → check bounds → mark visited → 4-direction
Binary Search:   while (left <= right) { mid = left + (right-left)/2 }
DP:              dp[0] = base → for i in 1..n → dp[i] = min/max(dp[i-x] + ...)
Heap:            MinHeap of size k → push all → pop when > k
Union-Find:      find(x) with path compression + union by rank
```

---

## Time Complexity Cheatsheet

### Data Structure Operations (Best / Average / Worst)

| Data Structure | Access | Search | Insert | Delete | Space |
|---------------|--------|--------|--------|--------|-------|
| **Array** | O(1) | O(n) | O(n) | O(n) | O(n) |
| **Linked List** | O(n) | O(n) | O(1) | O(1) | O(n) |
| **Stack / Queue** | O(n) | O(n) | O(1) | O(1) | O(n) |
| **HashSet / HashMap** | — | O(1) | O(1) | O(1) | O(n) |
| **BST** | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| **Heap (Priority Queue)** | O(1)* | O(n) | O(log n) | O(log n) | O(n) |
| **Trie** | — | O(k) | O(k) | O(k) | O(n·k) |
| **Disjoint Set (Union-Find)** | — | O(α(n)) | O(α(n)) | — | O(n) |

> * Heap `peek()` is O(1), not arbitrary access

### Common Algorithms (Average / Worst)

| Algorithm | Time (Avg) | Time (Worst) | Space |
|-----------|-----------|-------------|-------|
| **BFS / DFS (Graph)** | O(V + E) | O(V + E) | O(V) |
| **Binary Search** | O(log n) | O(log n) | O(1) |
| **Merge Sort** | O(n log n) | O(n log n) | O(n) |
| **Quick Sort** | O(n log n) | O(n²) | O(log n) |
| **Heap Sort** | O(n log n) | O(n log n) | O(1) |
| **Dijkstra** | O((V+E) log V) | O((V+E) log V) | O(V) |
| **Topological Sort** | O(V + E) | O(V + E) | O(V) |
| **Kadane's (max subarray)** | O(n) | O(n) | O(1) |
| **Floyd-Warshall** | O(V³) | O(V³) | O(V²) |
| **Bellman-Ford** | O(V·E) | O(V·E) | O(V) |
| **Kruskal's MST** | O(E log E) | O(E log E) | O(V) |
| **Subsets** | O(n × 2^n) | O(n × 2^n) | O(n) |
| **Permutations** | O(n × n!) | O(n × n!) | O(n) |

### Time Limit vs Complexity (1 second ≈ 10^8 operations)

```
n ≤ 10       → O(n!)    Bitmask DP, brute permutations
n ≤ 20       → O(2^n)   Subsets, recursion tree
n ≤ 100      → O(n³)    Floyd-Warshall, 3D DP
n ≤ 1,000    → O(n²)    2D DP, two loops
n ≤ 10⁵      → O(n log n)  Sorting, heap, binary search
n ≤ 10⁶,⁷   → O(n)     Sliding window, two-pointer, prefix sum
```

---

## JavaScript Interview Tips

### Must-Know Syntax

```js
// 1. Map (Dictionary) — O(1) insertion/lookup
const map = new Map();
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);
map.size;
// for (const [k, v] of map)

// 2. Set — O(1) add/has/delete
const set = new Set();
set.add(val);
set.has(val);
set.delete(val);
set.size;

// 3. Array Methods (know these cold)
arr.sort((a, b) => a - b);           // numeric sort (DEFAULT IS STRING-LEX!)
arr.splice(start, deleteCount, ...items); // mutates
arr.slice(start, end);               // does NOT mutate
arr.fill(value, start, end);
arr.unshift() / arr.shift();         // O(n) — avoid in loops
arr.push() / arr.pop();              // O(1) amortized

// 4. Queue using array (for BFS) — use push() + shift()
// BUT shift() is O(n), so for interviews, build a real queue:
class Queue {
  constructor() { this.items = {}; this.head = 0; this.tail = 0; }
  enqueue(v) { this.items[this.tail++] = v; }
  dequeue() { 
    if (this.head === this.tail) return null;
    const val = this.items[this.head];
    delete this.items[this.head++];
    return val;
  }
  get size() { return this.tail - this.head; }
  isEmpty() { return this.size === 0; }
}

// 5. Priority Queue (MinHeap template) — MUST implement yourself
class MinHeap {
  constructor(compare = (a, b) => a - b) {
    this.heap = [];
    this.compare = compare;
  }
  push(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }
  pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._sinkDown(0);
    }
    return top;
  }
  peek() { return this.heap[0]; }
  size() { return this.heap.length; }
  _bubbleUp(idx) {
    while (idx > 0) {
      const parent = (idx - 1) >> 1;
      if (this.compare(this.heap[parent], this.heap[idx]) <= 0) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }
  _sinkDown(idx) {
    const n = this.heap.length;
    while (true) {
      let smallest = idx;
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;
      if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0) smallest = left;
      if (right < n && this.compare(this.heap[right], this.heap[smallest]) < 0) smallest = right;
      if (smallest === idx) break;
      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }
}

// Convert to MaxHeap: new MinHeap((a, b) => b - a)

// 6. String / Char tricks
'A'.charCodeAt(0);     // 65
String.fromCharCode(65); // 'A'
str.split('');
arr.join('');

// 7. Object as hashmap (alternative to Map — save typing time)
const obj = {};
obj[key] = value;
// Use Map when keys can be objects or primitive 0 vs "0" matters
```

### Common Gotchas

```
❌ arr.sort() → sorts alphabetically! Use arr.sort((a, b) => a - b) for numbers
❌ NaN !== NaN → use Number.isNaN()
❌ 0.1 + 0.2 !== 0.3 → don't rely on floating point equality
❌ null is object (typeof null === 'object')
❌ const is block-scoped; var is function-scoped → use let/const only
❌ for...in iterates keys; for...of iterates values → use for...of on arrays
❌ arr.splice(i, 1) mutates; arr.slice() copies
❌ Infinity and -Infinity are valid values — great for DP/min-max init
❌ Number.MIN_VALUE is NOT the most negative number (use -Infinity)
❌ parseInt('08') → specify radix: parseInt('08', 10)
```

### BFS Quick Template

```js
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  let level = 0;

  while (queue.length) {
    const size = queue.length;           // level-size tracking
    for (let i = 0; i < size; i++) {
      const node = queue.shift();        // dequeue
      // process node here

      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    level++;
  }
  return level;
}
```

### DFS Quick Template (Recursive)

```js
function dfs(root) {
  if (!root) return;
  // pre-order: process root here
  dfs(root.left);
  // in-order: process root here
  dfs(root.right);
  // post-order: process root here
}

// Grid DFS (4-directional)
function gridDFS(grid, r, c, visited) {
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return;
  if (visited.has(`${r},${c}`) || grid[r][c] !== target) return;
  visited.add(`${r},${c}`);
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  for (const [dr, dc] of dirs) gridDFS(grid, r + dr, c + dc, visited);
}
```

---

## Interview Day Checklist

### Before the Interview

```
- [ ] Laptop charged + charger handy
- [ ] Good WiFi or wired ethernet
- [ ] Quiet room, good lighting, headphones
- [ ] Water bottle nearby
- [ ] Phone on silent/DND
- [ ] Editor/IDE open and ready (no auto-complete dependency!)
- [ ] Cheatsheet printed or minimized on second screen
```

### During Each Round

#### Opening (First 2 Minutes)
```
- [ ] Smile, introduce yourself clearly
- [ ] Listen to the problem carefully — DON'T interrupt
- [ ] Repeat the problem back in your own words
- [ ] Ask clarifying questions:
      "Input size / constraints?"
      "Sorted or unsorted?"
      "Duplicates possible?"
      "What if input is empty / null?"
      "Return value or modify in place?"
      "Case sensitivity?"
      "Only integers / positive numbers?"
```

#### Think-Out-Loud (Next 3-5 Minutes)
```
- [ ] EXPLAIN your thought process — interviewer can't guess
- [ ] Start with brute force (mention complexity)
- [ ] "Can we do better?" — think of patterns
- [ ] State your approach BEFORE coding
- [ ] Edge cases: empty array, single element, duplicates, negative numbers
- [ ] Write time/space complexity on the screen
```

#### Coding (Next 15-20 Minutes)
```
- [ ] Name variables meaningfully (not i, j, x everywhere)
- [ ] Write clean, readable code
- [ ] Talk while typing — explain each step
- [ ] DON'T be silent for more than 30 seconds
- [ ] If stuck → "Let me think about this part out loud..."
- [ ] Modularize — write helper functions if needed
```

#### Testing (Last 5 Minutes)
```
- [ ] Walk through with a simple example
- [ ] Check edge cases: [], [1], null, negative numbers, large input
- [ ] Dry-run on common test case
- [ ] "Let me trace the code with this example..."
- [ ] If bug found → acknowledge and fix calmly
```

### Edge Cases to ALWAYS Check

```
1. Empty input: [] / "" / null / undefined
2. Single element: [1] / "a"
3. Duplicates: [1,1,1] / [2,2,3,3]
4. Negative numbers: [-1,-2,-3]
5. Zero: 0 in arrays, 0 as sum target
6. All same: [5,5,5,5]
7. Already sorted / reverse sorted
8. Boundary: INT_MAX, INT_MIN in constraints
9. Large input: 10⁵ elements (no O(n²) allowed)
10. Cycles in graph/tree if applicable
```

### Communication Golden Rules

```
✅ "Let me think about that for a moment..."
✅ "This is how I'd approach it. Does that make sense?"
✅ "The brute force would be O(n²). Can we optimize?"
✅ "I see a potential edge case here — let me handle that."
✅ "Before I code, here's my plan..."

❌ Silent coding for 20 minutes
❌ "I don't know" without attempting
❌ Ignoring interviewer hints
❌ Arguing about approach
❌ Writing code without explaining
```

### When You're Stuck

```
1. "Let me vocalize what I'm thinking..."
2. Identify the bottleneck → which operation is slow?
3. What data structure makes that operation faster?
4. Can I sort first? Can I use a map/set? Can I use two pointers?
5. Draw a small example and trace manually
6. "Is there a variation of [BFS/DFS/DP/Sliding Window] that could work here?"
7. Ask for a hint — "Am I on the right track?"
```

### Post-Interview (After "Do you have questions for me?")

```
ASK 2-3 thoughtful questions:
1. "What does a typical day look like for an engineer on your team?"
2. "What's the biggest challenge your team is facing right now?"
3. "How do you measure success for someone in this role?"
4. "What's the team's tech stack and engineering culture like?"

AVOID: Salary, vacation, remote-work policy (leave for HR round)
```

---

## Company-Specific Tips

### 🟡 Amazon
```
- MUST study Leadership Principles (LPs):
  Customer Obsession, Ownership, Bias for Action, Dive Deep,
  Deliver Results, Insist on Highest Standards, Have Backbone,
  Learn & Be Curious, Hire & Develop the Best, Frugality,
  Earn Trust, Think Big, Disagree & Commit, Strive to be Earth's Best Employer

- EVERY behavioral question: STAR format + map to an LP
  "Tell me about a time you..." → answer = Situation → Task → Action → Result

- Coding: Medium difficulty, bar-raiser round is tough
- Expect: Design Twitter, LRU Cache, 2D grid problems
- Favorite patterns: BFS/DFS, Topological sort, Heap, LinkedList
- "Dive Deep" → always volunteer to run test cases
```

### 🔴 Google
```
- Heavy focus on problem-solving DEPTH:
  → Start with brute force
  → Optimize step by step
  → Analyze every optimization's trade-off
  → Big-O analysis for BOTH time and space

- Code cleanliness matters but less than thinking process
- Expect: Hard problems, graphs, DP, system design
- Google-specific: "Googleyness" behavioral round
- Favorite problems: Word Ladder, Median of Sorted Arrays, 3Sum
- TIP: Talk. Everything. Out loud. They want to see your brain work.
```

### 🔵 Meta
```
- SPEED is critical → 2 problems in 45 minutes (15 min each + buffer)
- Clean code, no bugs on first pass is expected
- Heavy focus on: Arrays, Strings, Trees, Graphs
- Less DP, more fresh/straightforward problems
- Favorite problems: Valid Palindrome, Subarray Sum, Kth Largest, BST validation
- Must communicate while coding — they hire engineers, not coders
- TIP: Don't over-optimize too early. Working solution → then optimize.
```

### 🟢 Microsoft
```
- System design is common (even for SDE-2)
- Coding + Design split rounds
- Grow mindset questions: "How do you keep learning?"
- Favorite problems: Binary Tree, Sorting, Design problems
- Array/String problem almost guaranteed
- Collaboration focus: "How would you work with PM/Designer/QA?"
- TIP: Show interest in Microsoft products & ecosystem
```

### 🟣 Apple
```
- Product thinking is unique to Apple interviews
- "How would you build this feature for iOS/macOS?"
- Framework-specific questions (UIKit, SwiftUI if iOS role)
- Heavy on: System design + domain expertise
- Coding: Practical problems, not abstract algorithms
- Favorite patterns: Efficient data structures, scale thinking
- TIP: Know Apple products. Ask about the team's product deeply.
```

---

## Quick Reference — One-Liner Hinglish Summaries

| Pattern | 5-Word Summary |
|---------|---------------|
| Sliding Window | Expand right, shrink left conditionally |
| Two Pointers | Sort + left right converge |
| BFS | Queue, level-by-level, visited set |
| DFS | Recursion stack, mark visited, backtrack |
| Binary Search | Sorted array me mid se half eliminate |
| DP | Sub-problem ka answer store karo reuse karo |
| Backtracking | Choose → Recurse → Undo |
| Heap | K elements maintain, min/max top pe |
| Stack | LIFO — pairs, parentheses, monotonic |
| Trie | Prefix tree, O(word-length) search |
| Union-Find | Find parent with compression, union by rank |
| Topological Sort | In-degree zero walo se BFS start karo |

---

> 🔥 **Last Minute Tip:** Agar kuch nahi aata, to brute force batao, complexity batao, phir socho "kaunsa data structure is ek operation ko fast karega?" — 80% problems HashMap/Set/Stack/Queue/Heap se solve hoti hain.

> 💪 **You've prepared. Trust yourself. Go crush it!**
