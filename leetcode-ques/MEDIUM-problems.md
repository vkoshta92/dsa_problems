# 🔶 Medium LeetCode Problems — Topic-wise

---

## 1. ARRAYS & HASHMAP

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Product of Array Except Self | [004-product-except-self.js](./01-arrays-hashmap/004-product-except-self.js) | Prefix + Suffix product arrays banao, har index ke liye left aur right ka product multiply karo | Amazon, FB, Microsoft |
| 2 | Maximum Subarray | [005-maximum-subarray.js](./01-arrays-hashmap/005-maximum-subarray.js) | Kadane's Algorithm — current sum negative ho to reset, max track karo | LinkedIn, Google, Amazon |
| 3 | 3Sum | [006-3sum.js](./01-arrays-hashmap/006-3sum.js) | Sort karo, ek fixed element + two-pointer for remaining sum, duplicates skip karo | Meta, Amazon, Google |
| 4 | Subarray Sum Equals K | [008-subarray-sum-equals-k.js](./01-arrays-hashmap/008-subarray-sum-equals-k.js) | Running prefix sum + HashMap se count, sum-K ka freq dekho | Google, Meta, Amazon |
| 5 | Longest Consecutive Sequence | [009-longest-consecutive-sequence.js](./01-arrays-hashmap/009-longest-consecutive-sequence.js) | HashSet mein daalo, sirf sequence ke start se count karo (jab num-1 na ho) | Google, Amazon, Microsoft |

---

## 2. TWO POINTERS

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Two Sum II | [002-two-sum-ii.js](./02-two-pointers/002-two-sum-ii.js) | Sorted array hai — left+right pointers, sum badha ya ghatao till target mile | Amazon, Apple, Microsoft |
| 2 | Container With Most Water | [003-container-with-most-water.js](./02-two-pointers/003-container-with-most-water.js) | Left-right pointers, chhoti height wali side move karo, max area track karo | Google, Meta, Amazon |

---

## 3. SLIDING WINDOW

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Longest Substring No Repeat | [001-longest-substring.js](./03-sliding-window/001-longest-substring.js) | Sliding window + Set, repeating char milte hi left shrink karo | Amazon, Google, Microsoft |
| 2 | Minimum Size Subarray Sum | [002-minimum-size-subarray.js](./03-sliding-window/002-minimum-size-subarray.js) | Expand right, sum ≥ target hone par left se shrink karte hue min len update karo | Goldman Sachs, Google |
| 3 | Longest Repeating Char Replacement | [004-longest-repeating-character-replacement.js](./03-sliding-window/004-longest-repeating-character-replacement.js) | Max freq char in window, windowLen - maxFreq ≤ k hona chahiye, nahi to shrink | Google, Amazon, Microsoft |
| 4 | Permutation in String | [005-permutation-in-string.js](./03-sliding-window/005-permutation-in-string.js) | Fixed-size window + freq maps compare karo, s2 mein s1 ka permutation dhundho | Microsoft, Amazon, Google |

---

## 4. STACK / QUEUE

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Min Stack | [002-min-stack.js](./04-stack-queue/002-min-stack.js) | Do stack — ek normal, ek min values ke liye; push/pop mein dono sync | Amazon, Google, Microsoft |
| 2 | Evaluate RPN | [003-evaluate-rpn.js](./04-stack-queue/003-evaluate-rpn.js) | Stack pe operands push karo, operator mile to do pop karke result push back | Google, Amazon |
| 3 | Daily Temperatures | [004-daily-temperatures.js](./04-stack-queue/004-daily-temperatures.js) | Monotonic decreasing stack, har index ko stack mein daalo, jab bada temp mile to pop+answer set | Meta, Google, Amazon |
| 4 | Car Fleet | [005-car-fleet.js](./04-stack-queue/005-car-fleet.js) | Destination tak pahunchne ka time nikaalo, stack se merge karo agar peeche wali gaadi pehle pahunch rahi | Google, Amazon |

---

## 5. BINARY SEARCH

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Search 2D Matrix | [003-search-2d-matrix.js](./05-binary-search/003-search-2d-matrix.js) | Matrix ko flat array ki tarah treat karo, mid se row,col nikaalo, binary search | Amazon, Google, Microsoft |
| 2 | Search Rotated Sorted | [001-search-rotated-array.js](./05-binary-search/001-search-rotated-array.js) | Pivot dhundho, fir left/right half decide karo sorted side check karke | Meta, Google, Amazon |
| 3 | Find Min Rotated | [004-find-minimum-rotated.js](./05-binary-search/004-find-minimum-rotated.js) | Binary search — mid aur right compare karke unsorted side mein move karo | Amazon, Google |
| 4 | Koko Eating Bananas | [005-koko-eating-bananas.js](./05-binary-search/005-koko-eating-bananas.js) | Speed pe binary search (1 to max pile), feasible speed check karo | AirBnB, Google |
| 5 | Time Based Key-Value | [006-time-based-key-value.js](./05-binary-search/006-time-based-key-value.js) | HashMap<String, List<Pair>> + binary search on timestamps for ≤ given timestamp | Google, Meta, Twitter |

---

## 6. LINKED LIST

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Reorder List | [004-reorder-list.js](./06-linked-list/004-reorder-list.js) | Middle dhundho, second half reverse karo, do lists ko merge in alternate order | Meta, Amazon |
| 2 | Remove Nth From End | [005-remove-nth-from-end.js](./06-linked-list/005-remove-nth-from-end.js) | Do-pointer — fast ko n steps aage badhao, fir dono ko end tak le jao, slow ke next ko skip | Amazon, Microsoft, Google |
| 3 | Copy List Random Pointer | [006-copy-list-random-pointer.js](./06-linked-list/006-copy-list-random-pointer.js) | Interweave copies between nodes, random links set karo, fir separate karo | Google, Meta, Amazon |

---

## 7. TREES

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Level Order Traversal | [003-level-order-traversal.js](./07-trees/003-level-order-traversal.js) | BFS using queue, har level ka size track karo, level-wise array banao | Amazon, Google, Microsoft |
| 2 | Validate BST | [004-validate-bst.js](./07-trees/004-validate-bst.js) | Recursive — har node ke liye valid min-max range bhejo, check karo | Amazon, Meta, Bloomberg |
| 3 | Kth Smallest BST | [005-kth-smallest-bst.js](./07-trees/005-kth-smallest-bst.js) | Inorder traversal (left-root-right) sorted order deta hai, kth element return | Amazon, Google, Meta |
| 4 | Lowest Common Ancestor | [006-lowest-common-ancestor.js](./07-trees/006-lowest-common-ancestor.js) | Recursively left-right search karo, jahan dono non-null milein wahi LCA hoga | Amazon, Google, Meta |

---

## 8. HEAP / PRIORITY QUEUE

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Kth Largest Element | — | Min-heap of size k, n elements push karte jao, top kth largest rahega | Amazon, Google, Meta |
| 2 | K Closest Points | — | Max-heap of size k ya custom comparator se min-heap on Euclidean distance | Meta, Amazon, Apple |
| 3 | Task Scheduler | — | Max-heap se most freq task nikalo, idle slots calculate karo, cooldown manage karo | Google, Meta, Amazon |

---

## 9. INTERVALS

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Merge Intervals | [001-merge-intervals.js](./09-intervals/001-merge-intervals.js) | Start time se sort karo, overlap milne pe end=max(end,currEnd) se merge | Google, Meta, Amazon |
| 2 | Insert Interval | [002-insert-interval.js](./09-intervals/002-insert-interval.js) | 3 phases: non-overlapping before, merge overlapping, non-overlapping after | Google, LinkedIn, Meta |
| 3 | Non-overlapping Intervals | [004-non-overlapping-intervals.js](./09-intervals/004-non-overlapping-intervals.js) | End time se sort karo, greedy — jitna jaldi khatam ho use rakh, overlapping hatao | Amazon, Google, Microsoft |
| 4 | Meeting Rooms II | [006-meeting-rooms-ii.js](./09-intervals/006-meeting-rooms-ii.js) | Start time sort + min-heap on end times, overlap pe naya room, otherwise reuse | Google, Amazon, Meta |

---

## 10. BACKTRACKING

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Subsets | [001-subsets.js](./10-backtracking/001-subsets.js) | Backtracking — har element ko include/exclude karo, leaf pe copy push | Meta, Google, Amazon |
| 2 | Permutations | [002-permutations.js](./10-backtracking/002-permutations.js) | Backtracking with visited[] — har position pe har unused element try karo | Google, Amazon, Meta |
| 3 | Combination Sum | [003-combination-sum.js](./10-backtracking/003-combination-sum.js) | Backtracking — same element reuse allowed, startIndex se iterate, sum target tak | Airbnb, Amazon, Meta |
| 4 | Letter Combinations | [004-letter-combinations-phone.js](./10-backtracking/004-letter-combinations-phone.js) | Digit-to-letters map, backtrack se combinations banao, index by index | Google, Amazon, Apple |
| 5 | Word Search | [005-word-search.js](./10-backtracking/005-word-search.js) | DFS in 4 directions, mark visited by mutation, unmark on backtrack | Amazon, Google, Meta |
| 6 | Palindrome Partitioning | [006-palindrome-partitioning.js](./10-backtracking/006-palindrome-partitioning.js) | Backtracking — partition point decide karo, valid palindrome substring check karo | Google, Meta |

---

## 11. GRAPHS

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Number of Islands | [001-number-of-islands.js](./11-graphs/001-number-of-islands.js) | DFS/BFS se har '1' ko visit karo, connected land sink karo (mark as '0') | Amazon, Google, Meta |
| 2 | Clone Graph | [003-clone-graph.js](./11-graphs/003-clone-graph.js) | DFS + HashMap (orig → clone), har node ko clone karo aur neighbours recursively | Google, Meta, Amazon |
| 3 | Rotting Oranges | [004-rotting-oranges.js](./11-graphs/004-rotting-oranges.js) | Multi-source BFS, saare rotten oranges se start, minute-by-minute spread karo | Google, Amazon, Microsoft |
| 4 | Course Schedule | [005-course-schedule.js](./11-graphs/005-course-schedule.js) | Topological sort via Kahn's (BFS indegree) ya DFS cycle detection | Google, Amazon, Meta |
| 5 | Graph Valid Tree | [006-graph-valid-tree.js](./11-graphs/006-graph-valid-tree.js) | Union-Find ya DFS — check no cycles + all nodes connected (edges = n-1) | Google, Amazon |
| 6 | Network Delay Time | [007-network-delay-time.js](./11-graphs/007-network-delay-time.js) | Dijkstra's algorithm, min heap se shortest path, max dist sabhi nodes tak | Google, Amazon |

---

## 12. DYNAMIC PROGRAMMING

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | House Robber | [001-house-robber.js](./12-dynamic-programming/001-house-robber.js) | DP[i] = max(rob current + dp[i-2], skip + dp[i-1]), alternate houses | Google, Amazon, Apple |
| 2 | Coin Change | [003-coin-change.js](./12-dynamic-programming/003-coin-change.js) | DP bottom-up — min coins for each amount, dp[a] = min(dp[a], dp[a-c]+1) | Amazon, Google, Apple |
| 3 | Longest Increasing Subsequence | [004-longest-increasing-subsequence.js](./12-dynamic-programming/004-longest-increasing-subsequence.js) | DP O(n²) ya patience sorting O(n log n) — tails array maintain karo | Google, Meta, Amazon |
| 4 | Longest Common Subsequence | [005-longest-common-subsequence.js](./12-dynamic-programming/005-longest-common-subsequence.js) | 2D DP — chars match to diagonal+1, else max(left,top) | Amazon, Google, DoorDash |
| 5 | Word Break | [006-word-break.js](./12-dynamic-programming/006-word-break.js) | DP boolean array — har position pe check karo agar wordDict ka koi word fit hota hai | Google, Meta, Amazon |
| 6 | Partition Equal Subset Sum | [007-partition-equal-subset-sum.js](./12-dynamic-programming/007-partition-equal-subset-sum.js) | 0/1 Knapsack — subset sum target = total/2, DP boolean table | Meta, Amazon, Google |

---

## 13. GREEDY

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Jump Game | [001-jump-game.js](./13-greedy/001-jump-game.js) | Max reach track karo iterate karte hue, agar current index reachable se aage to false | Amazon, Google, Apple |
| 2 | Gas Station | [003-gas-station.js](./13-greedy/003-gas-station.js) | Greedy — total surplus check karo, negative surplus pe start reset | Amazon, Google, Microsoft |
| 3 | Partition Labels | [004-partition-labels.js](./13-greedy/004-partition-labels.js) | Har char ka last occurrence store karo, window ka end update karte jao | Amazon, Google |
| 4 | Hand of Straights | [005-hand-of-straights.js](./13-greedy/005-hand-of-straights.js) | Freq map banao, smallest num se start karke consecutive k numbers ko reduce karo | Google, Apple |

---

## 14. TRIES / DESIGN

| # | Problem | File | Approach (Hinglish) | Companies |
|---|---------|------|---------------------|-----------|
| 1 | Implement Trie | [001-implement-trie.js](./14-tries-design/001-implement-trie.js) | TrieNode with children[26] + isEnd flag, insert/search/startsWith in O(wordLen) | Google, Amazon, Meta |
| 2 | Add & Search Words | [002-design-add-search-words.js](./14-tries-design/002-design-add-search-words.js) | Trie + DFS for '.' wildcard — har child try karo on dot | Google, Amazon, Meta |
| 3 | LRU Cache | [004-lru-cache.js](./14-tries-design/004-lru-cache.js) | Doubly linked list + HashMap, get/put O(1), least recently used ko evict | Amazon, Google, Meta |
| 4 | GetRandom O(1) | [005-insert-delete-getrandom.js](./14-tries-design/005-insert-delete-getrandom.js) | Array + HashMap (val→index), delete mein swap with last element to make O(1) | Google, Meta, Amazon |
| 5 | Design Twitter | [006-design-twitter.js](./14-tries-design/006-design-twitter.js) | Users k follow map + tweets with timestamps, top-10 merge via max-heap | Amazon, Google, Twitter |
