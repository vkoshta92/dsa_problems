/*
    Problem: Word Search II
    Difficulty: Hard
    Companies: Amazon, Google, Meta, Microsoft, Apple

    Problem Statement:
    Given an m x n board of characters and a list of strings words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells (horizontally or vertically neighboring). The same cell cannot be used more than once for a word.

    Example 1:
    Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
    Output: ["eat","oath"]

    Example 2:
    Input: board = [["a","b"],["c","d"]], words = ["abcb"]
    Output: []
*/

/*
    Hinglish Explanation (Detailed Logic):

    Yeh problem Trie aur DFS (Backtracking) ka combination hai. Bruteforce approach
    har word ke liye board pe search karna hota, jo bahut slow hota. Isliye Trie use karte hain.

    Step 1: Trie Build karo saare words se
    - Har word ko Trie mein insert karo. Isse hume fast prefix matching milega.
    - Trie node mein ek 'word' property bhi rakhte hain - jab word complete ho jaye
      toh uska naam store kar lete hain. Yeh baad mein result mein add karne mein help karega.

    Step 2: Board pe DFS (Backtracking) karo
    - Har cell se DFS shuru karo.
    - DFS mein:
      - Agar boundary se bahar ho, ya cell visited ho, ya Trie mein current character
        ka child nahi hai, toh return karo (pruning).
      - Agar Trie mein word complete ho gaya (node.word exists), toh result mein add karo
        aur node.word ko null kar do (taaki duplicate add na ho).
      - Current cell ko visited mark karo.
      - Charo directions (up, down, left, right) mein DFS call karo.
      - Backtrack: current cell ko unmark karo.

    Step 3: Result return karo.

    Trie ki wajah se hume unnecessary paths explore nahi karni padti.
    Agar current prefix Trie mein exist nahi karta, toh us direction mein jaana band karo.
    Yeh pruning se bahut sara time bachta hai.

    Example: board = [[o,a],[e,t]], words = ["oat","eat"]
    - Trie: o -> a -> t, e -> a -> t
    - DFS from 'o': o -> a -> t (mil gaya "oat"!)
    - DFS from 'e': e -> a -> t (mil gaya "eat"!)
*/

function findWords(board, words) {
    // Step 1: Build Trie from words
    const root = {};
    for (const word of words) {
        let node = root;
        for (const char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }
        node.word = word; // Mark end of word with the word itself
    }

    const result = [];
    const rows = board.length;
    const cols = board[0].length;

    // Step 2: DFS from each cell
    function dfs(r, c, node) {
        // Boundary check and pruning
        if (r < 0 || r >= rows || c < 0 || c >= cols) return;
        if (board[r][c] === '#') return; // Already visited

        const char = board[r][c];
        if (!node[char]) return; // Prefix not in Trie

        const nextNode = node[char];

        // Word found!
        if (nextNode.word) {
            result.push(nextNode.word);
            nextNode.word = null; // Avoid duplicates
        }

        // Mark as visited
        board[r][c] = '#';

        // Explore all 4 directions
        dfs(r - 1, c, nextNode); // up
        dfs(r + 1, c, nextNode); // down
        dfs(r, c - 1, nextNode); // left
        dfs(r, c + 1, nextNode); // right

        // Backtrack: restore cell
        board[r][c] = char;
    }

    // Start DFS from every cell
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root);
        }
    }

    return result;
}

/*
    Time Complexity: O(M * N * 4^L)
        - M = rows, N = columns of board
        - L = maximum length of a word
        - From each cell, we can go in 4 directions up to L depth
        - Trie pruning significantly reduces actual explored paths

    Space Complexity: O(W * L)
        - W = number of words, L = average word length
        - Trie space: O(W * L)
        - Recursion stack: O(L) - maximum depth of DFS
*/

// Test Cases
const board1 = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
];
console.log("Test Case 1: Standard case");
console.log("Expected Output: ['eat', 'oath'] or ['oath', 'eat']");
console.log("Actual Output:", findWords(board1, ["oath", "pea", "eat", "rain"]));
console.log("---");

const board2 = [["a", "b"], ["c", "d"]];
console.log("Test Case 2: No words found");
console.log("Expected Output: []");
console.log("Actual Output:", findWords(board2, ["abcb"]));
console.log("---");

const board3 = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];
console.log("Test Case 3: Single character words");
console.log("Expected Output: ['a', 'b', 'c'] (or subset)");
console.log("Actual Output:", findWords(board3, ["a", "b", "x"]));
console.log("---");

const board4 = [["a", "a"], ["a", "a"]];
console.log("Test Case 4: All same characters");
console.log("Expected Output: ['aaa', 'aaaa'] (if words match)");
console.log("Actual Output:", findWords(board4, ["aa", "aaa", "aaaa"]));
console.log("---");

module.exports = findWords;
