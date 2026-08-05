/*
 * Problem: Task Scheduler
 * Difficulty: Medium
 * Companies: Amazon, Google, Meta, Microsoft, Apple
 *
 * Problem Statement:
 * You are given a character array tasks, representing the tasks a CPU needs
 * to do, where each letter represents a different task. Tasks could be done
 * in any order. Each task is done in one unit of time. For each unit of
 * time, the CPU can either complete a task or stay idle.
 *
 * However, there is a non-negative integer n that represents the cooldown
 * period between two same tasks (the same letter). That is, there must be
 * at least n units of time between any two same tasks.
 *
 * Return the least number of units of time that will be taken to finish
 * all the given tasks.
 *
 * Example 1:
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
 *              Total time = 8.
 *
 * Example 2:
 * Input: tasks = ["A","A","A","B","B","B"], n = 0
 * Output: 6
 * Explanation: On this case any arrangement of task is valid since n = 0.
 *              Total time = 6 (just run all tasks back to back).
 *
 * Example 3:
 * Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
 * Output: 16
 * Explanation: One possible sequence is:
 *              A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A.
 *              Total time = 16.
 */

/*
 * Hinglish Logic Explanation:
 * ----------------------------
 * Approach: Math-based Greedy (No actual heap needed!)
 *
 * Step 1: Har task ki frequency count karo. 26 letters hain toh
 *         ek array of size 26 use karo.
 *
 * Step 2: Sabse zyada frequency wala task nikalo (maxFreq).
 *         Jaise agar A 4 baar aata hai toh maxFreq = 4.
 *
 * Step 3: Kitne tasks maxFreq ke barabar hain woh count karo (maxCount).
 *         Agar A aur B dono 4 baar aate hain toh maxCount = 2.
 *
 * Step 4: Formula apply karo:
 *         intervals = (maxFreq - 1) * (n + 1) + maxCount
 *
 *         Yeh kya karta hai? MaxFreq wale tasks ko place karte hain
 *         aur unke beech n idle slots daalte hain. Last row mein sirf
 *         maxCount tasks aate hain.
 *
 * Step 5: Answer hai max(intervals, tasks.length)
 *         Kyunki agar bahut saare unique tasks hain jo idle slots se
 *         zyada hain, toh koi idle slot nahi lagega — seedha tasks.length
 *         hi answer hoga.
 *
 * Example: tasks = ["A","A","A","B","B","B"], n = 2
 *   maxFreq = 3 (A ya B), maxCount = 2 (A aur B dono)
 *   intervals = (3-1) * (2+1) + 2 = 2*3 + 2 = 8
 *   tasks.length = 6
 *   answer = max(8, 6) = 8
 */

function leastInterval(tasks, n) {
  const freq = new Array(26).fill(0);

  // Count frequency of each task
  for (const t of tasks) {
    freq[t.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
  }

  // Sort to find max frequency easily
  freq.sort((a, b) => a - b);

  const maxFreq = freq[25];

  // Count how many tasks have max frequency
  let maxCount = 0;
  for (let i = 25; i >= 0; i--) {
    if (freq[i] === maxFreq) {
      maxCount++;
    } else {
      break;
    }
  }

  // Formula: (maxFreq - 1) slots each of (n + 1) length + maxCount in last row
  const intervals = (maxFreq - 1) * (n + 1) + maxCount;

  // Answer is max of formula result and total tasks (for dense task sets)
  return Math.max(intervals, tasks.length);
}

/*
 * Time Complexity: O(n)
 * - We iterate through tasks once to count frequencies: O(n)
 * - Sorting 26 elements is O(1) (constant).
 * - Overall: O(n)
 *
 * Space Complexity: O(1)
 * - Fixed size array of 26 integers. No extra space.
 */

// ======================== TEST CASES ========================

// Test Case 1: Classic example — 3 A's and 3 B's, cooldown 2
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Expected Output: 8
console.log("Test 1:", leastInterval(["A", "A", "A", "B", "B", "B"], 2));
// Expected: 8

// Test Case 2: No cooldown needed
// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Expected Output: 6
console.log("Test 2:", leastInterval(["A", "A", "A", "B", "B", "B"], 0));
// Expected: 6

// Test Case 3: One dominant task with many unique others
// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Expected Output: 16
console.log("Test 3:", leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2));
// Expected: 16

// Test Case 4: Single task type
// Input: tasks = ["A","A","A"], n = 3
// Expected Output: 9
// Explanation: A _ _ A _ _ A = 7? No, formula: (3-1)*(3+1)+1 = 9
console.log("Test 4:", leastInterval(["A", "A", "A"], 3));
// Expected: 9

// Test Case 5: All unique tasks, no cooldown matters
// Input: tasks = ["A","B","C","D"], n = 2
// Expected Output: 4
console.log("Test 5:", leastInterval(["A", "B", "C", "D"], 2));
// Expected: 4

module.exports = { leastInterval };
