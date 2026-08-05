/*
    Problem: Word Ladder
    Difficulty: Hard
    Companies: Google, Amazon, Microsoft, Meta, Apple, Bloomberg

    Problem Statement:
    A transformation sequence from word beginWord to word endWord using a
    dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk
    such that:
    - Every adjacent pair of words differs by a single letter.
    - Every si for 1 <= i <= k is in wordList. Note that beginWord does not need
      to be in wordList.
    - sk == endWord

    Given two words, beginWord and endWord, and a dictionary wordList, return the
    number of words in the shortest transformation sequence from beginWord to
    endWord, or 0 if no such sequence exists.

    Example 1:
    Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
    Output: 5
    Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog".

    Example 2:
    Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
    Output: 0
    Explanation: The endWord "cog" is not in wordList, so there is no valid transformation.
*/

/*
    Hinglish Logic Explanation:

    Yeh problem shortest path finding ki hai ek word se doosre word tak, jahan
    har step mein sirf ek character change ho sakta hai aur naya word dictionary
    mein hona chahiye.

    Approach: BFS (Level by Level Search)

    1. Pehle wordList ko Set mein convert karenge for O(1) lookup.

    2. BFS use karenge:
       - Queue mein [currentWord, steps] store karenge.
       - Starting mein [beginWord, 1] queue mein daal denge.
       - Visited set maintain karenge taaki same word baar baar process na ho.

    3. Har word ke liye:
       - Har position (0 to len-1) par jaake har possible character (a-z) try
         karenge.
       - Agar naya word dictionary mein hai aur visited nahi hai, to usse queue
         mein daal denge with steps+1.

    4. Agar kisi step mein endWord mil jaye, to current steps return karenge.

    5. BFS khatam ho jaye aur endWord na mile, to 0 return karenge.

    Optimization: Bidirectional BFS
    - Dono taraf se BFS karo (beginWord aur endWord se).
    - Jab dono BFS ke visited sets intersect karein, to answer mil jayega.
    - Yeh approach O(b^(d/2)) karta hai jabki normal BFS O(b^d) karta hai
      (b = branching factor, d = depth).

    Key Points:
    - BFS best hai kyunki hume shortest path chahiye.
    - Har word ke liye 26 * length possible transformations hain.
    - Set lookup O(1) time leta hai.
    - Word length maximum 10 hai, to transformations limited hain.
*/

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);

    // End word must be in dictionary
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);

    while (queue.length > 0) {
        const [currentWord, steps] = queue.shift();

        // Try changing each character at each position
        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 97; c <= 122; c++) { // 'a' to 'z'
                const newChar = String.fromCharCode(c);
                if (newChar === currentWord[i]) continue;

                const newWord = currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);

                if (newWord === endWord) {
                    return steps + 1;
                }

                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, steps + 1]);
                }
            }
        }
    }

    return 0; // No transformation sequence found
}

/*
    Time Complexity: O(M^2 * N)
    - M = length of each word
    - N = number of words in wordList
    - For each word, we try M positions, each with 26 characters.
    - Each transformation check takes O(M) time for string operations.
    - Worst case, we visit all N words.

    Space Complexity: O(N * M)
    - Word set stores N words of length M.
    - Queue can store up to N words.
    - Visited set can store up to N words.
*/

// Helper function for bidirectional BFS (optimized approach)
function ladderLengthBidirectional(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let front = new Set([beginWord]);
    let back = new Set([endWord]);
    let steps = 1;

    while (front.size > 0 && back.size > 0) {
        // Always process smaller set first
        if (front.size > back.size) {
            [front, back] = [back, front];
        }

        const nextFront = new Set();

        for (const word of front) {
            for (let i = 0; i < word.length; i++) {
                for (let c = 97; c <= 122; c++) {
                    const newChar = String.fromCharCode(c);
                    const newWord = word.slice(0, i) + newChar + word.slice(i + 1);

                    if (back.has(newWord)) {
                        return steps + 1;
                    }

                    if (wordSet.has(newWord)) {
                        nextFront.add(newWord);
                        wordSet.delete(newWord); // Mark as visited
                    }
                }
            }
        }

        front = nextFront;
        steps++;
    }

    return 0;
}

// Test Cases
console.log("Test 1 - Valid transformation:");
console.log("beginWord: 'hit', endWord: 'cog', wordList: ['hot','dot','dog','lot','log','cog']");
console.log("Expected: 5");
console.log("Output:", ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log();

console.log("Test 2 - No end word in dictionary:");
console.log("beginWord: 'hit', endWord: 'cog', wordList: ['hot','dot','dog','lot','log']");
console.log("Expected: 0");
console.log("Output:", ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
console.log();

console.log("Test 3 - Direct transformation:");
console.log("beginWord: 'hot', endWord: 'dog', wordList: ['hot','dog']");
console.log("Expected: 0 (no path: hot -> dog requires 2 changes)");
console.log("Output:", ladderLength("hot", "dog", ["hot", "dog"]));
console.log();

console.log("Test 4 - Bidirectional BFS:");
console.log("beginWord: 'hit', endWord: 'cog', wordList: ['hot','dot','dog','lot','log','cog']");
console.log("Expected: 5");
console.log("Output:", ladderLengthBidirectional("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log();

module.exports = { ladderLength, ladderLengthBidirectional };
