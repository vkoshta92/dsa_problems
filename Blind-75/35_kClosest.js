function kClosest(points, k) {
  // MaxHeap by distance
  const heap = new Heap((a, b) => a[0] > b[0]);

  for (let [x, y] of points) {
    const dist = x*x + y*y;
    heap.push([dist, x, y]);

    if (heap.size() > k) heap.pop();
  }

  // Return points
  return heap.data.map(p => [p[1], p[2]]);
}

// Test
console.log(kClosest([[1,3],[-2,2]], 1)); // [[-2,2]]
