# 🔥 REVISION-HINGLISH — DSA Last-Minute Recall Guide

> Ek line mein problem, ek line mein approach. Sab Hinglish mein, sab yaad rahega.

---

## 📊 Problem Count by Difficulty

| Difficulty | Count |
|------------|-------|
| 🟢 Easy | ~20 |
| 🟡 Medium | ~55 |
| 🔴 Hard | ~15 |
| **Total** | **90+** |

---

## ⭐ Top 20 FAANG Most-Asked (Must-Know)

| # | Problem | Why FAANG loves it |
|---|---------|-------------------|
| 1 | ⭐ Two Sum | HashMap funda, har interview ka opener |
| 2 | ⭐ 3Sum | Two-pointer mastery, duplicates handle |
| 3 | ⭐ Longest Substring No Repeat | Sliding window with Map, Uber fav |
| 4 | ⭐ Trapping Rain Water | Two-pointer on height, Amazon fav |
| 5 | ⭐ Valid Parentheses | Stack basics, every company asks |
| 6 | ⭐ Merge Intervals | Sort + greedy overlap, Meta fav |
| 7 | ⭐ Number of Islands | DFS/BFS grid, graph entry point |
| 8 | ⭐ LRU Cache | HashMap + DLL, design heavy |
| 9 | ⭐ Course Schedule | Topological sort, graph cycle detect |
| 10 | ⭐ Median Two Sorted | Binary search on partitions, Google fav |
| 11 | ⭐ Reverse Linked List | Pointer manipulation, Apple/Google |
| 12 | ⭐ Maximum Subarray | Kadane's algorithm, classic DP |
| 13 | ⭐ Search Rotated Sorted | Binary search variation, Meta/Google |
| 14 | ⭐ Subarray Sum Equals K | Prefix sum + HashMap, tricky sliding |
| 15 | ⭐ Word Ladder | BFS shortest path, Amazon/LinkedIn |
| 16 | ⭐ Clone Graph | Graph + HashMap mapping, Meta |
| 17 | ⭐ Kth Largest Element | Heap top-K pattern, everywhere |
| 18 | ⭐ Coin Change | DP unbounded knapsack, classic |
| 19 | ⭐ Product of Array Except Self | Prefix×Suffix no division, Apple |
| 20 | ⭐ LCA of Binary Tree | Tree recursion, must-know |

---

## 1️⃣ ARRAYS & HASHMAP

- **Two Sum** ⭐ — `target - nums[i]` complement ko HashMap mein dhundho. Agar mila, answer mila. O(n) time, O(n) space.

- **Best Time to Buy & Sell Stock** — `minPrice` track karo left se, `maxProfit` update karo har step pe. Buy low sell high ka Kadane. O(n).

- **Contains Duplicate** — Set mein daalte jao, agar pehle se hai toh true. Ya sort karke adjacent check karo. O(n) / O(n log n).

- **Product of Array Except Self** ⭐ — Left pass: prefix product array mein bharna. Right pass: suffix multiply karte jaana. O(n) time, O(1) extra (output array count nahi hota).

- **Maximum Subarray** ⭐ — Kadane: `currentSum = max(num, currentSum + num)`. Har step pe `maxSum` update. Negative mein reset mentality. O(n), O(1).

- **3Sum** ⭐ — Sort karo. i fix karo. Left `i+1`, right `n-1` two-pointer. Duplicates skip karo teeno pointers pe. O(n²).

- **Majority Element** — Boyer-Moore Voting: `candidate` aur `count` rakho. Mila toh count++, nahi toh count--. Jo bache wahi winner (n/2 se zyada guarantee). O(n), O(1).

- **Subarray Sum Equals K** ⭐ — Prefix sum `currSum` chalao. Map mein `currSum - k` ki frequency dekho — agar hai toh utne subarrays mil gaye. Map mein `currSum` ki freq badhao. O(n).

- **Longest Consecutive Sequence** — Set mein sab daalo. Har num ke liye check karo kya `num-1` set mein nahi? Agar nahi, toh sequence start karo aur `num+1, num+2...` dhundho. O(n).

- **First Missing Positive** — Cyclic sort: har num ko uske sahi index `num-1` pe rakho (if range mein ho). Phir traverse karo — jo index pe galat num hai, wahi `index+1` missing hai. O(n), O(1).

---

## 2️⃣ TWO POINTERS

- **Valid Palindrome** — Non-alphanumeric skip karo `isalnum()` se. Left-right pointers se compare karo, mismatch toh false. O(n).

- **Two Sum II (Sorted Input)** — `sum < target` toh `left++`, `sum > target` toh `right--`. Sorted hone ka fayda. O(n).

- **Container With Most Water** — `area = min(height[left], height[right]) × width`. Chhoti height wala pointer move karo — kyunki usse bada area possible hai. O(n).

- **Trapping Rain Water** ⭐ — Har index pe paani = `min(maxLeft, maxRight) - height[i]`. Two-pointer: leftMax aur rightMax track karo, chhota wala pointer move karo. O(n), O(1).

- **Remove Duplicates from Sorted Array** — Slow pointer (unique place) aur fast pointer (scanner). Fast pe naya element mila toh slow++ aur copy. O(n), in-place.

- **Valid Palindrome II** — Mismatch mila toh do options: left skip karo ya right skip karo. Dono try karo, koi ek palindrome bana toh true. O(n).

---

## 3️⃣ SLIDING WINDOW

- **Longest Substring Without Repeating Characters** ⭐ — Map mein character ka last index rakho. Repeat mila toh `left` jump karo `max(left, map[ch]+1)` pe. Har step `right-left+1` se ans update. O(n).

- **Minimum Size Subarray Sum** — Right expand karo sum badhane ke liye. Sum ≥ target hote hi left shrink karna start karo, min length update karte raho. O(n).

- **Maximum Average Subarray I** — Fixed window `k` ka sum maintain karo slides ke through. `sum += nums[i] - nums[i-k]`. Avg = sum/k. O(n).

- **Longest Repeating Character Replacement** — Window size - maxFreq > k ho, toh left shrink. WindowSize - maxFreq = chars to replace. Intuition: maxFreq wale char ke alawa sab replace honge. O(26n) = O(n).

- **Permutation in String** — Fixed window `s1.length()` ki freq compare karo `s2` mein. Sliding window + freq arrays match. O(26n) = O(n).

- **Minimum Window Substring** — Right expand karo jab tak sab required chars na mil jayein. Phir left shrink karo min window ke liye. Jab shortage ho, phir right expand. `have` aur `need` counters. O(n+m).

- **Sliding Window Maximum** — Monotonic decreasing deque use karo. Har element ke liye: chhote remove karo back se, khud add karo. Window ke bahar wala front se remove. Har window ka max = deque.front(). O(n).

---

## 4️⃣ STACK & QUEUE

- **Valid Parentheses** ⭐ — Opening bracket → push stack. Closing bracket → pop karo aur match karo. Stack empty at end = valid. O(n).

- **Min Stack** — Do stack: main stack + `minStack` (current minimum so far). Push me dono update. `minStack.top()` = O(1) min. O(1) per operation.

- **Evaluate Reverse Polish Notation** — Number toh push. Operator aaya toh do pop karo (`b` pehle, `a` baad mein), `a op b` karo, result push. O(n).

- **Daily Temperatures** — Monotonic decreasing stack of indices. Aaj ka temp kal se zyada toh pop karo, difference = days to wait. O(n).

- **Car Fleet** — Position ke hisaab se sort karo descending. Har car ka arrival time = `(target - pos) / speed`. Stack use karo: agar naye car ka time ≤ stack top ke time se, toh fleet merge hogi. O(n log n).

- **Largest Rectangle in Histogram** — Monotonic increasing stack. Har bar ke liye: agar current bar stack top se chhoti, toh pop karo aur area = `height[popped] × (right - left - 1)`. O(n).

- **Basic Calculator** — Stack for result + sign when '(' encountered. `result` track karo, `sign` (+1/-1). '(' pe push current result & sign, reset. ')' pe pop aur combine. O(n).

---

## 5️⃣ BINARY SEARCH

- **Binary Search** — `while (left <= right): mid = left + (right-left)/2`. Target mila return, target chhota toh `right = mid-1`, bada toh `left = mid+1`. O(log n).

- **Search a 2D Matrix** — Top-right corner se start: target chhota toh left, bada toh down. Ya pure binary search treat 2D as 1D. O(m+n) / O(log mn).

- **Search in Rotated Sorted Array** ⭐ — Mid nikalo. Check karo left half sorted hai ya right. Agar target sorted half mein range mein hai toh wahan binary search, nahi toh doosre half mein. O(log n).

- **Find Minimum in Rotated Sorted Array** — `nums[mid] > nums[right]` matlab min right side mein hai → `left = mid+1`. Nahi toh min left side mein (ya mid hi) → `right = mid`. O(log n).

- **Koko Eating Bananas** — Speed `k` pe binary search from 1 to max(piles). `canFinish(k)`: har pile ke liye `ceil(pile/k)` hours lagenge. Total ≤ h hona chahiye. O(n log maxPile).

- **Time Based Key-Value Store** — HashMap<String, List<Pair(int timestamp, value)>>. Timestamps sorted hain. Get me binary search lagao largest timestamp ≤ query timestamp ke liye. O(log n) per get.

- **Median of Two Sorted Arrays** ⭐ — Chhote array pe partition binary search. Left partition ka max ≤ Right partition ka min. Boundary conditions handle karo `-INF`, `+INF` se. O(log min(m,n)).

---

## 6️⃣ LINKED LIST

- **Reverse Linked List** ⭐ — `prev = null, curr = head`. While curr: `next = curr.next` save karo, `curr.next = prev` reverse, phir `prev = curr, curr = next`. O(n), O(1).

- **Merge Two Sorted Lists** — Dummy node banao. Compare `l1.val` vs `l2.val`, chhota wala attach karo, us list ka pointer aage badhao. Jo bache use bhi attach kar do. O(n+m).

- **Linked List Cycle** — Floyd's Cycle Detection: slow 1 step, fast 2 steps. Agar dono kabhi mile → cycle. Fast null ho gaya → no cycle. O(n), O(1).

- **Reorder List** — 1) Slow-fast se middle nikalo. 2) Doosra half reverse karo. 3) Dono halves ko alternately merge karo (l1→r1→l2→r2...). O(n).

- **Remove Nth Node From End** — Fast pointer ko `n` steps aage badhao. Phir slow aur fast dono ko ek saath move karo jab tak fast.next null na ho. Slow.next = slow.next.next. Dummy node for edge case. O(n).

- **Copy List with Random Pointer** — 1) Har original node ke baad uska copy insert karo. 2) Copy ka random = original.random.next. 3) Dono lists ko separate kar do. O(n), O(1) extra.

- **Merge K Sorted Lists** — Min-heap of size k (node.value, listIndex). Sab lists ke head push karo. Phir pop smallest, us list ka next push. O(N log k).

- **Reverse Nodes in k-Group** — k nodes count karo. Agar pura group hai toh reverse karo. `prevGroupTail.next = reversedHead`, `currentGroupTail.next = reverseKGroup(nextGroupHead, k)`. O(n), O(1) (recursive stack excluded).

---

## 7️⃣ TREES

- **Maximum Depth of Binary Tree** — `if root == null: return 0`. Return `1 + max(maxDepth(left), maxDepth(right))`. Leaf se upar aao heights leke. O(n).

- **Invert Binary Tree** — `left, right = right, left` swap karo. Phir dono ko recursively invert karo. Visit every node once. O(n).

- **Level Order Traversal (BFS)** — Queue use karo. Har level ke liye `levelSize = q.size()` loop lagao. Ek level ke nodes process karo, unke children queue mein push. O(n).

- **Validate BST** — Recursion with range `(min, max)`. Left ke liye range = `(min, root.val)`, right ke liye = `(root.val, max)`. Koi violation mili toh false. O(n).

- **Kth Smallest Element in BST** — Inorder traversal (Left → Node → Right). Stack iterative: left mein jaate raho, node process karo, count kar. Count == k hote hi return. O(k + h).

- **Lowest Common Ancestor** ⭐ — Agar `root == null || root == p || root == q`: return root. Left aur right side search karo. Dono non-null → root hi LCA. Ek null → jo non-null hai wahi answer. O(n).

- **Binary Tree Maximum Path Sum** — Har node pe: `maxPathFromNode = node.val + max(left, right, 0)`. Global max update: `node.val + max(left,0) + max(right,0)`. O(n).

- **Serialize and Deserialize Binary Tree** — Serialize: Preorder DFS, null ke liye `"N"`. Values comma-separated. Deserialize: Queue se tokens lo, `"N"` pe null return, nahi toh node banao aur left-right recursively. O(n).

---

## 8️⃣ HEAP / PRIORITY QUEUE

- **Kth Largest Element in an Array** ⭐ — Min-heap of size k maintain karo. Har element push, size > k toh pop. Heap ka top = kth largest. O(n log k).

- **Last Stone Weight** — Max-heap chahiye, toh values negate karke min-heap use karo. Top 2 pop, smash: `y - x` (bada chhota). Agar non-zero toh wapas push. O(n log n).

- **K Closest Points to Origin** — Max-heap of size k by distance `x²+y²`. Distance zyada aayi toh pop. Ya sort all by distance, pehle k lo. O(n log k).

- **Task Scheduler** — Formula: `(maxFreq - 1) * (n + 1) + countOfMaxFreq`. Ya actual simulation with heap + queue for cooldown. At least `tasks.length` return. O(n) formula.

- **Find Median from Data Stream** — Two heaps: left = max-heap (smaller half), right = min-heap (larger half). Balance sizes: |left| == |right| ya |left| = |right|+1. Median = left.top (odd) ya avg of both (even). O(log n) add.

- **Meeting Rooms III** — Rooms ko sort karo by room number = index. Meetings ko start time se sort. Min-heap of busy rooms (endTime, roomNum). Available rooms ka min-heap. O(m log m + m log k).

---

## 9️⃣ INTERVALS

- **Merge Intervals** ⭐ — Start time se sort karo. Iterate: agar current start ≤ last end, toh merge (end = max end). Nahi toh naya interval add. O(n log n).

- **Insert Interval** — Teen phases: 1) Non-overlapping before: directly add. 2) Overlapping: merge (min start, max end). 3) Non-overlapping after: directly add. O(n).

- **Summary Ranges** — Traverse karo. Consecutive numbers ka chain banao (`nums[i] == nums[i-1]+1`). Chain end pe `"start->end"` ya `"start"` format mein add. O(n).

- **Non-overlapping Intervals** — Greedy: End time se sort karo. Har overlapping interval ko count karo (remove candidate). Prev end ≤ curr start → non-overlap; nahi toh overlap++. O(n log n).

- **Meeting Rooms** — Start time se sort karo. Lagatar intervals ka start < previous end → overlap → false. O(n log n).

- **Meeting Rooms II** — Sweep line: har meeting ke `[start,+1]` aur `[end,-1]` events. Time se sort karo, prefix sum of events = active rooms. Max active rooms = answer. O(n log n).

- **Minimum Interval to Include Each Query** — Queries aur intervals dono sort karo. Har query ke liye: jitne intervals ka start ≤ query, unhe heap mein {length, end} push. Pop invalid (end < query). Heap ka top = min length answer. O((n+q) log n).

---

## 🔟 BACKTRACKING

- **Subsets** — Recursion: har index pe do choice — element lo ya na lo. Har step pe current subset ki snapshot result mein push karo. O(n × 2^n).

- **Permutations** — Used boolean array ya visited set. Har position pe unused element pick karo. Pick karne ke baad use mark, recurse, backtrack mein unmark. O(n × n!).

- **Combination Sum** — Recursion: `index` se start, same element reuse allowed (index pass karo same). `target - arr[i]` karte raho. Target==0 → valid combination. If target<0 backtrack. O(2^n).

- **Letter Combinations of Phone Number** — Digit-to-letters map banao. Index by index digit ke letters pe iterate, string banao, backtrack karo agle digit pe. O(4^n).

- **Word Search** — Har cell se DFS start karo. 4 directions mein jaao, matching char mila toh aage badho. Visited mark `'#'` karo, backtrack pe wapas original char. O(mn × 4^L).

- **Palindrome Partitioning** — Har i se end tak partition try karo. Agar `s[start..i]` palindrome hai, toh usse list mein add, phir `i+1` se recurse. Base: start==n add list. O(n × 2^n).

- **N-Queens** — Row by row place karo. Col set, diag1 set (row+col), diag2 set (row-col) se safe check karo. Place karo, recurse next row, backtrack (remove from sets). O(n!).

- **Sudoku Solver** — Find empty cell. 1-9 try karo: valid if row/col/box safe. Place karo, recurse. Success return true, fail pe backtrack (empty karo). O(9^m) where m = empty cells.

---

## 1️⃣1️⃣ GRAPHS

- **Number of Islands** ⭐ — Grid traverse karo. '1' mila toh DFS/BFS se poora island mark karo (visited ya '0'/'2'). Har '1' start = naya island, count++. O(mn).

- **Flood Fill** — Start pixel ke color se DFS, same color wale neighbors hi fill karo. Boundary aur different color pe ruk jao. New color se replace karo. O(mn).

- **Clone Graph** ⭐ — BFS: Queue + HashMap (original → clone). Pop original, uske clone ke neighbors build karo (clone ya create). Visited/created check Map se. O(V+E).

- **Rotting Oranges** — Multi-source BFS: sab rotten oranges queue mein daalo. BFS levels = minutes. Har level pe fresh oranges rot karo. End mein fresh bache toh -1. O(mn).

- **Course Schedule** ⭐ — Kahns algorithm (Topological sort BFS): In-degree array banao. Zero in-degree nodes queue mein. Process karo, neighbors ki in-degree decrement, 0 hui toh queue. Processed ≠ numCourses → cycle. O(V+E).

- **Graph Valid Tree** — Do conditions: 1) Edges = n-1 (tree property). 2) BFS/DFS se connectivity check — saare nodes reachable. Doosra satisfied nahi → cycle ya disconnected. O(V+E).

- **Network Delay Time** — Dijkstra: Min-heap {time, node}. Dist array INF se init. Start node dist=0. Heap se pop min time, neighbors relax karo. Max dist check karo. O(E log V).

- **Word Ladder** — BFS shortest transformation: word ko char by char `'a'-'z'` se modify karo. Agar wordSet mein mila toh next level ke liye queue mein. Set se visited words remove. O(M²N).

- **Reconstruct Itinerary** — Eulerian path via DFS: Adjacency list sorted (lexical order). DFS karo `"JFK"` se. Post-order mein result build karo. Reverse of result = itinerary. O(E log E).

---

## 1️⃣2️⃣ DYNAMIC PROGRAMMING

- **House Robber** — `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`. Space optimize: `prev2, prev1 = 0, 0`. Loop: `curr = max(prev1, prev2 + n)`. O(n), O(1).

- **Climbing Stairs** — Fibonacci: `dp[i] = dp[i-1] + dp[i-2]`. Two variables `one=1, two=1`, loop se `next = one + two`. O(n), O(1).

- **Coin Change** ⭐ — DP: `dp[amt] = min coins to make amt`. Init to INF, dp[0]=0. Har coin ke liye: `dp[a] = min(dp[a], dp[a-coin] + 1)`. Unbounded knapsack. O(amt × coins).

- **Longest Increasing Subsequence** — `tails` array maintain karo. Har num ke liye binary search se correct position dhundho. Replace ya append. Tails length = LIS. O(n log n).

- **Longest Common Subsequence** — DP: `dp[i][j] = 1 + dp[i-1][j-1]` if chars match, else `max(dp[i-1][j], dp[i][j-1])`. Space optimize: 2 rows. O(mn).

- **Word Break** — DP: `dp[i]` = can segment `s[0..i]`. `dp[j]` true + `s[j..i]` in wordSet → `dp[i]` true. `j` 0 se i tak loop. O(n²).

- **Partition Equal Subset Sum** — 0/1 Knapsack: target = sum/2. Boolean dp[target+1]. dp[0]=true. Reverse loop on target: `dp[t] = dp[t] || dp[t-num]`. O(n × sum/2).

- **Edit Distance** — `dp[i][j] = edit distance for word1[0..i] & word2[0..j]`. Match: `dp[i-1][j-1]`. Else: `1 + min(insert, delete, replace)`. O(mn).

- **Burst Balloons** — DP on open interval (i,j). `dp[i][j] = max coins by bursting between (excl) i and j`. Burst `k` last: `coins = nums[i]*nums[k]*nums[j] + dp[i][k] + dp[k][j]`. Add padding 1s. O(n³).

---

## 1️⃣3️⃣ GREEDY

- **Jump Game** — `maxReach` track karo. Har i pe `i > maxReach` → unreachable → false. `maxReach = max(maxReach, i + nums[i])`. Agar maxReach ≥ last index → true. O(n).

- **Assign Cookies** — Dono sort karo. Greedily: smallest cookie → smallest greed. Child satisfied → dono pointers++. Nahi toh cookie pointer++ (bigger cookie). O(n log n + m log m).

- **Gas Station** — `totalTank = sum(gas - cost)`. Agar total < 0 → impossible. `curTank < 0` ho toh `start = i+1` aur `curTank = 0` reset karo. O(n), O(1).

- **Partition Labels** — Har char ka last occurrence map karo. Traverse: `end = max(end, last[ch])`. Jab `i == end` → partition complete. O(n).

- **Hand of Straights** — Freq map banao sorted keys. Min element se start karke `groupSize` tak consecutive cards dhundho. Agar koi missing → false. Feq decrement karo. O(n log n).

- **Candy** — Two pass: Left→Right (if ratings[i] > ratings[i-1] → candies[i] = candies[i-1]+1). Right→Left (agar right se better rating → max(candies[i], candies[i+1]+1)). Sum = total. O(n).

---

## 1️⃣4️⃣ TRIES & DESIGN

- **Implement Trie (Prefix Tree)** — Node class: `children[26]` ya HashMap, `isWord` flag. Insert: char by char node banao, end pe `isWord = true`. Search: traverse, last node ka isWord check. O(L) per operation.

- **Design Add and Search Words** — Trie + DFS for `.` wildcard. `.` pe 26 children explore karo. Specific char pe us direction mein jaao. Word end pe `isWord` check. O(26^L) worst.

- **Word Search II** — Pehle words ka Trie banao. Board ke har cell se DFS: Trie node traverse karte jaao. Word mila → result mein add, Trie mein node null mark to avoid duplicate. O(mn × 4^L).

- **LRU Cache** ⭐ — HashMap + Doubly Linked List. Get: node ko head ke paas lao (most recent). Put: exist → update & move to head. Nahi → add; capacity full → tail se evict. O(1) get/put.

- **Insert Delete GetRandom O(1)** — ArrayList + HashMap<val, index>. Delete: swap element at last index se, pop last, update map. GetRandom: random index se list element. O(1) all ops.

- **Design Twitter** — `tweets: Map<userId, List<(tweetId, timestamp)>>`, `follows: Map<userId, Set<followeeId>>`. GetNewsFeed: Min-heap of 10 latest from user + followees' tweets. O(n log 10).

- **In-Memory File System** — Trie/Directory: Node = Map<String, Node> (subdirs/files) + content string. `ls`: sort keys. `mkdir`: path split, traverse, create missing. `addContentToFile`: create or append. O(path length).
