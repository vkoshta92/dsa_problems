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
