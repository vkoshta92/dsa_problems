# String Processing

<cite>
**Referenced Files in This Document**
- [51_validParentheses.js](file://Blind-75/51_validParentheses.js)
- [53_evalRPN.js](file://Blind-75/53_evalRPN.js)
- [7_validPalindrome.js](file://Blind-75/7_validPalindrome.js)
- [70_longestPalindromicSubstring.js.js](file://Blind-75/70_longestPalindromicSubstring.js.js)
- [10_groupAnagrams.js](file://Blind-75/10_groupAnagrams.js)
- [6_longestSubstring.js](file://Blind-75/6_longestSubstring.js)
- [9_minWindowSubstring.js](file://Blind-75/9_minWindowSubstring.js)
- [8_characterReplacement.js](file://Blind-75/8_characterReplacement.js)
- [54_dailyTemperatures.js](file://Blind-75/54_dailyTemperatures.js)
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
9. [Conclusion](#conclusion)

## Introduction
This document focuses on string processing and manipulation techniques implemented in the repository. It covers pattern recognition, validation, and algorithmic string operations with emphasis on:
- Stack-based validation (parentheses)
- Sliding window approaches (longest substring without repeating characters, minimum window substring, character replacement)
- Character frequency analysis (grouping anagrams)
- Palindrome verification and expansion techniques
- Expression evaluation using stacks (Reverse Polish Notation)
- Advanced concepts such as monotonic stacks (daily temperatures)

The goal is to provide a structured understanding of each technique, its implementation patterns, complexity characteristics, and practical guidance for edge cases and optimizations.

## Project Structure
The relevant string-processing implementations are primarily located under the Blind-75 directory, each problem solved with clear comments, approach explanations, and complexity analysis. Representative files include:
- Parentheses validation
- Anagram grouping
- Palindrome checks and longest palindromic substring
- Sliding window problems (longest substring without repeats, minimum window substring, character replacement)
- Expression evaluation (RPN)
- Monotonic stack (daily temperatures)

```mermaid
graph TB
subgraph "String Problems"
P["Valid Parentheses<br/>(51_validParentheses.js)"]
A["Group Anagrams<br/>(10_groupAnagrams.js)"]
PAL["Valid Palindrome<br/>(7_validPalindrome.js)"]
LPS["Longest Palindromic Substring<br/>(70_longestPalindromicSubstring.js.js)"]
LSW["Longest Substring Without Repeating Characters<br/>(6_longestSubstring.js)"]
MWS["Minimum Window Substring<br/>(9_minWindowSubstring.js)"]
CR["Character Replacement<br/>(8_characterReplacement.js)"]
RPN["Evaluate RPN<br/>(53_evalRPN.js)"]
DT["Daily Temperatures (Monotonic Stack)<br/>(54_dailyTemperatures.js)"]
end
```

**Section sources**
- [51_validParentheses.js](file://Blind-75/51_validParentheses.js#L1-L81)
- [10_groupAnagrams.js](file://Blind-75/10_groupAnagrams.js#L1-L64)
- [7_validPalindrome.js](file://Blind-75/7_validPalindrome.js#L1-L54)
- [70_longestPalindromicSubstring.js.js](file://Blind-75/70_longestPalindromicSubstring.js.js#L1-L77)
- [6_longestSubstring.js](file://Blind-75/6_longestSubstring.js#L1-L74)
- [9_minWindowSubstring.js](file://Blind-75/9_minWindowSubstring.js#L1-L79)
- [8_characterReplacement.js](file://Blind-75/8_characterReplacement.js#L1-L71)
- [53_evalRPN.js](file://Blind-75/53_evalRPN.js#L1-L72)
- [54_dailyTemperatures.js](file://Blind-75/54_dailyTemperatures.js#L1-L69)

## Core Components
This section highlights the primary string-processing techniques and their representative implementations.

- Stack-based validation (parentheses)
  - Uses a stack to match opening and closing brackets with a mapping of closing to opening brackets. Complexity: time O(n), space O(n).
  - Implementation reference: [isValid](file://Blind-75/51_validParentheses.js#L48-L76)

- Sliding window with hash set (longest substring without repeating characters)
  - Maintains a set of characters in the current window and shrinks from the left upon encountering duplicates. Complexity: time O(n), space O(min(m,n)).
  - Implementation reference: [lengthOfLongestSubstring](file://Blind-75/6_longestSubstring.js#L42-L70)

- Sliding window with frequency map (minimum window substring)
  - Tracks required characters via a frequency map and minimizes the window when all required characters are present. Complexity: time O(n+m), space O(k).
  - Implementation reference: [minWindow](file://Blind-75/9_minWindowSubstring.js#L40-L75)

- Sliding window with frequency map (character replacement)
  - Ensures (window length - max frequency) ≤ k by adjusting the window dynamically. Complexity: time O(n), space O(1).
  - Implementation reference: [characterReplacement](file://Blind-75/8_characterReplacement.js#L41-L67)

- Character frequency analysis (group anagrams)
  - Groups anagrams by sorting characters to form keys in a hash map. Complexity: time O(n·k log k), space O(n·k).
  - Implementation reference: [groupAnagrams](file://Blind-75/10_groupAnagrams.js#L41-L60)

- Palindrome validation and expansion
  - Two-pointer approach for cleaned alphanumeric strings and expand-around-center for longest palindromic substring. Complexity: validation O(n), longest palindrome O(n²), space O(1) for expansion.
  - Implementation references:
    - [isPalindrome](file://Blind-75/7_validPalindrome.js#L35-L50)
    - [longestPalindrome](file://Blind-75/70_longestPalindromicSubstring.js.js#L43-L72)

- Expression evaluation (RPN)
  - Uses a stack to evaluate postfix expressions with truncation towards zero for division. Complexity: time O(n), space O(n).
  - Implementation reference: [evalRPN](file://Blind-75/53_evalRPN.js#L43-L68)

- Monotonic stack (daily temperatures)
  - Maintains a decreasing stack of indices to compute the next warmer day efficiently. Complexity: time O(n), space O(n).
  - Implementation reference: [dailyTemperatures](file://Blind-75/54_dailyTemperatures.js#L45-L64)

**Section sources**
- [51_validParentheses.js](file://Blind-75/51_validParentheses.js#L37-L43)
- [6_longestSubstring.js](file://Blind-75/6_longestSubstring.js#L31-L39)
- [9_minWindowSubstring.js](file://Blind-75/9_minWindowSubstring.js#L29-L37)
- [8_characterReplacement.js](file://Blind-75/8_characterReplacement.js#L32-L38)
- [10_groupAnagrams.js](file://Blind-75/10_groupAnagrams.js#L29-L38)
- [7_validPalindrome.js](file://Blind-75/7_validPalindrome.js#L24-L32)
- [70_longestPalindromicSubstring.js.js](file://Blind-75/70_longestPalindromicSubstring.js.js#L34-L40)
- [53_evalRPN.js](file://Blind-75/53_evalRPN.js#L34-L41)
- [54_dailyTemperatures.js](file://Blind-75/54_dailyTemperatures.js#L37-L42)

## Architecture Overview
The solutions are self-contained functions with minimal coupling. Each file encapsulates:
- Problem statement and approach
- Implementation logic
- Complexity analysis
- Example usage

```mermaid
graph TB
V["Valid Parentheses<br/>(51_validParentheses.js)"]
G["Group Anagrams<br/>(10_groupAnagrams.js)"]
VP["Valid Palindrome<br/>(7_validPalindrome.js)"]
LP["Longest Palindromic Substring<br/>(70_longestPalindromicSubstring.js.js)"]
LS["Longest Substring Without Repeating Characters<br/>(6_longestSubstring.js)"]
MW["Minimum Window Substring<br/>(9_minWindowSubstring.js)"]
CR["Character Replacement<br/>(8_characterReplacement.js)"]
RPN["Evaluate RPN<br/>(53_evalRPN.js)"]
DS["Daily Temperatures<br/>(54_dailyTemperatures.js)"]
V --> |"Uses stack"| V
G --> |"Uses map/set"| G
VP --> |"Two pointers"| VP
LP --> |"Expand around center"| LP
LS --> |"Sliding window + set"| LS
MW --> |"Sliding window + map"| MW
CR --> |"Sliding window + map"| CR
RPN --> |"Stack"| RPN
DS --> |"Monotonic stack"| DS
```

**Diagram sources**
- [51_validParentheses.js](file://Blind-75/51_validParentheses.js#L48-L76)
- [10_groupAnagrams.js](file://Blind-75/10_groupAnagrams.js#L41-L60)
- [7_validPalindrome.js](file://Blind-75/7_validPalindrome.js#L35-L50)
- [70_longestPalindromicSubstring.js.js](file://Blind-75/70_longestPalindromicSubstring.js.js#L43-L72)
- [6_longestSubstring.js](file://Blind-75/6_longestSubstring.js#L42-L70)
- [9_minWindowSubstring.js](file://Blind-75/9_minWindowSubstring.js#L40-L75)
- [8_characterReplacement.js](file://Blind-75/8_characterReplacement.js#L41-L67)
- [53_evalRPN.js](file://Blind-75/53_evalRPN.js#L43-L68)
- [54_dailyTemperatures.js](file://Blind-75/54_dailyTemperatures.js#L45-L64)

## Detailed Component Analysis

### Parentheses Validation (Stack-based)
- Approach: Use a stack to store opening brackets and a mapping for closing-to-opening bracket matching. At the end, the stack must be empty.
- Key steps:
  - Push opening brackets onto the stack.
  - For each closing bracket, verify the stack is not empty and the top matches the expected opening bracket.
  - Return whether the stack is empty after processing the entire string.
- Complexity:
  - Time: O(n)
  - Space: O(n)

```mermaid
flowchart TD
Start(["Start"]) --> Init["Initialize stack and mapping"]
Init --> Loop{"For each character"}
Loop --> IsOpen{"Opening bracket?"}
IsOpen --> |Yes| Push["Push to stack"]
IsOpen --> |No| CheckEmpty{"Stack empty?"}
CheckEmpty --> |Yes| ReturnFalse["Return false"]
CheckEmpty --> |No| PopTop["Pop top and compare"]
PopTop --> Match{"Matches mapping?"}
Match --> |No| ReturnFalse
Match --> |Yes| NextChar["Next character"]
NextChar --> Loop
Loop --> EndCheck{"After loop"}
EndCheck --> Empty{"Stack empty?"}
Empty --> |Yes| True["Return true"]
Empty --> |No| False["Return false"]
```

**Diagram sources**
- [51_validParentheses.js](file://Blind-75/51_validParentheses.js#L48-L76)

**Section sources**
- [51_validParentheses.js](file://Blind-75/51_validParentheses.js#L1-L81)

### Group Anagrams (Character Frequency Analysis)
- Approach: Normalize each string by sorting its characters to form a canonical key. Group all strings sharing the same key.
- Key steps:
  - Iterate through the input array.
  - Compute the sorted key for each string.
  - Append the original string to the corresponding group in a map.
  - Return grouped arrays.
- Complexity:
  - Time: O(n·k log k)
  - Space: O(n·k)

```mermaid
flowchart TD
Start(["Start"]) --> Init["Initialize map"]
Init --> ForEach["For each string"]
ForEach --> SortKey["Sort characters to form key"]
SortKey --> HasKey{"Map has key?"}
HasKey --> |No| CreateGroup["Create new group"]
HasKey --> |Yes| Append["Append to existing group"]
CreateGroup --> Next["Next string"]
Append --> Next
Next --> Done{"All processed?"}
Done --> |No| ForEach
Done --> |Yes| Return["Return grouped values"]
```

**Diagram sources**
- [10_groupAnagrams.js](file://Blind-75/10_groupAnagrams.js#L41-L60)

**Section sources**
- [10_groupAnagrams.js](file://Blind-75/10_groupAnagrams.js#L1-L64)

### Valid Palindrome (Two Pointers)
- Approach: Clean the string to alphanumeric lowercase, then use two pointers from both ends moving inward.
- Key steps:
  - Clean the input string.
  - Initialize left and right pointers.
  - Move pointers inward while comparing characters.
  - Return true if all comparisons match.
- Complexity:
  - Time: O(n)
  - Space: O(n) for the cleaned string; can be O(1) with in-place checks.

```mermaid
flowchart TD
Start(["Start"]) --> Clean["Clean string to alphanumeric lowercase"]
Clean --> Init["left=0, right=n-1"]
Init --> Compare{"left < right?"}
Compare --> |No| True["Return true"]
Compare --> |Yes| Match{"s[left] === s[right]?"}
Match --> |No| False["Return false"]
Match --> |Yes| Move["left++, right--"]
Move --> Compare
```

**Diagram sources**
- [7_validPalindrome.js](file://Blind-75/7_validPalindrome.js#L35-L50)

**Section sources**
- [7_validPalindrome.js](file://Blind-75/7_validPalindrome.js#L1-L54)

### Longest Palindromic Substring (Expand Around Center)
- Approach: For each center (odd and even), expand outward while characters match and track the maximum length.
- Key steps:
  - Handle edge case for empty string.
  - Define expand helper to update global max length and start index.
  - Try centers at each index and between indices.
- Complexity:
  - Time: O(n²)
  - Space: O(1)

```mermaid
flowchart TD
Start(["Start"]) --> Edge{"Length < 2?"}
Edge --> |Yes| ReturnS["Return s"]
Edge --> |No| Init["start=0, maxLen=1"]
Init --> Loop["For i in 0..n-1"]
Loop --> ExpandOdd["expand(i, i)"]
ExpandOdd --> ExpandEven["expand(i, i+1)"]
ExpandEven --> NextI["i++"]
NextI --> Loop
Loop --> Return["Return s[start:start+maxLen]"]
```

**Diagram sources**
- [70_longestPalindromicSubstring.js.js](file://Blind-75/70_longestPalindromicSubstring.js.js#L43-L72)

**Section sources**
- [70_longestPalindromicSubstring.js.js](file://Blind-75/70_longestPalindromicSubstring.js.js#L1-L77)

### Longest Substring Without Repeating Characters (Sliding Window + Hash Set)
- Approach: Maintain a set of characters in the current window; expand right, and shrink left when duplicates are encountered.
- Key steps:
  - Use a set to track characters in the window.
  - While duplicate exists, remove from left and increment left.
  - Add current character and update max length.
- Complexity:
  - Time: O(n)
  - Space: O(min(m,n))

```mermaid
flowchart TD
Start(["Start"]) --> Init["Set={}, left=0, maxLen=0"]
Init --> ForEach["For right in 0..n-1"]
ForEach --> HasDup{"Set has s[right]?"}
HasDup --> |Yes| Shrink["Delete s[left], left++"] --> HasDup
HasDup --> |No| Add["Add s[right]"]
Add --> Update["maxLen = max(maxLen, right-left+1)"]
Update --> Next["Next right"]
Next --> ForEach
ForEach --> Done["Return maxLen"]
```

**Diagram sources**
- [6_longestSubstring.js](file://Blind-75/6_longestSubstring.js#L42-L70)

**Section sources**
- [6_longestSubstring.js](file://Blind-75/6_longestSubstring.js#L1-L74)

### Minimum Window Substring (Sliding Window + Frequency Map)
- Approach: Use a frequency map to track required characters and minimize the window when all are present.
- Key steps:
  - Build frequency map for t.
  - Expand right; when a needed character is added, decrement count.
  - While count equals zero, update result and shrink from left.
- Complexity:
  - Time: O(n+m)
  - Space: O(k)

```mermaid
flowchart TD
Start(["Start"]) --> Edge{"s or t empty?"}
Edge --> |Yes| ReturnEmpty["Return ''"]
Edge --> |No| BuildMap["Build frequency map for t"]
BuildMap --> Init["left=0, count=|t|, minLen=∞, start=0"]
Init --> ForRight["For right in 0..n-1"]
ForRight --> Need{"map[s[right]] > 0?"}
Need --> |Yes| DecCount["count--"]
Need --> |No| Skip["No change"]
DecCount --> DecMap["map[s[right]]--"]
Skip --> DecMap
DecMap --> AllFound{"count === 0?"}
AllFound --> |No| NextRight["Next right"]
AllFound --> |Yes| Update["Update minLen and start if smaller"]
Update --> Shrink["map[s[left]]++, if >0 then count++"]
Shrink --> LeftInc["left++"] --> AllFound
AllFound --> |No| NextRight
NextRight --> ForRight
ForRight --> Done["Return s[start:start+minLen]"]
```

**Diagram sources**
- [9_minWindowSubstring.js](file://Blind-75/9_minWindowSubstring.js#L40-L75)

**Section sources**
- [9_minWindowSubstring.js](file://Blind-75/9_minWindowSubstring.js#L1-L79)

### Character Replacement (Sliding Window + Frequency Map)
- Approach: Maintain a window where (window length - max frequency) ≤ k by adjusting left pointer.
- Key steps:
  - Track frequency map and max frequency in the window.
  - If invalid, shrink from left.
  - Update max length throughout.
- Complexity:
  - Time: O(n)
  - Space: O(1) due to bounded character set.

```mermaid
flowchart TD
Start(["Start"]) --> Init["freq={}, left=0, maxFreq=0, maxLen=0"]
Init --> ForRight["For right in 0..n-1"]
ForRight --> IncFreq["freq[s[right]]++"]
IncFreq --> UpdateMax["maxFreq = max(maxFreq, freq[s[right]])"]
UpdateMax --> Check{"(right-left+1 - maxFreq) > k?"}
Check --> |Yes| Shrink["freq[s[left]]--, left++"] --> Check
Check --> |No| UpdateLen["maxLen = max(maxLen, right-left+1)"]
UpdateLen --> Next["Next right"]
Next --> ForRight
ForRight --> Done["Return maxLen"]
```

**Diagram sources**
- [8_characterReplacement.js](file://Blind-75/8_characterReplacement.js#L41-L67)

**Section sources**
- [8_characterReplacement.js](file://Blind-75/8_characterReplacement.js#L1-L71)

### Evaluate Reverse Polish Notation (Stack-based Parsing)
- Approach: Use a stack to evaluate postfix expressions; for operators pop two operands, compute, and push result. Division truncates towards zero.
- Key steps:
  - Iterate tokens; push numbers.
  - On operator, pop two operands, compute, push result.
  - Return final value.
- Complexity:
  - Time: O(n)
  - Space: O(n)

```mermaid
sequenceDiagram
participant C as "Caller"
participant F as "evalRPN"
participant S as "Stack"
C->>F : "tokens"
F->>S : "initialize"
loop for each token
alt token is number
F->>S : "push(Number(token))"
else token is operator
F->>S : "pop b"
F->>S : "pop a"
F->>S : "push(a op b)"
end
end
F-->>C : "pop()"
```

**Diagram sources**
- [53_evalRPN.js](file://Blind-75/53_evalRPN.js#L43-L68)

**Section sources**
- [53_evalRPN.js](file://Blind-75/53_evalRPN.js#L1-L72)

### Daily Temperatures (Monotonic Decreasing Stack)
- Approach: Maintain a stack of indices with decreasing temperatures; when a warmer day is found, pop and compute wait days.
- Key steps:
  - Initialize result array and stack.
  - For each index, pop indices while current temperature is warmer and compute differences.
  - Push current index.
- Complexity:
  - Time: O(n)
  - Space: O(n)

```mermaid
flowchart TD
Start(["Start"]) --> Init["result=zeros, stack=[]"]
Init --> ForEach["For i in 0..n-1"]
ForEach --> Warm{"temperatures[i] > temperatures[stack.top]?"}
Warm --> |Yes| PopAns["pop j, result[j]=i-j"] --> Warm
Warm --> |No| Push["push i"]
Push --> Next["Next i"]
Next --> ForEach
ForEach --> Done["Return result"]
```

**Diagram sources**
- [54_dailyTemperatures.js](file://Blind-75/54_dailyTemperatures.js#L45-L64)

**Section sources**
- [54_dailyTemperatures.js](file://Blind-75/54_dailyTemperatures.js#L1-L69)

## Dependency Analysis
- Cohesion: Each file is focused on a single problem with clear boundaries.
- Coupling: Minimal inter-file dependencies; each solution is self-contained.
- External dependencies: Standard JavaScript primitives and built-in structures (arrays, objects, sets, math functions).
- Potential circular dependencies: None observed; functions are independent.

```mermaid
graph TB
P["51_validParentheses.js"]
A["10_groupAnagrams.js"]
PAL["7_validPalindrome.js"]
LPS["70_longestPalindromicSubstring.js.js"]
LSW["6_longestSubstring.js"]
MWS["9_minWindowSubstring.js"]
CR["8_characterReplacement.js"]
RPN["53_evalRPN.js"]
DT["54_dailyTemperatures.js"]
P --> P
A --> A
PAL --> PAL
LPS --> LPS
LSW --> LSW
MWS --> MWS
CR --> CR
RPN --> RPN
DT --> DT
```

**Diagram sources**
- [51_validParentheses.js](file://Blind-75/51_validParentheses.js#L48-L76)
- [10_groupAnagrams.js](file://Blind-75/10_groupAnagrams.js#L41-L60)
- [7_validPalindrome.js](file://Blind-75/7_validPalindrome.js#L35-L50)
- [70_longestPalindromicSubstring.js.js](file://Blind-75/70_longestPalindromicSubstring.js.js#L43-L72)
- [6_longestSubstring.js](file://Blind-75/6_longestSubstring.js#L42-L70)
- [9_minWindowSubstring.js](file://Blind-75/9_minWindowSubstring.js#L40-L75)
- [8_characterReplacement.js](file://Blind-75/8_characterReplacement.js#L41-L67)
- [53_evalRPN.js](file://Blind-75/53_evalRPN.js#L43-L68)
- [54_dailyTemperatures.js](file://Blind-75/54_dailyTemperatures.js#L45-L64)

## Performance Considerations
- Choose appropriate data structures:
  - Use hash maps for frequency counting and grouping.
  - Use sets for sliding window uniqueness checks.
  - Use stacks for validation and parsing tasks.
- Optimize space:
  - Prefer in-place checks for palindromes to avoid extra string copies.
  - Limit map sizes by character set bounds (e.g., 26 uppercase letters).
- Time complexity trade-offs:
  - Sorting-based grouping costs O(k log k) per string; consider frequency vectors for very large alphabets.
  - Sliding window techniques often achieve linear time by ensuring each element is touched a constant number of times.
- Large inputs:
  - For very long strings, consider streaming or chunked processing where applicable.
  - Monitor stack depth for recursive helpers and iterative alternatives where needed.

## Troubleshooting Guide
- Edge cases:
  - Empty strings: Ensure early returns and boundary checks (e.g., minimum window substring).
  - Special characters and mixed case: Normalize input (lowercase, alphanumeric) for palindrome checks.
  - Unbalanced brackets: Verify stack emptiness at the end.
- Common pitfalls:
  - Incorrect operator order in RPN evaluation (second operand popped first).
  - Division truncation: Use truncation towards zero semantics.
  - Sliding window invalidity: Ensure proper updates to counts and maps when shrinking windows.
- Validation tips:
  - For parentheses, confirm the mapping aligns with expected opening brackets.
  - For anagrams, ensure canonicalization uses a deterministic method (sorting or frequency vector).
  - For palindromes, test both two-pointer and expand-around-center approaches depending on constraints.

**Section sources**
- [51_validParentheses.js](file://Blind-75/51_validParentheses.js#L65-L75)
- [53_evalRPN.js](file://Blind-75/53_evalRPN.js#L59-L62)
- [9_minWindowSubstring.js](file://Blind-75/9_minWindowSubstring.js#L59-L71)
- [7_validPalindrome.js](file://Blind-75/7_validPalindrome.js#L35-L50)

## Conclusion
The repository demonstrates robust, well-documented solutions for core string-processing challenges. Techniques span stack-based validation, sliding window paradigms, frequency analysis, palindrome expansion, and monotonic stacks. Each solution includes complexity analysis and clear implementation references, enabling both learning and practical application. Adhering to the outlined strategies and troubleshooting tips ensures reliable performance and correctness across diverse inputs and edge cases.