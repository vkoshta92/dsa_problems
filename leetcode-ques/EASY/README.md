# EASY Problems - FAANG Interview Guide

Total: 28 Easy problems. Sabse pehle ye solve karo - foundation strong hoga.

## Arrays (5)
- [Two Sum](./arrays/001-two-sum.js) → HashMap complement O(n)
- [Best Time to Buy and Sell](./arrays/002-best-time-to-buy-sell-stock.js) → Track minPrice O(n)
- [Contains Duplicate](./arrays/003-contains-duplicate.js) → Set check O(n)
- [Majority Element](./arrays/007-majority-element.js) → Boyer-Moore voting O(n)
- [Merge Sorted Array](./arrays/016-merge-sorted-array.js) → Fill from end O(m+n)

## Two Pointers (3+1=4)
- [Valid Palindrome](./two-pointers/001-valid-palindrome.js) → Left-right compare O(n)
- [Remove Duplicates](./two-pointers/005-remove-duplicates.js) → Slow-fast pointer O(n)
- [Valid Palindrome II](./two-pointers/006-valid-palindrome-ii.js) → Skip one char O(n)
- [Move Zeroes](./two-pointers/010-move-zeroes.js) → Slow-fast swap O(n)

## Sliding Window (1)
- [Maximum Average Subarray I](./sliding-window/003-maximum-average-subarray.js) → Fixed window O(n)

## Stack (1)
- [Valid Parentheses](./stack-queue/001-valid-parentheses.js) → Stack match O(n)

## Binary Search (1)
- [Binary Search](./binary-search/002-binary-search.js) → Classic O(log n)

## Linked List (3+1=4)
- [Reverse Linked List](./linked-list/001-reverse-linked-list.js) → prev-curr-next O(n)
- [Merge Two Sorted Lists](./linked-list/002-merge-two-sorted-lists.js) → Dummy node O(n+m)
- [Linked List Cycle](./linked-list/003-linked-list-cycle.js) → Floyd slow-fast O(n)
- [Intersection of Two Lists](./linked-list/012-intersection-of-two-lists.js) → Two pointers switch O(m+n)

## Trees (4+2=6)
- [Maximum Depth](./trees/001-maximum-depth.js) → 1+max(left,right) O(n)
- [Invert Binary Tree](./trees/002-invert-binary-tree.js) → Swap children O(n)
- [Subtree of Another Tree](./trees/009-subtree-of-another-tree.js) → Recursive check O(m*n)
- [Same Tree](./trees/012-same-tree.js) → Compare recursively O(n)
- [Diameter of Binary Tree](./trees/013-diameter-of-binary-tree.js) → Height + global O(n)
- [Balanced Binary Tree](./trees/014-balanced-binary-tree.js) → Check height diff ≤1 O(n)

## Heap (1)
- [Last Stone Weight](./heap/002-last-stone-weight.js) → Max-heap O(n log n)

## Intervals (2)
- [Summary Ranges](./intervals/003-summary-ranges.js) → Consecutive tracking O(n)
- [Meeting Rooms](./intervals/005-meeting-rooms.js) → Sort + overlap check O(n log n)

## Graphs (1)
- [Flood Fill](./graphs/002-flood-fill.js) → DFS from start O(mn)

## DP (1)
- [Climbing Stairs](./dp/002-climbing-stairs.js) → Fibonacci O(n) O(1)

## Greedy (1)
- [Assign Cookies](./greedy/002-assign-cookies.js) → Sort + two pointers O(n log n)
