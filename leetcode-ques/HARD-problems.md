# Hard Problems — Topic-wise Breakdown

---

## 1. ARRAYS

### First Missing Positive
- **File:** [01-arrays-hashmap/010-first-missing-positive.js](./01-arrays-hashmap/010-first-missing-positive.js)
- **Approach:** Array ko in-place cyclic sort karo, har number ko uski correct index par rakho, phir first missing dhundho.
- **Companies:** Amazon, Microsoft, Google, Adobe

---

## 2. TWO POINTERS

### Trapping Rain Water
- **File:** [02-two-pointers/004-trapping-rain-water.js](./02-two-pointers/004-trapping-rain-water.js)
- **Approach:** Do pointers left aur right se max height track karo, jo side chhoti usse paani calculate karte chalo.
- **Companies:** Amazon, Google, Apple, Facebook, Goldman Sachs

---

## 3. SLIDING WINDOW

### Minimum Window Substring
- **File:** [03-sliding-window/006-minimum-window-substring.js](./03-sliding-window/006-minimum-window-substring.js)
- **Approach:** Sliding window expand karo jab tak saare char cover na ho jaye, phir shrink karke minimum window track karo.
- **Companies:** Amazon, Google, Facebook, LinkedIn, Microsoft

### Sliding Window Maximum
- **File:** [03-sliding-window/007-sliding-window-maximum.js](./03-sliding-window/007-sliding-window-maximum.js)
- **Approach:** Deque use karo monotonic decreasing order maintain karne ke liye — front pe hamesha window ka max rahega.
- **Companies:** Amazon, Google, Microsoft, Uber, Salesforce

---

## 4. STACK / QUEUE

### Largest Rectangle in Histogram
- **File:** [04-stack-queue/006-largest-rectangle-histogram.js](./04-stack-queue/006-largest-rectangle-histogram.js)
- **Approach:** Monotonic increasing stack se next smaller aur previous smaller element dhundho, har bar ke liye area calculate karo.
- **Companies:** Amazon, Google, Microsoft, Adobe, Uber

### Basic Calculator
- **File:** [04-stack-queue/007-basic-calculator.js](./04-stack-queue/007-basic-calculator.js)
- **Approach:** Stack use karo sign aur result track karne ke liye, parentheses ke andar jaate waqt current state push karo.
- **Companies:** Amazon, Google, Facebook, Uber, Doordash

---

## 5. BINARY SEARCH

### Median of Two Sorted Arrays
- **File:** [05-binary-search/007-median-two-sorted.js](./05-binary-search/007-median-two-sorted.js)
- **Approach:** Chhote array par binary search lagao correct partition dhundhne ke liye, dono arrays ke left half right half se chhote hone chahiye.
- **Companies:** Amazon, Google, Microsoft, Apple, Goldman Sachs

---

## 6. LINKED LIST

### Merge K Sorted Lists
- **File:** [06-linked-list/007-merge-k-sorted-lists.js](./06-linked-list/007-merge-k-sorted-lists.js)
- **Approach:** Min-heap ya divide-conquer use karo — har step mein do lists merge karte karte final sorted list banao.
- **Companies:** Amazon, Google, Facebook, Microsoft, Apple

### Reverse Nodes in k-Group
- **File:** [06-linked-list/008-reverse-nodes-k-group.js](./06-linked-list/008-reverse-nodes-k-group.js)
- **Approach:** Recursively k nodes reverse karo, har group ke end ko next group ke reversed head se connect karte jao.
- **Companies:** Amazon, Google, Microsoft, Apple, Capital One

---

## 7. TREES

### Binary Tree Maximum Path Sum
- **File:** [07-trees/007-binary-tree-max-path-sum.js](./07-trees/007-binary-tree-max-path-sum.js)
- **Approach:** Post-order recursion se har node ke liye max gain nikalo, 0 se neeche wali values ko ignore karke global max update karo.
- **Companies:** Amazon, Google, Facebook, Microsoft, DoorDash

### Serialize and Deserialize Binary Tree
- **File:** [07-trees/008-serialize-deserialize.js](./07-trees/008-serialize-deserialize.js)
- **Approach:** Pre-order traversal se tree ko string mein encode (null ke liye "N") karo, decode mein queue se nodes reconstruct karo.
- **Companies:** Amazon, Google, Facebook, Microsoft, LinkedIn

---

## 8. HEAP / PRIORITY QUEUE

### Find Median from Data Stream
- **File:** [08-heap-priority-queue/005-find-median-data-stream.js](./08-heap-priority-queue/005-find-median-data-stream.js)
- **Approach:** Do heaps (max-heap for left half, min-heap for right half) maintain karo, dono ke top se median calculate karo.
- **Companies:** Amazon, Google, Apple, Microsoft, Salesforce

### Meeting Rooms III
- **File:** [08-heap-priority-queue/006-meeting-rooms-iii.js](./08-heap-priority-queue/006-meeting-rooms-iii.js)
- **Approach:** Do min-heaps — ek free rooms ke liye, ek busy rooms ke liye (end time ke hisaab se), simulate karte jao.
- **Companies:** Google, Amazon, Apple, Bloomberg

---

## 9. INTERVALS

### Minimum Interval to Include Each Query
- **File:** [09-intervals/007-min-interval-include-query.js](./09-intervals/007-min-interval-include-query.js)
- **Approach:** Queries aur intervals sort karo, min-heap mein active intervals rakho size ke hisaab se, query cover hone pe smallest size lo.
- **Companies:** Google, Amazon, Apple

---

## 10. BACKTRACKING

### N-Queens
- **File:** [10-backtracking/007-n-queens.js](./10-backtracking/007-n-queens.js)
- **Approach:** Row by row queen place karo, backtracking se column, diag1, diag2 ke conflicts check karte hue saare solutions generate karo.
- **Companies:** Amazon, Google, Microsoft, Apple, Goldman Sachs

### Sudoku Solver
- **File:** [10-backtracking/008-sudoku-solver.js](./10-backtracking/008-sudoku-solver.js)
- **Approach:** Backtracking se empty cell bharo 1-9 try karke, row/col/box validity check karte karte pehla valid solution board peinplace karo.
- **Companies:** Google, Amazon, Microsoft, Uber, DoorDash

---

## 11. GRAPHS

### Word Ladder
- **File:** [11-graphs/008-word-ladder.js](./11-graphs/008-word-ladder.js)
- **Approach:** BFS se shortest path dhundho, har word ke har position par a-z replace karke next valid word queue mein daalte jao.
- **Companies:** Amazon, Google, Facebook, Microsoft, LinkedIn

### Reconstruct Itinerary
- **File:** [11-graphs/009-reconstruct-itinerary.js](./11-graphs/009-reconstruct-itinerary.js)
- **Approach:** Eulerian path problem hai — min-heap adjacency list banao, DFS se "post-order" mein itinerary construct karo.
- **Companies:** Amazon, Google, Uber, Twitter, Bloomberg

---

## 12. DYNAMIC PROGRAMMING

### Edit Distance
- **File:** [12-dynamic-programming/008-edit-distance.js](./12-dynamic-programming/008-edit-distance.js)
- **Approach:** 2D DP table banao, agar char match kare toh diagonal, warna min(insert, delete, replace) + 1 se cell fill karo.
- **Companies:** Amazon, Google, Microsoft, Apple, ByteDance

### Burst Balloons
- **File:** [12-dynamic-programming/009-burst-balloons.js](./12-dynamic-programming/009-burst-balloons.js)
- **Approach:** DP with subproblems — burst karne ki jagah balloon ko last mein burst karne ka socho, left/right partitions ke saath max coins nikalo.
- **Companies:** Google, Amazon, Bloomberg, Snap

---

## 13. GREEDY

### Candy
- **File:** [13-greedy/006-candy.js](./13-greedy/006-candy.js)
- **Approach:** Left-to-right pass aur right-to-left pass karo — rating condition satisfy karte hue har bachche ko minimum candy assign karo.
- **Companies:** Amazon, Google, Microsoft, Apple, Uber

---

## 14. TRIES / DESIGN

### Word Search II
- **File:** [14-tries-design/003-word-search-ii.js](./14-tries-design/003-word-search-ii.js)
- **Approach:** Trie mein saare words insert karo, board ke har cell se DFS karke trie nodes match karo, found words result mein add karo.
- **Companies:** Amazon, Google, Microsoft, Apple, Twitter

### Design In-Memory File System
- **File:** [14-tries-design/007-design-in-memory-file-system.js](./14-tries-design/007-design-in-memory-file-system.js)
- **Approach:** Trie based design — path ko split karke traverse karo, directories mein children map aur files mein content store karo.
- **Companies:** Amazon, Google, DoorDash, Coinbase, Bloomberg
