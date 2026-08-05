# Tries & Design - Basics

## Trie Kya Hai?
Prefix tree. Har character ek node hai. Strings efficiently store aur search
karne ke liye use hota hai.

```javascript
class TrieNode {
  constructor() {
    this.children = new Map(); // char -> TrieNode
    this.isWord = false;
  }
}

class Trie {
  constructor() { this.root = new TrieNode(); }
  
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isWord = true;
  }
  
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) return false;
      node = node.children.get(char);
    }
    return node.isWord;
  }
  
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) return false;
      node = node.children.get(char);
    }
    return true;
  }
}
```

## Trie Complexity

| Operation | Time | Space |
|---|---|---|
| Insert | O(L) | O(L) |
| Search | O(L) | - |
| Prefix Search | O(L) | - |

L = word length.

## Trie Use Cases
1. **Autocomplete** - prefix se saare words dhundho
2. **Spell checker** - word exist karta hai ya nahi
3. **Word Search II** - grid mein words dhundho
4. **Longest common prefix** - Trie banake traverse karo

## Design Problems Pattern

### LRU Cache (Most Asked)
```javascript
// HashMap + Doubly Linked List
// O(1) get and put
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // key -> node
    // DLL: head <-> node1 <-> node2 <-> ... <-> tail
    // Most recent near head, LRU near tail
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    // Move to head (most recent)
    // Return value
  }
  put(key, value) {
    // If exists, update and move to head
    // If full, remove tail (LRU)
    // Add to head
  }
}
```

### Min Stack / Max Stack
```javascript
// Two stacks ya auxiliary array
class MinStack {
  constructor() { this.values = []; this.minimums = []; }
  push(val) {
    this.values.push(val);
    this.minimums.push(Math.min(val, this.getMin()));
  }
  pop() { this.minimums.pop(); return this.values.pop(); }
  getMin() { return this.minimums[this.minimums.length - 1]; }
}
```

### Design Twitter / Social Network
```javascript
// HashMap for users, posts, followers
// Timestamp for ordering
// Merge sorted feeds for timeline
```

### Randomized Set
```javascript
// Array + HashMap for O(1) insert/delete/getRandom
// Swap with last for O(1) delete
class RandomizedSet {
  constructor() { this.values = []; this.indices = new Map(); }
  insert(val) {
    if (this.indices.has(val)) return false;
    this.indices.set(val, this.values.length);
    this.values.push(val);
    return true;
  }
  remove(val) {
    if (!this.indices.has(val)) return false;
    const idx = this.indices.get(val);
    const last = this.values[this.values.length - 1];
    this.values[idx] = last;
    this.indices.set(last, idx);
    this.values.pop();
    this.indices.delete(val);
    return true;
  }
  getRandom() {
    return this.values[Math.floor(Math.random() * this.values.length)];
  }
}
```

## System Design Questions (FAANG)

| Question | Key Concepts |
|---|---|
| LRU Cache | DLL + HashMap |
| LFU Cache | DLL + Frequency map |
| Design Twitter | Post, Follow, Feed |
| Design Phone Directory | Queue + Set |
| Design File System | Trie |
| Design Search Autocomplete | Trie + Top K |

## Interview Tips
- Design problems mein pehle API define karo
- Time complexity constraints dekho (O(1)? O(log n)?)
- LRU Cache = HashMap + DLL (most common design question)
- Trie = prefix problems ka best friend
- Production considerations: thread safety, persistence, scalability
