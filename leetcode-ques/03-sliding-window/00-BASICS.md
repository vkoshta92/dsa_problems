# Sliding Window - Basics

## Sliding Window Kya Hai?
Array/string ke andar ek "window" (subarray/substring) maintain karte hain jo
ek position slide hoti hai. Har step mein window ke andar kuch calculation
update hota hai without recalculation.

## Two Types

### 1. Fixed Size Window
```javascript
// Window size k diya hai
let windowSum = 0;
for (let i = 0; i < k; i++) windowSum += arr[i]; // first window

for (let i = k; i < arr.length; i++) {
  windowSum += arr[i] - arr[i - k]; // slide: add new, remove old
  // process windowSum
}
```
Example: Max sum subarray of size k.

### 2. Variable Size Window
```javascript
let left = 0;
let windowSum = 0;
for (let right = 0; right < arr.length; right++) {
  windowSum += arr[right];  // expand window
  while (windowSum > target) {
    windowSum -= arr[left];  // shrink window
    left++;
  }
  // process window [left..right]
}
```
Example: Smallest subarray with sum >= target.

## When to Use?
- Contiguous subarray/substring dhundhna hai
- "Minimum/Maximum length" ya "Minimum/Maximum sum" poocha hai
- "At most k" type ka constraint hai
- Character frequency track karni hai substring mein

## Template

```javascript
function slidingWindow(s) {
  const window = {}; // frequency map or any state
  let left = 0;
  let answer = 0;
  
  for (let right = 0; right < s.length; right++) {
    // 1. Add s[right] to window
    const char = s[right];
    window[char] = (window[char] || 0) + 1;
    
    // 2. Shrink window if invalid
    while (WINDOW_IS_INVALID) {
      const leftChar = s[left];
      window[leftChar]--;
      left++;
    }
    
    // 3. Update answer
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}
```

## Common Problems Pattern

| Problem Type | Window | Condition |
|---|---|---|
| Max/Min subarray sum | Fixed/Variable | sum constraint |
| Longest substring unique chars | Variable | no duplicates |
| Min window with all required chars | Variable | all chars covered |
| Max avg subarray | Fixed | given size k |

## Interview Tips
- "Contiguous" ya "subarray" keyword = sliding window
- Fixed size = simple template
- Variable size = while loop se shrink karo
- Character frequency = Map ya array[26] use karo
- "Minimum window" = variable window + valid check
