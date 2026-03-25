/**
 * ============================================================================
 * PROBLEM: K Closest Points to Origin
 * ============================================================================
 * Given array of points [x, y] and integer k, return k closest points
 * to origin (0, 0). Distance is Euclidean: sqrt(x² + y²), but we can
 * compare using just x² + y² (avoid sqrt for efficiency).
 * 
 * ============================================================================
 * APPROACH: MaxHeap of Size K
 * ============================================================================
 * Logic:
 * 1. Maintain a MaxHeap of k closest points
 * 2. For each point:
 *    - Calculate distance (squared, no sqrt needed)
 *    - Add to heap
 *    - If heap size > k, remove farthest point (root of MaxHeap)
 * 3. Remaining points are the k closest
 * 
 * Why MaxHeap?
 * - MaxHeap keeps largest (farthest) distance at root
 * - When size exceeds k, we remove the farthest
 * - This keeps exactly k closest points
 * 
 * Example: points = [[1,3],[-2,2]], k = 1
 * - Point [1,3]: distance = 1 + 9 = 10
 * - Point [-2,2]: distance = 4 + 4 = 8
 * - [-2,2] is closer, so result = [[-2,2]]
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n log k)
 * - Process n points, each heap operation is O(log k)
 * 
 * SPACE COMPLEXITY: O(k)
 * - Heap stores at most k points
 * ============================================================================
 */

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
