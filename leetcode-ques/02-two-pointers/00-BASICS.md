# Two Pointers - Basics

## Two Pointer Technique Kya Hai?
Do pointers se array/list ko ek saath traverse karte hain. Ek direction mein ya
opposite directions mein. Time O(n) hota hai instead of O(n^2).

## Two Types

### 1. Opposite Direction (Inward)
```javascript
let left = 0;
let right = arr.length - 1;
while (left < right) {
  // process arr[left] and arr[right]
  if (condition) left++;
  else right--;
}
```
Use: Sorted array mein pairs dhundna, palindrome check, container problems.

### 2. Same Direction (Fast/Slow)
```javascript
let slow = 0;
for (let fast = 0; fast < arr.length; fast++) {
  if (condition) {
    arr[slow] = arr[fast];
    slow++;
  }
}
// slow = new length
```
Use: Remove duplicates, partition array, move zeroes.

## When to Use?
- Array sorted hai
- Pair/triplet dhundna hai sum ke saath
- Palindrome check karna hai
- In-place modification chahiye
- Sliding window nahi lag raha

## Common Patterns

### Slow-Fast Pointer (Linked List / Array)
```javascript
// Cycle detection (Floyd's algorithm)
let slow = head;
let fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) break; // cycle exists
}
```

### Two Pointer on String
```javascript
function isPalindrome(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++; right--;
  }
  return true;
}
```

### Partition Problem
```javascript
// Move all zeros to end
let slow = 0;
for (let fast = 0; fast < nums.length; fast++) {
  if (nums[fast] !== 0) {
    [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
    slow++;
  }
}
```

## Interview Tips
- Sorted array + target sum = Two Pointer
- "In-place" keyword aaye = Slow-Fast pointer socho
- "Remove duplicates" = Slow-Fast
- "Container" ya "Area" = Opposite direction
- Time O(n), Space O(1) rakhna hai = Two Pointer
