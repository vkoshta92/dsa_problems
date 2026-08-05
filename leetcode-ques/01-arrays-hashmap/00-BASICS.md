# Arrays & HashMap - Basics

## Array Kya Hai?
Array ek contiguous memory block hai jisme same type ke elements store hote hain.
Index se access karte hain (0-based).

```javascript
let arr = [10, 20, 30, 40, 50];
// Index:  0   1   2   3   4
arr[2]; // 30
arr.length; // 5
```

## Array Operations Complexity

| Operation | Average | Worst |
|---|---|---|
| Access by index | O(1) | O(1) |
| Search (unsorted) | O(n) | O(n) |
| Search (sorted) | O(log n) | O(log n) |
| Insert at end | O(1)* | O(n) |
| Insert at middle | O(n) | O(n) |
| Delete at middle | O(n) | O(n) |

*Amortized O(1) for dynamic arrays.

## HashMap Kya Hai?
HashMap key-value pairs store karta hai. Average O(1) mein access hota hai.

```javascript
const map = new Map();
map.set("name", "Rahul");
map.get("name"); // "Rahul"
map.has("name"); // true
map.delete("name");
map.size; // 0

// Object bhi use hota hai but Map better hai
const obj = {};
obj.name = "Rahul";
```

## HashMap vs Object

| Feature | Map | Object |
|---|---|---|
| Key types | Any | String/Symbol only |
| Order | Insertion order | Not guaranteed |
| Size | .size property | Object.keys().length |
| Iteration | .forEach, for...of | for...in |

## JavaScript Array Methods You Must Know

```javascript
// Traversal
for (let i = 0; i < arr.length; i++) {}
for (const val of arr) {}
arr.forEach((val, idx) => {});

// Sorting
arr.sort((a, b) => a - b); // ascending
arr.sort((a, b) => b - a); // descending

// Searching
arr.includes(val); // boolean
arr.indexOf(val); // index or -1
arr.find(val => val > 5); // first match
arr.findIndex(val => val > 5); // index of first match

// Transformations
arr.map(x => x * 2); // new array
arr.filter(x => x > 3); // new array
arr.reduce((acc, x) => acc + x, 0); // single value
arr.flat(); // flatten nested arrays

// Modify
arr.push(val); // add end
arr.pop(); // remove end
arr.unshift(val); // add start
arr.shift(); // remove start
arr.splice(idx, count); // remove from idx
arr.slice(start, end); // subarray (doesn't modify)
```

## Common Patterns

### Frequency Counter
```javascript
// Count occurrences
const freq = {};
for (const val of arr) freq[val] = (freq[val] || 0) + 1;

// Using Map
const freqMap = new Map();
for (const val of arr) freqMap.set(val, (freqMap.get(val) || 0) + 1);
```

### Prefix Sum
```javascript
// Cumulative sum from start
const prefix = [0];
for (let i = 0; i < arr.length; i++) {
  prefix.push(prefix[i] + arr[i]);
}
// prefix[i..j] = prefix[j+1] - prefix[i]
```

### Two Pointer on Sorted Array
```javascript
let left = 0, right = arr.length - 1;
while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === target) return [left, right];
  if (sum < target) left++;
  else right--;
}
```

## Interview Tips
- Interview mein pehle brute force bolo, phir optimize karo
- Edge cases: empty array, single element, all same, all different
- HashMap ka use tab karo jab O(n) search chahiye
- Sorted array hai to binary search ya two pointer socho
- Prefix sum tab useful hai jab subarray sum chahiye
