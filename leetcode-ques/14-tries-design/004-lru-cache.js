/*
    Problem: LRU Cache
    Difficulty: Medium
    Companies: Amazon, Google, Meta, Microsoft, Apple, Bloomberg

    Problem Statement:
    Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
    Implement the LRUCache class:
    - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
    - int get(int key) Return the value of the key if the key exists, otherwise return -1.
    - void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

    The functions get and put must each run in O(1) average time complexity.

    Example 1:
    Input: ["LRUCache","put","put","get","put","get","put","get","get","get"]
           [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
    Output: [null,null,null,1,null,-1,null,-1,3,4]
    Explanation:
        LRUCache lRUCache = new LRUCache(2);
        lRUCache.put(1, 1); // cache: {1:1}
        lRUCache.put(2, 2); // cache: {1:1, 2:2}
        lRUCache.get(1);    // returns 1, cache: {2:2, 1:1} (1 is now most recent)
        lRUCache.put(3, 3); // evicts key 2, cache: {1:1, 3:3}
        lRUCache.get(2);    // returns -1 (not found)
        lRUCache.put(4, 4); // evicts key 1, cache: {3:3, 4:4}
        lRUCache.get(1);    // returns -1 (not found)
        lRUCache.get(3);    // returns 3
        lRUCache.get(4);    // returns 4
*/

/*
    Hinglish Explanation (Detailed Logic):

    LRU Cache ka matlab hai ki jab capacity full ho jaye toh sabse kam recently
    use kiya gaya element hatao. Iske liye hum two data structures use karte hain:
    1. HashMap (Object/Map) - O(1) lookup ke liye
    2. Doubly Linked List - Order maintain karne ke liye (most recent to least recent)

    Doubly Linked List ka design:
    - Head (dummy) -> Most Recent -> ... -> Least Recent -> Tail (dummy)
    - Head ke baad sabse recently use kiya gaya hoga
    - Tail ke pehle sabse kam recently use hoga

    get(key):
    1. Agar key map mein nahi hai, return -1.
    2. Key mili! Ab usse "most recent" banao.
    3. Doubly Linked List se node ko hatao (removeFromList).
    4. Usse head ke baad dobara insert karo (insertAfterHead).
    5. Value return karo.

    put(key, value):
    1. Agar key pehle se hai, toh purani value hatao (removeFromList).
    2. Naya node head ke baad insert karo (insertAfterHead).
    3. Map mein key-value update karo.
    4. Agar capacity se zyada ho gaya, toh Tail se pehle wala node hatao
       (sabse least recently used) aur map se bhi delete karo.

    Doubly Linked List operations O(1) hain kyunki hume traversal nahi karna -
    sirf direct pointers change karte hain.

    Is approach se get dono O(1) average time mein run karte hain.
*/

class ListNode {
    constructor(key = 0, value = 0) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); // key -> ListNode
        this.head = new ListNode(); // dummy head (most recent side)
        this.tail = new ListNode(); // dummy tail (least recent side)
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Remove a node from linked list
    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // Insert node right after head (most recent position)
    _insertAfterHead(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        const node = this.map.get(key);

        // Move to front (most recently used)
        this._remove(node);
        this._insertAfterHead(node);

        return node.value;
    }

    put(key, value) {
        // If key exists, remove old node
        if (this.map.has(key)) {
            const oldNode = this.map.get(key);
            this._remove(oldNode);
            this.map.delete(key);
        }

        // Create new node and insert at front
        const newNode = new ListNode(key, value);
        this._insertAfterHead(newNode);
        this.map.set(key, newNode);

        // If over capacity, remove least recently used (node before tail)
        if (this.map.size > this.capacity) {
            const lruNode = this.tail.prev;
            this._remove(lruNode);
            this.map.delete(lruNode.key);
        }
    }
}

/*
    Time Complexity:
        - get: O(1) - HashMap lookup + O(1) linked list operations
        - put: O(1) - HashMap insert/delete + O(1) linked list operations

    Space Complexity: O(capacity)
        - HashMap stores at most 'capacity' key-value pairs
        - Doubly Linked List stores at most 'capacity' nodes
*/

// Test Cases
console.log("Test Case 1: Basic LRU operations");
const lru1 = new LRUCache(2);
lru1.put(1, 1);
lru1.put(2, 2);
console.log("get(1) -> Expected: 1, Actual:", lru1.get(1));
lru1.put(3, 3); // evicts key 2
console.log("get(2) -> Expected: -1, Actual:", lru1.get(2));
lru1.put(4, 4); // evicts key 1
console.log("get(1) -> Expected: -1, Actual:", lru1.get(1));
console.log("get(3) -> Expected: 3, Actual:", lru1.get(3));
console.log("get(4) -> Expected: 4, Actual:", lru1.get(4));
console.log("---");

console.log("Test Case 2: Update existing key");
const lru2 = new LRUCache(2);
lru2.put(1, 10);
lru2.put(2, 20);
lru2.put(1, 100); // update key 1
console.log("get(1) -> Expected: 100, Actual:", lru2.get(1));
console.log("get(2) -> Expected: 20, Actual:", lru2.get(2));
console.log("---");

console.log("Test Case 3: Capacity 1");
const lru3 = new LRUCache(1);
lru3.put(1, 1);
console.log("get(1) -> Expected: 1, Actual:", lru3.get(1));
lru3.put(2, 2); // evicts key 1
console.log("get(1) -> Expected: -1, Actual:", lru3.get(1));
console.log("get(2) -> Expected: 2, Actual:", lru3.get(2));
console.log("---");

console.log("Test Case 4: Non-existent key");
const lru4 = new LRUCache(2);
console.log("get(999) -> Expected: -1, Actual:", lru4.get(999));
console.log("---");

module.exports = LRUCache;
