# Array Problems

<cite>
**Referenced Files in This Document**
- [1_twoSum.js](file://Blind-75/1_twoSum.js)
- [5_maxSubArray.js](file://Blind-75/5_maxSubArray.js)
- [26_mergeIntervals.js](file://Blind-75/26_mergeIntervals.js)
- [27_insertInterval.js](file://Blind-75/27_insertInterval.js)
- [28_nonOverlappingIntervals.js](file://Blind-75/28_nonOverlappingIntervals.js)
- [4_productExceptSelf.js](file://Blind-75/4_productExceptSelf.js)
- [56_searchRotatedArray.js](file://Blind-75/56_searchRotatedArray.js)
- [58_containerWithMostWater.js](file://Blind-75/58_containerWithMostWater.js)
- [59_trappingRainWater.js](file://Blind-75/59_trappingRainWater.js)
- [65_lisBinarySearch.js](file://Blind-75/65_lisBinarySearch.js)
- [66_searchInRotatedSortedArray.js](file://Blind-75/66_searchInRotatedSortedArray.js)
- [67_findMinInRotatedSortedArray.js](file://Blind-75/67_findMinInRotatedSortedArray.js)
- [68_maximumProductSubarray.js](file://Blind-75/68_maximumProductSubarray.js)
- [48_missingNumber.js](file://Blind-75/48_missingNumber.js)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Detailed Component Analysis](#detailed-component-analysis)
6. [Dependency Analysis](#dependency-analysis)
7. [Performance Considerations](#performance-considerations)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Conclusion](#conroduction)

## Introduction
This document focuses on array-based algorithm problems from the Blind-75 collection. It covers fundamental techniques such as two-pointer traversal, sliding window patterns, prefix/suffix computations, and binary search on sorted or rotated arrays. Specific problem types include:
- Two Sum variants (complement search with hash maps)
- Maximum subarray (Kadane’s algorithm)
- Maximum product subarray (tracking min/max)
- Interval merging and insertion (sorting + greedy)
- Rotated array search (modified binary search)
- Container with most water (two pointers)
- Trapping rain water (two pointers with max tracking)
- Longest increasing subsequence (O(n log n) with patience sorting)
- Product of array except self (prefix/suffix products)
- Missing number (XOR bit manipulation)

The guide emphasizes time and space complexity trade-offs, edge cases, and practical validation techniques for large datasets.

## Project Structure
The Blind-75 folder contains standalone JavaScript solutions for classic algorithm problems. Each file documents:
- Problem statement
- Approach rationale
- Complexity analysis
- Implementation highlights
- Example test invocation

```mermaid
graph TB
subgraph "Blind-75"
TS["1_twoSum.js"]
MS["5_maxSubArray.js"]
MI["26_mergeIntervals.js"]
II["27_insertInterval.js"]
NO["28_nonOverlappingIntervals.js"]
PES["4_productExceptSelf.js"]
SRA["56_searchRotatedArray.js"]
CWMW["58_containerWithMostWater.js"]
TRW["59_trappingRainWater.js"]
LIS["65_lisBinarySearch.js"]
SRS["66_searchInRotatedSortedArray.js"]
FMIN["67_findMinInRotatedSortedArray.js"]
MPS["68_maximumProductSubarray.js"]
MN["48_missingNumber.js"]
end
```

**Diagram sources**
- [1_twoSum.js](file://Blind-75/1_twoSum.js#L1-L54)
- [5_maxSubArray.js](file://Blind-75/5_maxSubArray.js#L1-L59)
- [26_mergeIntervals.js](file://Blind-75/26_mergeIntervals.js#L1-L79)
- [27_insertInterval.js](file://Blind-75/27_insertInterval.js#L1-L73)
- [28_nonOverlappingIntervals.js](file://Blind-75/28_nonOverlappingIntervals.js#L1-L74)
- [4_productExceptSelf.js](file://Blind-75/4_productExceptSelf.js#L1-L63)
- [56_searchRotatedArray.js](file://Blind-75/56_searchRotatedArray.js#L1-L78)
- [58_containerWithMostWater.js](file://Blind-75/58_containerWithMostWater.js#L1-L70)
- [59_trappingRainWater.js](file://Blind-75/59_trappingRainWater.js#L1-L76)
- [65_lisBinarySearch.js](file://Blind-75/65_lisBinarySearch.js#L1-L66)
- [66_searchInRotatedSortedArray.js](file://Blind-75/66_searchInRotatedSortedArray.js#L1-L62)
- [67_findMinInRotatedSortedArray.js](file://Blind-75/67_findMinInRotatedSortedArray.js#L1-L51)
- [68_maximumProductSubarray.js](file://Blind-75/68_maximumProductSubarray.js#L1-L71)
- [48_missingNumber.js](file://Blind-75/48_missingNumber.js#L1-L57)

**Section sources**
- [1_twoSum.js](file://Blind-75/1_twoSum.js#L1-L54)
- [5_maxSubArray.js](file://Blind-75/5_maxSubArray.js#L1-L59)
- [26_mergeIntervals.js](file://Blind-75/26_mergeIntervals.js#L1-L79)
- [27_insertInterval.js](file://Blind-75/27_insertInterval.js#L1-L73)
- [28_nonOverlappingIntervals.js](file://Blind-75/28_nonOverlappingIntervals.js#L1-L74)
- [4_productExceptSelf.js](file://Blind-75/4_productExceptSelf.js#L1-L63)
- [56_searchRotatedArray.js](file://Blind-75/56_searchRotatedArray.js#L1-L78)
- [58_containerWithMostWater.js](file://Blind-75/58_containerWithMostWater.js#L1-L70)
- [59_trappingRainWater.js](file://Blind-75/59_trappingRainWater.js#L1-L76)
- [65_lisBinarySearch.js](file://Blind-75/65_lisBinarySearch.js#L1-L66)
- [66_searchInRotatedSortedArray.js](file://Blind-75/66_searchInRotatedSortedArray.js#L1-L62)
- [67_findMinInRotatedSortedArray.js](file://Blind-75/67_findMinInRotatedSortedArray.js#L1-L51)
- [68_maximumProductSubarray.js](file://Blind-75/68_maximumProductSubarray.js#L1-L71)
- [48_missingNumber.js](file://Blind-75/48_missingNumber.js#L1-L57)

## Core Components
- Two Sum (hash map complement search): O(n) time, O(n) space; single pass with map lookups.
- Maximum Subarray (Kadane’s): O(n) time, O(1) space; dynamic programming rolling sum.
- Maximum Product Subarray: O(n) time, O(1) space; track both max and min to handle negatives.
- Merge Intervals: O(n log n) time, O(n) space; sort by start then linear merge.
- Insert Interval: O(n) time, O(n) space; three-phase scan over existing sorted intervals.
- Non-overlapping Intervals (greedy): O(n log n) time, O(1) space; sort by end and greedily keep earliest-ending.
- Product of Array Except Self: O(n) time, O(1) extra space; prefix then suffix pass.
- Search in Rotated Sorted Array: O(log n) time, O(1) space; modified binary search.
- Container With Most Water: O(n) time, O(1) space; two pointers moving the shorter line.
- Trapping Rain Water: O(n) time, O(1) space; two pointers with left/right max tracking.
- LIS (O(n log n)): O(n log n) time, O(n) space; patience-sorting tails with binary search.
- Missing Number (XOR): O(n) time, O(1) space; XOR indices and values with n.

**Section sources**
- [1_twoSum.js](file://Blind-75/1_twoSum.js#L23-L29)
- [5_maxSubArray.js](file://Blind-75/5_maxSubArray.js#L29-L34)
- [68_maximumProductSubarray.js](file://Blind-75/68_maximumProductSubarray.js#L36-L41)
- [26_mergeIntervals.js](file://Blind-75/26_mergeIntervals.js#L35-L43)
- [27_insertInterval.js](file://Blind-75/27_insertInterval.js#L32-L38)
- [28_nonOverlappingIntervals.js](file://Blind-75/28_nonOverlappingIntervals.js#L37-L44)
- [4_productExceptSelf.js](file://Blind-75/4_productExceptSelf.js#L29-L35)
- [56_searchRotatedArray.js](file://Blind-75/56_searchRotatedArray.js#L32-L37)
- [58_containerWithMostWater.js](file://Blind-75/58_containerWithMostWater.js#L33-L38)
- [59_trappingRainWater.js](file://Blind-75/59_trappingRainWater.js#L37-L42)
- [65_lisBinarySearch.js](file://Blind-75/65_lisBinarySearch.js#L36-L41)
- [48_missingNumber.js](file://Blind-75/48_missingNumber.js#L33-L38)

## Architecture Overview
The solutions are self-contained modules with clear separation of concerns:
- Input validation and edge-case handling
- Algorithm-specific loops and conditionals
- Result construction and return

```mermaid
flowchart TD
Start(["Start"]) --> Validate["Validate inputs<br/>and handle edge cases"]
Validate --> Choose["Choose technique:<br/>Two-pointer / Binary Search / DP / Greedy"]
Choose --> Execute["Execute core loop(s)"]
Execute --> Update["Update state variables<br/>(pointers, running totals, counters)"]
Update --> Decide{"Continue?"}
Decide --> |Yes| Execute
Decide --> |No| BuildResult["Build and return result"]
BuildResult --> End(["End"])
```

[No sources needed since this diagram shows conceptual workflow, not actual code structure]

## Detailed Component Analysis

### Two Sum (Hash Map Complement Search)
- Technique: One-pass hash map storing value-to-index mapping; for each element, check if complement exists.
- Complexity: O(n) time, O(n) space.
- Edge cases: Unique indices, no duplicate answers, empty array handled implicitly by loop bounds.

```mermaid
flowchart TD
A["Start"] --> B["Initialize empty map"]
B --> C{"For each index i"}
C --> D["diff = target - nums[i]"]
D --> E{"map.has(diff)?"}
E --> |Yes| F["Return [map.get(diff), i]"]
E --> |No| G["map.set(nums[i], i)"]
G --> C
F --> H["End"]
```

**Diagram sources**
- [1_twoSum.js](file://Blind-75/1_twoSum.js#L32-L49)

**Section sources**
- [1_twoSum.js](file://Blind-75/1_twoSum.js#L1-L54)

### Maximum Subarray (Kadane’s Algorithm)
- Technique: At each index, decide whether to extend the current subarray or start fresh; track global maximum.
- Complexity: O(n) time, O(1) space.
- Edge cases: All-negative arrays, single element.

```mermaid
flowchart TD
S["Start"] --> Init["currentSum = nums[0]; maxSum = nums[0]"]
Init --> Loop{"i from 1 to n-1"}
Loop --> Decide["currentSum = max(nums[i], currentSum + nums[i])"]
Decide --> Update["maxSum = max(maxSum, currentSum)"]
Update --> Loop
Loop --> |Done| R["Return maxSum"]
```

**Diagram sources**
- [5_maxSubArray.js](file://Blind-75/5_maxSubArray.js#L37-L55)

**Section sources**
- [5_maxSubArray.js](file://Blind-75/5_maxSubArray.js#L1-L59)

### Maximum Product Subarray
- Technique: Track both current max and min (to handle negatives); swap roles when encountering negative numbers.
- Complexity: O(n) time, O(1) space.
- Edge cases: Zeros, all positives/negatives.

```mermaid
flowchart TD
S2["Start"] --> Init2["maxProd = minProd = result = nums[0]"]
Init2 --> L2{"i from 1 to n-1"}
L2 --> N2{"nums[i] < 0?"}
N2 --> |Yes| Swap["Swap maxProd and minProd"]
N2 --> |No| U2["maxProd = max(curr, maxProd*curr)<br/>minProd = min(curr, minProd*curr)"]
Swap --> U2
U2 --> Up2["result = max(result, maxProd)"]
Up2 --> L2
L2 --> |Done| R2["Return result"]
```

**Diagram sources**
- [68_maximumProductSubarray.js](file://Blind-75/68_maximumProductSubarray.js#L44-L67)

**Section sources**
- [68_maximumProductSubarray.js](file://Blind-75/68_maximumProductSubarray.js#L1-L71)

### Merge Intervals
- Technique: Sort by start time, then linearly merge overlapping intervals.
- Complexity: O(n log n) time, O(n) space.
- Edge cases: Empty input, already sorted, no overlaps.

```mermaid
flowchart TD
M0["Start"] --> M1{"intervals.length == 0?"}
M1 --> |Yes| M00["Return []"]
M1 --> |No| M2["Sort by start"]
M2 --> M3["current = first interval"]
M3 --> M4{"for i=1..n-1"}
M4 --> M5{"next.start <= current.end?"}
M5 --> |Yes| M6["current.end = max(current.end, next.end)"]
M5 --> |No| M7["Push current to result<br/>current = next"]
M6 --> M4
M7 --> M4
M4 --> |Done| M8["Push final current to result"]
M8 --> M9["Return result"]
```

**Diagram sources**
- [26_mergeIntervals.js](file://Blind-75/26_mergeIntervals.js#L46-L74)

**Section sources**
- [26_mergeIntervals.js](file://Blind-75/26_mergeIntervals.js#L1-L79)

### Insert Interval
- Technique: Three-phase scan—add non-overlapping before, merge overlaps, add remainder.
- Complexity: O(n) time, O(n) space.
- Edge cases: New interval before/after all, fully engulfing others.

```mermaid
flowchart TD
I0["Start"] --> I1["result = []"]
I1 --> I2["Phase 1: add intervals ending before new start"]
I2 --> I3["Phase 2: merge overlapping intervals with new"]
I3 --> I4["Add merged new interval to result"]
I4 --> I5["Phase 3: add remaining intervals"]
I5 --> I6["Return result"]
```

**Diagram sources**
- [27_insertInterval.js](file://Blind-75/27_insertInterval.js#L41-L68)

**Section sources**
- [27_insertInterval.js](file://Blind-75/27_insertInterval.js#L1-L73)

### Non-overlapping Intervals (Greedy by End Time)
- Technique: Sort by end time; keep the interval that ends earliest among overlaps.
- Complexity: O(n log n) time, O(1) space.
- Edge cases: Empty input, single interval.

```mermaid
flowchart TD
G0["Start"] --> G1{"n == 0?"}
G1 --> |Yes| G00["Return 0"]
G1 --> |No| G2["Sort by end time"]
G2 --> G3["prevEnd = first.end; count = 0"]
G3 --> G4{"i from 1 to n-1"}
G4 --> G5{"current.start < prevEnd?"}
G5 --> |Yes| G6["count++"]
G5 --> |No| G7["prevEnd = current.end"]
G6 --> G4
G7 --> G4
G4 --> |Done| G8["Return count"]
```

**Diagram sources**
- [28_nonOverlappingIntervals.js](file://Blind-75/28_nonOverlappingIntervals.js#L47-L69)

**Section sources**
- [28_nonOverlappingIntervals.js](file://Blind-75/28_nonOverlappingIntervals.js#L1-L74)

### Product of Array Except Self (Prefix/Suffix)
- Technique: Two passes—prefix products then multiply by suffix products.
- Complexity: O(n) time, O(1) extra space (excluding output).
- Edge cases: Zeros handled naturally by multiplicative identity.

```mermaid
flowchart TD
P0["Start"] --> P1["result = [1,...]"]
P1 --> P2["Left pass: result[i] = leftProduct<br/>leftProduct *= nums[i]"]
P2 --> P3["Right pass: result[i] *= rightProduct<br/>rightProduct *= nums[i]"]
P3 --> P4["Return result"]
```

**Diagram sources**
- [4_productExceptSelf.js](file://Blind-75/4_productExceptSelf.js#L38-L59)

**Section sources**
- [4_productExceptSelf.js](file://Blind-75/4_productExceptSelf.js#L1-L63)

### Search in Rotated Sorted Array (Modified Binary Search)
- Technique: Determine which half is sorted, check if target lies in that half.
- Complexity: O(log n) time, O(1) space.
- Edge cases: Duplicates (see note), target not present.

```mermaid
flowchart TD
B0["Start"] --> B1["left=0, right=n-1"]
B1 --> B2{"left <= right?"}
B2 --> |No| B3["Return -1"]
B2 --> |Yes| B4["mid = floor((left+right)/2)"]
B4 --> B5{"nums[mid] == target?"}
B5 --> |Yes| B6["Return mid"]
B5 --> |No| B7{"nums[left] <= nums[mid]?"}
B7 --> |Yes| B8{"target in [nums[left], nums[mid])?"}
B8 --> |Yes| B9["right = mid - 1"]
B8 --> |No| B10["left = mid + 1"]
B7 --> |No| B11{"target in (nums[mid], nums[right]]?"}
B11 --> |Yes| B12["left = mid + 1"]
B11 --> |No| B13["right = mid - 1"]
B9 --> B1
B10 --> B1
B12 --> B1
B13 --> B1
```

**Diagram sources**
- [56_searchRotatedArray.js](file://Blind-75/56_searchRotatedArray.js#L42-L74)
- [66_searchInRotatedSortedArray.js](file://Blind-75/66_searchInRotatedSortedArray.js#L27-L58)

**Section sources**
- [56_searchRotatedArray.js](file://Blind-75/56_searchRotatedArray.js#L1-L78)
- [66_searchInRotatedSortedArray.js](file://Blind-75/66_searchInRotatedSortedArray.js#L1-L62)

### Container With Most Water (Two Pointers)
- Technique: Start with widest container; move the pointer with smaller height.
- Complexity: O(n) time, O(1) space.
- Edge cases: Multiple equal heights, extreme disparities.

```mermaid
flowchart TD
W0["Start"] --> W1["left=0, right=n-1, maxWater=0"]
W1 --> W2{"left < right?"}
W2 --> |No| W3["Return maxWater"]
W2 --> |Yes| W4["h = min(height[left], height[right])"]
W4 --> W5["w = right - left"]
W5 --> W6["maxWater = max(maxWater, h*w)"]
W6 --> W7{"height[left] < height[right]?"}
W7 --> |Yes| W8["left++"]
W7 --> |No| W9["right--"]
W8 --> W1
W9 --> W1
```

**Diagram sources**
- [58_containerWithMostWater.js](file://Blind-75/58_containerWithMostWater.js#L41-L66)

**Section sources**
- [58_containerWithMostWater.js](file://Blind-75/58_containerWithMostWater.js#L1-L70)

### Trapping Rain Water (Two Pointers with Max Tracking)
- Technique: Use left/right pointers and track leftMax/rightMax; process the side with smaller max.
- Complexity: O(n) time, O(1) space.
- Edge cases: Plateau regions, zeros at boundaries.

```mermaid
flowchart TD
T0["Start"] --> T1["left=0, right=n-1, leftMax=0, rightMax=0, water=0"]
T1 --> T2{"left < right?"}
T2 --> |No| T3["Return water"]
T2 --> |Yes| T4{"height[left] < height[right]?"}
T4 --> |Yes| T5["leftMax = max(leftMax, height[left])<br/>water += leftMax - height[left]<br/>left++"]
T4 --> |No| T6["rightMax = max(rightMax, height[right])<br/>water += rightMax - height[right]<br/>right--"]
T5 --> T1
T6 --> T1
```

**Diagram sources**
- [59_trappingRainWater.js](file://Blind-75/59_trappingRainWater.js#L45-L72)

**Section sources**
- [59_trappingRainWater.js](file://Blind-75/59_trappingRainWater.js#L1-L76)

### Longest Increasing Subsequence (O(n log n))
- Technique: Maintain tails where tails[i] is the smallest ending element of all increasing subsequences of length i+1; binary search insertion point.
- Complexity: O(n log n) time, O(n) space.
- Edge cases: Duplicates (strictly increasing), empty array.

```mermaid
flowchart TD
L0["Start"] --> L1["tails = []"]
L1 --> L2{"For each num"}
L2 --> L3["Binary search pos in tails"]
L3 --> L4{"pos == tails.length?"}
L4 --> |Yes| L5["Append num"]
L4 --> |No| L6["Replace tails[pos] with num"]
L5 --> L2
L6 --> L2
L2 --> |Done| L7["Return tails.length"]
```

**Diagram sources**
- [65_lisBinarySearch.js](file://Blind-75/65_lisBinarySearch.js#L44-L62)

**Section sources**
- [65_lisBinarySearch.js](file://Blind-75/65_lisBinarySearch.js#L1-L66)

### Find Minimum in Rotated Sorted Array
- Technique: Binary search comparing mid with right; converge to rotation pivot.
- Complexity: O(log n) time, O(1) space.
- Edge cases: No rotation, duplicates.

```mermaid
flowchart TD
F0["Start"] --> F1["left=0, right=n-1"]
F1 --> F2{"left < right?"}
F2 --> |No| F3["Return nums[left]"]
F2 --> |Yes| F4["mid = floor((left+right)/2)"]
F4 --> F5{"nums[mid] > nums[right]?"}
F5 --> |Yes| F6["left = mid + 1"]
F5 --> |No| F7["right = mid"]
F6 --> F1
F7 --> F1
```

**Diagram sources**
- [67_findMinInRotatedSortedArray.js](file://Blind-75/67_findMinInRotatedSortedArray.js#L27-L47)

**Section sources**
- [67_findMinInRotatedSortedArray.js](file://Blind-75/67_findMinInRotatedSortedArray.js#L1-L51)

### Missing Number (XOR Bit Manipulation)
- Technique: XOR all indices 0..n-1 with all values; XOR with n to isolate missing number.
- Complexity: O(n) time, O(1) space.
- Edge cases: Missing 0 or n.

```mermaid
flowchart TD
X0["Start"] --> X1["xor = 0"]
X1 --> X2{"For i in 0..n-1"}
X2 --> X3["xor ^= i ^ nums[i]"]
X3 --> X2
X2 --> |Done| X4["xor ^= n; return xor"]
```

**Diagram sources**
- [48_missingNumber.js](file://Blind-75/48_missingNumber.js#L41-L53)

**Section sources**
- [48_missingNumber.js](file://Blind-75/48_missingNumber.js#L1-L57)

## Dependency Analysis
These array problems are largely independent modules. Some share common patterns:
- Two-pointer techniques appear in container water and trapping rain water.
- Binary search appears in rotated array search and LIS.
- Dynamic programming appears in max subarray and max product subarray.
- Greedy appears in merge and non-overlapping intervals.

```mermaid
graph LR
TS["Two Sum"] --- DP["Kadane's / Max Product"]
DP --- MSS["Max Subarray"]
DP --- MPS["Max Product Subarray"]
BS["Rotated Search / LIS"] --- TP["Two Pointers"]
TP --- CWMW["Container With Most Water"]
TP --- TRW["Trapping Rain Water"]
GREEDY["Merge / Non-overlapping"] --- SORT["Sorting"]
PES["Product Except Self"] --- PREFIX["Prefix/Suffix"]
```

[No sources needed since this diagram shows conceptual relationships, not direct code imports]

## Performance Considerations
- Prefer O(n) or O(n log n) solutions for large datasets; avoid O(n^2) nested loops.
- Use constant extra space when possible (e.g., two pointers, rolling variables).
- For binary search variants, ensure loop invariants and boundary updates prevent infinite loops.
- For prefix/suffix techniques, process arrays in-order and reverse-order to avoid redundant scans.
- Handle duplicates carefully in rotated array searches to maintain O(log n) behavior.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
Common pitfalls and remedies:
- Off-by-one errors in two-pointer loops; ensure loop conditions like left < right or left <= right match intent.
- Not resetting or updating running variables (e.g., currentSum, leftMax, rightMax) correctly.
- Mis-handling edge cases: empty arrays, single-element arrays, all-negative arrays, duplicates in rotated arrays.
- Incorrect merge conditions for intervals; verify overlap checks and endpoint updates.
- For LIS with binary search, ensure correct insertion point and replacement strategy.

**Section sources**
- [58_containerWithMostWater.js](file://Blind-75/58_containerWithMostWater.js#L47-L63)
- [59_trappingRainWater.js](file://Blind-75/59_trappingRainWater.js#L54-L69)
- [26_mergeIntervals.js](file://Blind-75/26_mergeIntervals.js#L61-L67)
- [28_nonOverlappingIntervals.js](file://Blind-75/28_nonOverlappingIntervals.js#L60-L65)
- [56_searchRotatedArray.js](file://Blind-75/56_searchRotatedArray.js#L47-L70)
- [65_lisBinarySearch.js](file://Blind-75/65_lisBinarySearch.js#L51-L55)

## Conclusion
The Blind-75 array problems demonstrate powerful, reusable patterns:
- Two-pointer techniques for linear-time traversals
- Binary search adaptations for sorted/rotated contexts
- Dynamic programming for optimal substructure (max subarray/product)
- Greedy strategies for interval scheduling
- Prefix/suffix computations for constraint-based products
- Bit manipulation for in-place uniqueness problems

Adopting these patterns systematically improves correctness, readability, and performance across diverse array challenges.