# Linked List - Basics

## Linked List Kya Hai?
Linear data structure jisme nodes hain. Har node mein data aur next ka pointer hota hai.
Array ke unlike, memory contiguous nahi hoti.

```javascript
// Node definition
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Simple linked list: 1 -> 2 -> 3 -> null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
```

## Types
1. **Singly Linked List** - har node sirf next point karta hai
2. **Doubly Linked List** - prev aur next dono pointers
3. **Circular Linked List** - last node head point karta hai

## Traversal
```javascript
let current = head;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
```

## Key Operations

### Insert at Beginning
```javascript
const newNode = new ListNode(val);
newNode.next = head;
head = newNode;
```

### Insert at End
```javascript
const newNode = new ListNode(val);
if (!head) { head = newNode; return; }
let current = head;
while (current.next) current = current.next;
current.next = newNode;
```

### Delete a Node
```javascript
// Delete node with given value
if (head.val === val) { head = head.next; return; }
let prev = head;
while (prev.next && prev.next.val !== val) prev = prev.next;
if (prev.next) prev.next = prev.next.next;
```

## Important Patterns

### 1. Dummy Node (Sentinel)
```javascript
// Simplifies edge cases (head deletion)
const dummy = new ListNode(0);
dummy.next = head;
// ... process ...
return dummy.next;
```

### 2. Two Pointer / Fast-Slow
```javascript
// Find middle of linked list
let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
}
// slow is at middle

// Detect cycle
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) return true; // cycle exists
}
```

### 3. Reverse Linked List
```javascript
let prev = null;
let current = head;
while (current) {
  const next = current.next;
  current.next = prev;
  prev = current;
  current = next;
}
return prev; // new head
```

### 4. Merge Two Sorted Lists
```javascript
const dummy = new ListNode(0);
let tail = dummy;
while (l1 && l2) {
  if (l1.val <= l2.val) { tail.next = l1; l1 = l1.next; }
  else { tail.next = l2; l2 = l2.next; }
  tail = tail.next;
}
tail.next = l1 || l2;
return dummy.next;
```

## Linked List vs Array

| Feature | Array | Linked List |
|---|---|---|
| Access by index | O(1) | O(n) |
| Search | O(log n) sorted | O(n) |
| Insert at beginning | O(n) | O(1) |
| Insert at end | O(1)* | O(n) |
| Delete | O(n) | O(1) with pointer |
| Memory | Contiguous | Scattered |
| Cache friendly | Yes | No |

## Interview Tips
- **Dummy node** use karo head deletion ya merge problems mein
- **Slow-fast pointer** se middle, cycle, intersection milta hai
- **Reverse in groups** = reverse karke pointers adjust karo
- Interview mein linked list hamesha class/function mein banana hota hai
- Edge cases: empty list, single node, cycle exists
- JavaScript mein reference type hota hai, so `node.next = newNode` works directly
