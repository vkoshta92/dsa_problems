/**
 * ============================================================================
 * PROBLEM: Task Scheduler
 * ============================================================================
 * Given tasks A-Z and cooldown n, find minimum time to complete all tasks.
 * Same tasks must be separated by at least n units (can be idle or other tasks).
 * 
 * ============================================================================
 * APPROACH: MaxHeap + Cycle-based Processing
 * ============================================================================
 * Logic:
 * 1. Count frequency of each task
 * 2. Use MaxHeap to always pick most frequent task first
 * 3. Process tasks in cycles of n+1 (one task + n cooldown)
 * 4. In each cycle, pick up to n+1 different tasks
 * 5. If cycle not full and tasks remain, add idle time
 * 
 * Why MaxHeap?
 * - Always execute most frequent task first
 * - This minimizes idle time (maximizes task packing)
 * - After executing, decrease count and push back if > 0
 * 
 * Cycle Explanation:
 * - After executing a task, can't execute same task for n units
 * - So we process n+1 different tasks per cycle
 * - If fewer than n+1 distinct tasks, remaining slots are idle
 * 
 * Example: tasks = ["A","A","A","B","B","B"], n = 2
 * - Frequencies: {A: 3, B: 3}
 * - Cycle 1: A, B, idle → time = 3
 * - Cycle 2: A, B, idle → time = 3
 * - Cycle 3: A, B → time = 2 (no idle needed at end)
 * - Total: 8
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n * m)
 * - n = number of tasks
 * - m = cooldown period
 * - Each task processed once, idle slots = O(m) per unique task
 * 
 * SPACE COMPLEXITY: O(1)
 * - Fixed number of task types (26 letters)
 * ============================================================================
 */

function leastInterval(tasks, n) {
  // Count task frequency
  const freq = {};
  for (let t of tasks) freq[t] = (freq[t] || 0) + 1;

  // MaxHeap based on frequency
  const heap = new Heap((a, b) => a > b);
  Object.values(freq).forEach(v => heap.push(v));

  let time = 0;

  // Process tasks in cycles of n+1
  while (heap.size() > 0) {
    let temp = [];
    let cycle = n + 1;

    while (cycle > 0 && heap.size() > 0) {
      let count = heap.pop() - 1;
      if (count > 0) temp.push(count);
      cycle--;
      time++;
    }

    // Push remaining tasks back
    temp.forEach(c => heap.push(c));

    // If heap not empty, add idle time
    if (heap.size() > 0) time += cycle;
  }

  return time;
}

// Test
console.log(leastInterval(["A","A","A","B","B","B"], 2)); // 8
