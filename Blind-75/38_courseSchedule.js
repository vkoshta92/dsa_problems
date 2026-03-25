/**
 * ============================================================================
 * PROBLEM: Course Schedule
 * ============================================================================
 * Given numCourses and prerequisites array [a, b] meaning you must take
 * course b before course a, determine if all courses can be finished.
 * 
 * ============================================================================
 * APPROACH: DFS Cycle Detection
 * ============================================================================
 * Logic:
 * 1. Build adjacency list (directed graph)
 * 2. Detect if there's a cycle in the graph
 * 3. If cycle exists → impossible to complete all courses
 * 4. If no cycle → possible to complete
 * 
 * Three States for Each Node:
 * - 0 (unvisited): Node not processed yet
 * - 1 (visiting): Node is in current DFS path (being explored)
 * - 2 (visited): Node and all descendants fully processed
 * 
 * Cycle Detection:
 * - If we encounter a node with state 1, we found a cycle
 * - This means we're revisiting a node in the current path
 * 
 * Example (POSSIBLE): numCourses = 2, prerequisites = [[1,0]]
 * Graph: 0 → 1
 * - Take course 0 first, then course 1
 * 
 * Example (IMPOSSIBLE): numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Graph: 0 → 1 → 0 (cycle)
 * - Can't take 0 without 1, can't take 1 without 0
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(V + E)
 * - V = numCourses
 * - E = prerequisites.length
 * - Build graph: O(E)
 * - DFS: O(V + E)
 * 
 * SPACE COMPLEXITY: O(V + E)
 * - Adjacency list: O(V + E)
 * - State array: O(V)
 * - Recursion stack: O(V)
 * ============================================================================
 */

function canFinish(numCourses, prerequisites) {
  // Build adjacency list
  const graph = Array.from({ length: numCourses }, () => []);

  for (let [a, b] of prerequisites) {
    graph[b].push(a); // b -> a
  }

  // 0 = unvisited, 1 = visiting, 2 = visited
  const state = new Array(numCourses).fill(0);

  function dfs(course) {
    // If currently visiting → cycle detected
    if (state[course] === 1) return false;

    // If already visited → no problem
    if (state[course] === 2) return true;

    // Mark as visiting
    state[course] = 1;

    // Visit neighbors
    for (let next of graph[course]) {
      if (!dfs(next)) return false;
    }

    // Mark as fully visited
    state[course] = 2;
    return true;
  }

  // Check all courses
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}

// Test
console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false
