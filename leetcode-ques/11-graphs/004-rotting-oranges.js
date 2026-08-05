/*
    Problem: Rotting Oranges
    Difficulty: Medium
    Companies: Amazon, Google, Microsoft, Meta, Apple

    Problem Statement:
    You are given an m x n grid where each cell can have one of three values:
    0 - representing an empty cell
    1 - representing a fresh orange
    2 - representing a rotten orange

    Every minute, any fresh orange that is 4-directionally adjacent to a rotten
    orange becomes rotten. Return the minimum number of minutes that must elapse
    until no cell has a fresh orange. If this is impossible, return -1.

    Example 1:
    Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
    Output: 4

    Example 2:
    Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
    Output: -1
    Explanation: The orange in the bottom left corner (row 2, col 0) is never
    rotten because it is not adjacent to a rotten orange.

    Example 3:
    Input: grid = [[0,2]]
    Output: 0
    Explanation: Since there are no fresh oranges at minute 0, the answer is 0.
*/

/*
    Hinglish Logic Explanation:

    Yeh problem mein hume find karna hai ki kitne minutes lagenge saare fresh
    oranges ko rotten karne mein. Agar possible nahi hai to -1 return karna hai.

    Approach: Multi-source BFS

    1. Pehle hum grid scan karenge aur saare rotten oranges (value 2) ko queue
       mein daal denge. Saath mein fresh oranges ki count bhi nikal lenge.

    2. BFS level by level karenge:
       - Har level ek minute represent karta hai.
       - Queue mein se saare rotten oranges nikal ke unke 4-directional neighbors
         (up, down, left, right) check karenge.
       - Agar koi neighbor fresh orange hai, to usse rotten mark karke queue mein
         daal denge aur fresh count ko decremented kar denge.

    3. Har level ke baad time (minutes) increment karenge.

    4. BFS khatam hone ke baad agar fresh count 0 hai to time return karenge,
       warna -1 return karenge (kyunki koi fresh orange bacha hai jo rotten nahi
       ho sakta).

    Key Points:
    - Multi-source BFS use karte hain kyunki saare rotten oranges ek saath spread
      hone chahiye.
    - Har BFS level = 1 minute.
    - Fresh orange count track karna zaroori hai taaki pata chale kab saare rotten
      ho gaye.
    - Directions: [[-1,0], [1,0], [0,-1], [0,1]]
*/

function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshCount = 0;

    // Step 1: Initialize queue with all rotten oranges and count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    // If no fresh oranges, return 0
    if (freshCount === 0) return 0;

    let minutes = 0;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Step 2: BFS - spread rot level by level
    while (queue.length > 0) {
        const levelSize = queue.length;
        let rottedThisMinute = false;

        for (let i = 0; i < levelSize; i++) {
            const [row, col] = queue.shift();

            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                // Check bounds and if neighbor is fresh
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols
                    && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2; // Make it rotten
                    freshCount--;
                    rottedThisMinute = true;
                    queue.push([newRow, newCol]);
                }
            }
        }

        if (rottedThisMinute) {
            minutes++;
        }
    }

    // Step 3: Check if any fresh orange left
    return freshCount === 0 ? minutes : -1;
}

/*
    Time Complexity: O(M * N)
    - M = number of rows, N = number of columns
    - Har cell ko exactly ek baar visit karte hain BFS mein.
    - Grid scan O(M * N) time leta hai.

    Space Complexity: O(M * N)
    - Worst case mein queue mein saare cells aa sakte hain.
    - Space proportional to grid size hai.
*/

// Test Cases
const grid1 = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
console.log("Test 1 - Rotting Oranges:");
console.log("Input: [[2,1,1],[1,1,0],[0,1,1]]");
console.log("Expected: 4");
console.log("Output:", orangesRotting(grid1));
console.log();

const grid2 = [[2, 1, 1], [0, 1, 1], [1, 0, 1]];
console.log("Test 2 - Impossible case:");
console.log("Input: [[2,1,1],[0,1,1],[1,0,1]]");
console.log("Expected: -1");
console.log("Output:", orangesRotting(grid2));
console.log();

const grid3 = [[0, 2]];
console.log("Test 3 - No fresh oranges:");
console.log("Input: [[0,2]]");
console.log("Expected: 0");
console.log("Output:", orangesRotting(grid3));
console.log();

const grid4 = [[2, 1, 1], [1, 1, 1], [0, 1, 2]];
console.log("Test 4 - All can be rotten:");
console.log("Input: [[2,1,1],[1,1,1],[0,1,2]]");
console.log("Expected: 2");
console.log("Output:", orangesRotting(grid4));
console.log();

module.exports = { orangesRotting };
