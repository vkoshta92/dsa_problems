# Easy Problems — Topic-wise (22 Problems)

---

## 01. Arrays & Hashmap

- **Two Sum**  
  [📄 two-sum.js](./01-arrays-hashmap/001-two-sum.js)  
  💬 HashMap me element-index store karo, `target - nums[i]` dhundho O(n) me.  
  🏢 Amazon, Google, Microsoft, Meta, Apple, Flipkart

- **Best Time to Buy and Sell Stock**  
  [📄 best-time-to-buy-sell-stock.js](./01-arrays-hashmap/002-best-time-to-buy-sell-stock.js)  
  💬 Ek pass me min price track karo, har din max profit update karo.  
  🏢 Amazon, Microsoft

- **Contains Duplicate**  
  [📄 contains-duplicate.js](./01-arrays-hashmap/003-contains-duplicate.js)  
  💬 Set me daalo, agar pehle se present hai to duplicate mil gaya.  
  🏢 Amazon

- **Majority Element**  
  [📄 majority-element.js](./01-arrays-hashmap/007-majority-element.js)  
  💬 Boyer-Moore Voting — candidate + count maintain karo, last me candidate majority hoga.  
  🏢 Microsoft

---

## 02. Two Pointers

- **Valid Palindrome**  
  [📄 valid-palindrome.js](./02-two-pointers/001-valid-palindrome.js)  
  💬 Do pointers left-right se compare karo, non-alphanumeric skip karo.  
  🏢 Amazon, Google, Meta, Apple

- **Remove Duplicates from Sorted Array**  
  [📄 remove-duplicates.js](./02-two-pointers/005-remove-duplicates.js)  
  💬 Fast pointer scan kare, slow pointer unique elements overwrite kare.  
  🏢 Amazon

- **Valid Palindrome II**  
  [📄 valid-palindrome-ii.js](./02-two-pointers/006-valid-palindrome-ii.js)  
  💬 Two pointers se check karo, mismatch pe ek char skip karke dono side test karo.  
  🏢 Microsoft

---

## 03. Sliding Window

- **Maximum Average Subarray I**  
  [📄 maximum-average-subarray.js](./03-sliding-window/003-maximum-average-subarray.js)  
  💬 Fixed-size window ka sum maintain karo, slide karte waqt max track karo.  
  🏢 Google

---

## 04. Stack & Queue

- **Valid Parentheses**  
  [📄 valid-parentheses.js](./04-stack-queue/001-valid-parentheses.js)  
  💬 Stack me opening brackets push karo, closing aaye to top se match karo.  
  🏢 Amazon, Microsoft

---

## 05. Binary Search

- **Binary Search**  
  [📄 binary-search.js](./05-binary-search/002-binary-search.js)  
  💬 Classic binary search — mid nikalo, target se compare karke range half karo.  
  🏢 Amazon

---

## 06. Linked List

- **Reverse Linked List**  
  [📄 reverse-linked-list.js](./06-linked-list/001-reverse-linked-list.js)  
  💬 `prev → curr → next` pointers se har node ka link reverse karo.  
  🏢 Amazon, Google, Microsoft

- **Merge Two Sorted Lists**  
  [📄 merge-two-sorted-lists.js](./06-linked-list/002-merge-two-sorted-lists.js)  
  💬 Dummy node se dono lists compare karo, chhota wala attach karo.  
  🏢 Amazon, Microsoft, Apple

- **Linked List Cycle**  
  [📄 linked-list-cycle.js](./06-linked-list/003-linked-list-cycle.js)  
  💬 Floyd's slow & fast pointer — agar dono mil gaye to cycle hai.  
  🏢 Amazon

---

## 07. Trees

- **Maximum Depth of Binary Tree**  
  [📄 maximum-depth.js](./07-trees/001-maximum-depth.js)  
  💬 Recursion: `1 + max(leftDepth, rightDepth)`, null node pe 0 return karo.  
  🏢 Amazon, Google, Microsoft, Meta, Apple, Flipkart

- **Invert Binary Tree**  
  [📄 invert-binary-tree.js](./07-trees/002-invert-binary-tree.js)  
  💬 Har node ke left-right children swap karo, recursively poore tree me.  
  🏢 Amazon

---

## 08. Heap & Priority Queue

- **Last Stone Weight**  
  [📄 last-stone-weight.js](./08-heap-priority-queue/002-last-stone-weight.js)  
  💬 Max-heap se do largest stones nikalo, difference > 0 to wapas push karo.  
  🏢 Amazon

---

## 09. Intervals

- **Summary Ranges**  
  [📄 summary-ranges.js](./09-intervals/003-summary-ranges.js)  
  💬 Array iterate karo, consecutive range dhundo, start≠end to `"a->b"` format karo.  
  🏢 Google

- **Meeting Rooms**  
  [📄 meeting-rooms.js](./09-intervals/005-meeting-rooms.js)  
  💬 Intervals ko start time se sort karo, adjacent overlapping check karo.  
  🏢 Amazon

---

## 10. Backtracking

> No Easy problems in this topic. Sab Medium ya Hard hain.

---

## 11. Graphs

- **Flood Fill**  
  [📄 flood-fill.js](./11-graphs/002-flood-fill.js)  
  💬 DFS/BFS se same-color neighbouring cells ko new color se fill karo.  
  🏢 Amazon

---

## 12. Dynamic Programming

- **Climbing Stairs**  
  [📄 climbing-stairs.js](./12-dynamic-programming/002-climbing-stairs.js)  
  💬 Fibonacci pattern: `dp[i] = dp[i-1] + dp[i-2]`, bottom-up O(n).  
  🏢 Amazon, Google, Meta, Apple

---

## 13. Greedy

- **Assign Cookies**  
  [📄 assign-cookies.js](./13-greedy/002-assign-cookies.js)  
  💬 Dono arrays sort karo, greedy se bachcho ko minimum possible cookie do.  
  🏢 Amazon

---

## 14. Tries & Design

> No Easy problems in this topic. Sab Medium ya Hard hain.

---

## Summary

| Topic | Easy Problems |
|---|---|
| Arrays & Hashmap | 4 |
| Two Pointers | 3 |
| Sliding Window | 1 |
| Stack & Queue | 1 |
| Binary Search | 1 |
| Linked List | 3 |
| Trees | 2 |
| Heap | 1 |
| Intervals | 2 |
| Backtracking | 0 |
| Graphs | 1 |
| DP | 1 |
| Greedy | 1 |
| Tries & Design | 0 |
| **Total** | **22** |
