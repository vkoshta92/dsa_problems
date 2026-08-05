# Binary Search - Basics

## Binary Search Kya Hai?
Sorted array mein element dhundhne ka O(log n) algorithm. Har step mein search
space aadhi ho jaati hai.

## Template (Inclusive Bounds)

```javascript
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

## Key Points

1. **Array sorted hona chahiye** (ya sorted hai aise treat kar sakte ho)
2. **mid formula:** `Math.floor((left + right) / 2)` ya `left + Math.floor((right - left) / 2)`
3. **Overflow prevention:** `left + Math.floor((right - left) / 2)` use karo
4. **Bounds:** `left <= right` (inclusive) ya `left < right` (exclusive)

## Two Types of Binary Search

### 1. Exact Match
```javascript
// Target dhundho
if (nums[mid] === target) return mid;
if (nums[mid] < target) left = mid + 1;
else right = mid - 1;
```

### 2. Boundary Search (Answer Space)
```javascript
// Minimum/Maximum value dhundho jo condition satisfy kare
while (left < right) {
  const mid = Math.floor((left + right) / 2);
  if (condition(mid)) right = mid;   // answer ya isse chhota
  else left = mid + 1;              // answer isse bada hai
}
return left; // left === right
```

## Common Patterns

### Search in Rotated Sorted Array
```javascript
// Ek half hamesha sorted hota hai
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) return mid;
  if (nums[left] <= nums[mid]) { // left sorted
    if (nums[left] <= target && target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  } else { // right sorted
    if (nums[mid] < target && target <= nums[right]) left = mid + 1;
    else right = mid - 1;
  }
}
```

### Find Minimum in Rotated Array
```javascript
while (left < right) {
  const mid = Math.floor((left + right) / 2);
  if (nums[mid] > nums[right]) left = mid + 1;
  else right = mid;
}
return nums[left];
```

### Answer Space Search (Koko Eating Bananas type)
```javascript
let left = 1, right = maxVal;
while (left < right) {
  const mid = Math.floor((left + right) / 2);
  if (canFinishWith(mid)) right = mid;  // try smaller
  else left = mid + 1;                  // need bigger
}
return left;
```

## When to Use?
- Sorted array hai
- "Minimum maximum" ya "Maximum minimum" type question
- "Smallest/largest value such that condition is met"
- O(n) too slow, O(log n) chahiye
- 2D matrix sorted rows/columns mein

## Interview Tips
- Binary search ka answer space socho: kya value 1 se max tak ho sakti hai?
- `left < right` vs `left <= right`: exclusive vs inclusive
- `right = mid` vs `right = mid - 1`: depends on whether mid is valid answer
- Rotated sorted array = binary search with twist
- "Koko Eating Bananas" type = binary search on answer
