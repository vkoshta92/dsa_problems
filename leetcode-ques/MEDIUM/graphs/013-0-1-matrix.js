/*
 * ==========================================
 * Problem: 01 Matrix
 * Difficulty: Medium
 * Companies: Amazon, Google, Meta, Microsoft
 * LeetCode: #542
 * ==========================================
 *
 * Problem Statement:
 * Given an m x n binary matrix mat, return the distance of the nearest 0
 * for each cell. The distance between two adjacent cells is 1.
 *
 * Example 1:
 * Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
 * Output: [[0,0,0],[0,1,0],[0,0,0]]
 *
 * Example 2:
 * Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
 * Output: [[0,0,0],[0,1,0],[1,2,1]]
 *
 * Example 3:
 * Input: mat = [[1,1,1],[1,1,1],[1,1,0]]
 * Output: [[4,3,2],[3,2,1],[2,1,0]]
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh problem mein hume har cell ke liye nearest 0 ki distance
 * find karni hai. Simple BFS ya DFS agar single 0 se karein toh O((m*n)^2)
 * ho sakta hai. But hum Multi-Source BFS use karenge jo O(m*n) mein ho jayega.
 *
 * Approach: Multi-Source BFS (Level by Level)
 *
 * Step 1: Pehle ek result matrix banao same size ki, sab cells ko Infinity
 *         se fill karo. Yeh represent karega ki abhi tak distance unknown hai.
 *
 * Step 2: Saare 0 cells ko queue mein daalo aur unka distance 0 set karo.
 *         Yeh woh sources hain jahaan se BFS start hogi.
 *         Socho: agar cell already 0 hai, toh nearest 0 ki distance 0 hi hai.
 *
 * Step 3: BFS level by level karo:
 *         - Queue se cell nikaalo
 *         - Uske 4-directional neighbors check karo (up, down, left, right)
 *         - Agar neighbor ki distance > current cell ki distance + 1 hai,
 *           toh update karo aur neighbor ko queue mein daalo
 *         - Har level BFS ke saath distance natural tarike se badta jayega
 *
 * Step 4: Jab queue khatam ho jaye, result matrix return kar do.
 *
 * Example Walkthrough: mat = [[0,0,0],[0,1,0],[1,1,1]]
 *
 * Initial result (Infinity means unknown):
 * [0, 0, 0]
 * [0, I, 0]
 * [I, I, I]
 *
 * Queue = saare 0 cells: (0,0), (0,1), (0,2), (1,0), (1,2)
 *
 * BFS Step 1 - Process (0,0):
 *   Neighbor (1,0) = 0 (already known, skip)
 *   Neighbor (0,1) = 0 (already known, skip)
 * BFS Step 2 - Process (0,1):
 *   Neighbor (1,1) = I => update to 1, queue.push(1,1)
 * BFS Step 3 - Process (0,2):
 *   Neighbor (1,2) = 0 (skip)
 * BFS Step 4 - Process (1,0):
 *   Neighbor (2,0) = I => update to 1, queue.push(2,0)
 * BFS Step 5 - Process (1,2):
 *   Neighbor (2,2) = I => update to 1, queue.push(2,2)
 *
 * Now result:
 * [0, 0, 0]
 * [0, 1, 0]
 * [1, I, 1]
 *
 * Queue = (1,1), (2,0), (2,2)
 *
 * BFS Step 6 - Process (1,1):
 *   Neighbor (2,1) = I => update to min(I, 1+1) = 2, queue.push(2,1)
 *
 * Final result:
 * [0, 0, 0]
 * [0, 1, 0]
 * [1, 2, 1]
 *
 * Key Insight: Multi-source BFS ka fayda yeh hai ki saare 0s ek saath
 * process hote hain. Jaise-jaise level badhta hai, distance natural
 * tarike se increment hoti hai. Yeh Dijkstra jaisa hai lekin unweighted
 * graph mein BFS hi kaafi hai.
 */

function updateMatrix(mat) {
    const rows = mat.length;
    const cols = mat[0].length;

    // Step 1: Result matrix initialize with Infinity
    const result = Array.from({ length: rows }, () => new Array(cols).fill(Infinity));
    const queue = [];

    // Step 2: Saare 0 cells ko queue mein daalo, distance 0 set karo
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mat[r][c] === 0) {
                result[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Step 3: Multi-source BFS
    let front = 0;
    while (front < queue.length) {
        const [row, col] = queue[front];
        front++;

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Bounds check
            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) continue;

            // Agar naye path se better distance mil rahi hai toh update karo
            if (result[newRow][newCol] > result[row][col] + 1) {
                result[newRow][newCol] = result[row][col] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }

    return result;
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(m * n)
 *   - Grid scan: O(m * n) for finding all 0 cells
 *   - BFS: Har cell ko at most ek baar process karte hain = O(m * n)
 *   - Total: O(m * n)
 *
 * Space Complexity: O(m * n)
 *   - result matrix: O(m * n)
 *   - Queue: worst case mein saare cells = O(m * n)
 *   - Total: O(m * n)
 */

// ===========================================
// Test Cases with Expected Output
// ===========================================

// Test Case 1: Single 1 surrounded by 0s
console.log("Test 1: Single 1 surrounded by 0s");
console.log("Input: [[0,0,0],[0,1,0],[0,0,0]]");
console.log("Expected: [[0,0,0],[0,1,0],[0,0,0]]");
console.log("Output:", JSON.stringify(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]])));
console.log();

// Test Case 2: Multiple 1s - cascade distance
console.log("Test 2: Multiple 1s with cascade");
console.log("Input: [[0,0,0],[0,1,0],[1,1,1]]");
console.log("Expected: [[0,0,0],[0,1,0],[1,2,1]]");
console.log("Output:", JSON.stringify(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]])));
console.log();

// Test Case 3: Only one 0 at corner
console.log("Test 3: Single 0 at bottom-right corner");
console.log("Input: [[1,1,1],[1,1,1],[1,1,0]]");
console.log("Expected: [[4,3,2],[3,2,1],[2,1,0]]");
console.log("Output:", JSON.stringify(updateMatrix([[1, 1, 1], [1, 1, 1], [1, 1, 0]])));
console.log();

// Test Case 4: All zeros
console.log("Test 4: All zeros - no distance to compute");
console.log("Input: [[0,0],[0,0]]");
console.log("Expected: [[0,0],[0,0]]");
console.log("Output:", JSON.stringify(updateMatrix([[0, 0], [0, 0]])));
console.log();

module.exports = { updateMatrix };
