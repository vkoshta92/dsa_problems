/*
Problem: Merge K Sorted Lists
Difficulty: Hard
Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg

You are given an array of k linked-lists lists, each linked list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked lists are:
1->4->5
1->3->4
2->6
Merged: 1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
Output: []
*/

/*
Hinglish Logic Explanation:

Is problem mein hume k sorted linked lists ko merge karna hai ek single
sorted list mein. Yeh problem heap-based approach se solve hoti hai.

Min-Heap Approach:

Step 1: Min-heap banao k lists ke current (head) nodes se
- Har list ka pehla node heap mein dalo
- Heap node store karta hai: {node, listIndex, nodeIndex}
- Compare karo values ke basis pe (min-heap)

Step 2: Jab tak heap empty nahi hota:
- Heap se smallest element nikalo (root)
- Us node ko result list mein add karo
- Agar us node ka next node hai toh heap mein push karo
- Yeh process tab tak chalo jab tak heap empty na ho jaye

Step 3: Result list return karo
- Hum ek dummy node use karte hain result ke liye
- Dummy.next final answer hoga

Min-Heap mein:
- Insert O(log k) time leta hai
- Extract minimum O(log k) time leta hai
- Total n elements process karenge (n = total nodes across all lists)
- Total time: O(n log k)

Yeh approach efficiently k sorted lists ko merge karta hai.
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Min-Heap implementation for merging k sorted lists
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min;
    }

    bubbleUp(idx) {
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx].val < this.heap[parentIdx].val) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
                idx = parentIdx;
            } else break;
        }
    }

    sinkDown(idx) {
        const length = this.heap.length;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < length && this.heap[left].val < this.heap[smallest].val) {
                smallest = left;
            }
            if (right < length && this.heap[right].val < this.heap[smallest].val) {
                smallest = right;
            }
            if (smallest !== idx) {
                [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
                idx = smallest;
            } else break;
        }
    }

    size() {
        return this.heap.length;
    }
}

/**
 * Merges k sorted linked lists into one sorted linked list
 * @param {ListNode[]} lists - array of k sorted linked list heads
 * @returns {ListNode} - head of merged sorted list
 */
function mergeKLists(lists) {
    let dummy = new ListNode(0);
    let current = dummy;
    let heap = new MinHeap();

    // Step 1: Initialize heap with head of each non-null list
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            heap.push({ val: lists[i].val, node: lists[i], index: i });
        }
    }

    // Step 2: Extract minimum from heap and add next node
    while (heap.size() > 0) {
        let smallest = heap.pop();
        current.next = smallest.node;
        current = current.next;

        if (smallest.node.next) {
            heap.push({
                val: smallest.node.next.val,
                node: smallest.node.next,
                index: smallest.index
            });
        }
    }

    return dummy.next;
}

/*
Time Complexity: O(n log k) - n = total nodes across all lists, k = number of lists.
Each insert/extract from heap takes O(log k). We do this n times.
Space Complexity: O(k) - Heap stores at most k nodes at any time.
*/

// Helper: create list from array
function createList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper: convert list to array for display
function listToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test Case 1: [[1,4,5],[1,3,4],[2,6]] => Expected: [1,1,2,3,4,4,5,6]
let lists1 = [
    createList([1, 4, 5]),
    createList([1, 3, 4]),
    createList([2, 6])
];
console.log("Test 1 - Input: [[1,4,5],[1,3,4],[2,6]]");
console.log("Expected: [1, 1, 2, 3, 4, 4, 5, 6]");
console.log("Got:      " + JSON.stringify(listToArray(mergeKLists(lists1))));
console.log("---");

// Test Case 2: [] => Expected: []
let lists2 = [];
console.log("Test 2 - Input: []");
console.log("Expected: []");
console.log("Got:      " + JSON.stringify(listToArray(mergeKLists(lists2))));
console.log("---");

// Test Case 3: [[]] => Expected: []
let lists3 = [createList([])];
console.log("Test 3 - Input: [[]]");
console.log("Expected: []");
console.log("Got:      " + JSON.stringify(listToArray(mergeKLists(lists3))));
console.log("---");

// Test Case 4: [[1],[2],[3]] => Expected: [1,2,3]
let lists4 = [
    createList([1]),
    createList([2]),
    createList([3])
];
console.log("Test 4 - Input: [[1],[2],[3]]");
console.log("Expected: [1, 2, 3]");
console.log("Got:      " + JSON.stringify(listToArray(mergeKLists(lists4))));
console.log("---");

// Test Case 5: [[1,3,5,7],[2,4,6,8],[0,9,10,11]] => Expected: [0,1,2,3,4,5,6,7,8,9,10,11]
let lists5 = [
    createList([1, 3, 5, 7]),
    createList([2, 4, 6, 8]),
    createList([0, 9, 10, 11])
];
console.log("Test 5 - Input: [[1,3,5,7],[2,4,6,8],[0,9,10,11]]");
console.log("Expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]");
console.log("Got:      " + JSON.stringify(listToArray(mergeKLists(lists5))));
console.log("---");

module.exports = { mergeKLists };
