# HARD Problems - FAANG Interview Guide

Total: 24 Hard problems. Ye tab karo jab Easy aur Medium mastered ho.

## Arrays (1)
- [First Missing Positive](./arrays/010-first-missing-positive.js) → Cyclic sort O(n)

## Two Pointers (1)
- [Trapping Rain Water](./two-pointers/004-trapping-rain-water.js) → min(maxLeft,maxRight)-height O(n)

## Sliding Window (2)
- [Minimum Window Substring](./sliding-window/006-minimum-window-substring.js) → Variable window + freq maps O(n+m)
- [Sliding Window Maximum](./sliding-window/007-sliding-window-maximum.js) → Monotonic deque O(n)

## Stack/Queue (2)
- [Largest Rectangle in Histogram](./stack-queue/006-largest-rectangle-histogram.js) → Monotonic stack O(n)
- [Basic Calculator](./stack-queue/007-basic-calculator.js) → Stack for parens O(n)

## Binary Search (1)
- [Median of Two Sorted Arrays](./binary-search/007-median-two-sorted.js) → Binary partition O(log min(m,n))

## Linked List (2)
- [Merge K Sorted Lists](./linked-list/007-merge-k-sorted-lists.js) → Min-heap O(N log k)
- [Reverse Nodes in k-Group](./linked-list/008-reverse-nodes-k-group.js) → Reverse k, recurse O(n)

## Trees (2)
- [Maximum Path Sum](./trees/007-binary-tree-max-path-sum.js) → node+max(l,0)+max(r,0) O(n)
- [Serialize Deserialize](./trees/008-serialize-deserialize.js) → Preorder N for null O(n)

## Heap (2)
- [Median from Data Stream](./heap/005-find-median-data-stream.js) → Two heaps O(log n)
- [Meeting Rooms III](./heap/006-meeting-rooms-iii.js) → Sort + available heap O(m log m)

## Intervals (1)
- [Min Interval to Include Query](./intervals/007-min-interval-include-query.js) → Sweep line + heap O(n log n)

## Backtracking (2)
- [N-Queens](./backtracking/007-n-queens.js) → Row by row, check diagonals O(n!)
- [Sudoku Solver](./backtracking/008-sudoku-solver.js) → Find empty, try 1-9, backtrack O(9^empty)

## Graphs (2)
- [Word Ladder](./graphs/008-word-ladder.js) → BFS + char substitution O(M²N)
- [Reconstruct Itinerary](./graphs/009-reconstruct-itinerary.js) → Eulerian DFS O(E log E)

## DP (2)
- [Edit Distance](./dp/008-edit-distance.js) → dp[i][j]=dp[i-1][j-1] if match else 1+min O(mn)
- [Burst Balloons](./dp/009-burst-balloons.js) → Interval DP, k as last to burst O(n³)

## Greedy (1+1=2)
- [Candy](./greedy/006-candy.js) → Two pass L→R then R→L O(n)
- [Min Taps to Water Garden](./greedy/009-minimum-number-of-taps.js) → Jump game conversion O(n log n)

## Tries/Design (2)
- [Word Search II](./tries-design/003-word-search-ii.js) → Trie + DFS board O(mn·4^L)
- [Design In-Memory File System](./tries-design/007-design-in-memory-file-system.js) → Trie for paths O(path)
