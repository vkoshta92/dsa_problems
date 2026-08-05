/*
    Problem: Course Schedule
    Difficulty: Medium
    Companies: Amazon, Google, Meta, Microsoft, Apple, Bloomberg

    Problem Statement:
    There are a total of numCourses courses you have to take, labeled from 0 to
    numCourses - 1. You are given an array prerequisites where prerequisites[i] =
    [ai, bi] indicates that you must take course bi first if you want to take
    course ai.

    For example, the pair [0, 1] indicates that to take course 0 you have to first
    take course 1.

    Return true if you can finish all courses. Otherwise, return false.

    Example 1:
    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: true
    Explanation: There are a total of 2 courses to take. To take course 1 you
    should finish course 0. So it is possible.

    Example 2:
    Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
    Output: false
    Explanation: There are a total of 2 courses to take. To take course 1 you
    should finish course 0, and to take course 0 you should also finish course 1.
    So it is impossible.
*/

/*
    Hinglish Logic Explanation:

    Yeh problem basically cycle detection in directed graph ki hai. Agar courses
    mein cycle hai (circular dependency), to saare courses complete karna possible
    nahi hai.

    Approach: Topological Sort using Kahn's Algorithm (BFS)

    1. Pehle hum adjacency list banayenge. prerequisites[i] = [ai, bi] ka matlab
       hai ki bi -> ai edge hai (bi pehle aana chahiye, phir ai).

    2. In-degree array banayenge jo count karegi ki har course ke kitne prerequisites
       hain.

    3. Saare courses jinke in-degree 0 hain unhe queue mein daal denge. Ye wo
       courses hain jinhe koi prerequisite nahi chahiye.

    4. BFS karenge:
       - Queue se ek course nikalenge (isko complete kar lenge).
       - Uske saare dependent courses ke in-degree decrement karenge.
       - Agar kisi course ka in-degree 0 ho jaye, to use queue mein daal denge.
       - Ek counter rakhenge ki kitne courses process hue.

    5. Agar counter == numCourses hai, to saare courses complete ho sakte hain
       (return true). Agar counter < numCourses hai, to cycle hai (return false).

    Key Points:
    - Topological sort sirf DAG (Directed Acyclic Graph) mein hota hai.
    - Agar topological sort mein saare vertices include ho jayein, to graph DAG hai.
    - Agar cycle hai to kuch vertices process nahi ho payenge.
    - Kahn's algorithm BFS-based hai aur O(V + E) time leta hai.
*/

function canFinish(numCourses, prerequisites) {
    // Step 1: Build adjacency list and in-degree array
    const adj = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);

    for (const [course, prereq] of prerequisites) {
        adj[prereq].push(course); // prereq -> course
        inDegree[course]++;
    }

    // Step 2: Add all courses with 0 in-degree to queue
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // Step 3: BFS - process courses
    let coursesCompleted = 0;

    while (queue.length > 0) {
        const current = queue.shift();
        coursesCompleted++;

        for (const dependent of adj[current]) {
            inDegree[dependent]--;
            if (inDegree[dependent] === 0) {
                queue.push(dependent);
            }
        }
    }

    // Step 4: If all courses completed, no cycle exists
    return coursesCompleted === numCourses;
}

/*
    Time Complexity: O(V + E)
    - V = numCourses (vertices)
    - E = prerequisites.length (edges)
    - Har node aur edge exactly ek baar process hoti hai BFS mein.
    - In-degree calculation O(E) time leta hai.

    Space Complexity: O(V + E)
    - Adjacency list O(V + E) space leti hai.
    - In-degree array O(V) space leta hai.
    - Queue mein maximum V nodes ho sakti hain.
*/

// Test Cases
console.log("Test 1 - Simple prerequisite:");
console.log("numCourses: 2, prerequisites: [[1,0]]");
console.log("Expected: true");
console.log("Output:", canFinish(2, [[1, 0]]));
console.log();

console.log("Test 2 - Cycle detected:");
console.log("numCourses: 2, prerequisites: [[1,0],[0,1]]");
console.log("Expected: false");
console.log("Output:", canFinish(2, [[1, 0], [0, 1]]));
console.log();

console.log("Test 3 - No prerequisites:");
console.log("numCourses: 3, prerequisites: []");
console.log("Expected: true");
console.log("Output:", canFinish(3, []));
console.log();

console.log("Test 4 - Multiple prerequisites:");
console.log("numCourses: 4, prerequisites: [[1,0],[2,1],[3,2]]");
console.log("Expected: true (linear chain: 0->1->2->3)");
console.log("Output:", canFinish(4, [[1, 0], [2, 1], [3, 2]]));
console.log();

console.log("Test 5 - Complex cycle:");
console.log("numCourses: 3, prerequisites: [[1,0],[2,1],[0,2]]");
console.log("Expected: false (cycle: 0->1->2->0)");
console.log("Output:", canFinish(3, [[1, 0], [2, 1], [0, 2]]));
console.log();

module.exports = { canFinish };
