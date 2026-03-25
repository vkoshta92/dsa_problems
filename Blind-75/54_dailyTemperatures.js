/**
 * ============================================================================
 * PROBLEM: Daily Temperatures
 * ============================================================================
 * Given an array of temperatures, return an array where answer[i] is the
 * number of days you have to wait after day i to get a warmer temperature.
 * If no warmer day, answer[i] = 0.
 * 
 * ============================================================================
 * APPROACH: Monotonic Decreasing Stack
 * ============================================================================
 * Logic:
 * 1. Use stack to store indices of temperatures
 * 2. Stack maintains decreasing order of temperatures
 * 3. When warmer day found, pop all colder days and calculate wait time
 * 
 * Why Monotonic Stack?
 * - We want the NEXT warmer day for each position
 * - Stack stores days waiting for warmer temperature
 * - When warmer day comes, all colder days in stack get their answer
 * 
 * Example: [73, 74, 75, 71, 69, 72, 76, 73]
 * - Day 0 (73): stack = [0]
 * - Day 1 (74): 74 > 73, pop 0, answer[0] = 1-0 = 1, stack = [1]
 * - Day 2 (75): 75 > 74, pop 1, answer[1] = 2-1 = 1, stack = [2]
 * - Day 3 (71): 71 < 75, push, stack = [2, 3]
 * - Day 4 (69): 69 < 71, push, stack = [2, 3, 4]
 * - Day 5 (72): 72 > 69, pop 4, answer[4] = 5-4 = 1
 *             72 > 71, pop 3, answer[3] = 5-3 = 2
 *             72 < 75, push 5, stack = [2, 5]
 * - Day 6 (76): 76 > 72, pop 5, answer[5] = 6-5 = 1
 *             76 > 75, pop 2, answer[2] = 6-2 = 4, stack = [6]
 * - Day 7 (73): 73 < 76, push, stack = [6, 7]
 * - Result: [1, 1, 4, 2, 1, 1, 0, 0]
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Each index pushed and popped at most once
 * 
 * SPACE COMPLEXITY: O(n)
 * - Worst case: decreasing temperatures, stack size = n
 * ============================================================================
 */

function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = []; // stores indices

  for (let i = 0; i < temperatures.length; i++) {
    // While current temp is higher than stack top
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex; // days waited
    }

    // Push current index
    stack.push(i);
  }

  return result;
}

// Test
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
// [1,1,4,2,1,1,0,0]
