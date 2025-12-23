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
