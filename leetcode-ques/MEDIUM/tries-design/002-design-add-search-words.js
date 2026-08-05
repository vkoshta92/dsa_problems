/*
    Problem: Design Add and Search Words Data Structure
    Difficulty: Medium
    Companies: Amazon, Google, Meta, Microsoft, Apple

    Problem Statement:
    Design a data structure that supports adding new words and finding if a string matches any previously added string.
    Implement the WordDictionary class:
    - WordDictionary() Initializes the object.
    - void addWord(word) Adds word to the data structure, it can be matched later.
    - bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

    Example 1:
    Input: ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
           [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
    Output: [null,null,null,null,false,true,true,true]
    Explanation:
        WordDictionary wordDictionary = new WordDictionary();
        wordDictionary.addWord("bad");
        wordDictionary.addWord("dad");
        wordDictionary.addWord("mad");
        wordDictionary.search("pad"); // return False
        wordDictionary.search("bad"); // return True
        wordDictionary.search(".ad"); // return True
        wordDictionary.search("b.."); // return True
*/

/*
    Hinglish Explanation (Detailed Logic):

    Yeh problem Trie data structure pe based hai. Hum ek Trie banayenge jismein
    har node ke paas children honge (a-z letters ke liye) aur ek endOfWord flag.

    addWord(word) - Simple Trie Insertion:
    - Root se shuru karo. Har character ke liye ek naya node banao agar exist nahi karta.
    - Word khatam hone pe endOfWord flag true kar do.

    search(word) - Trie Search with Wildcard Support:
    - Yeh thoda tricky hai kyunki '.' (dot) kisi bhi letter ko represent kar sakta hai.
    - Root se shuru karo. Har character ke liye:
      - Agar character '.' hai (wildcard):
        - Har possible child (a-z) ke liye recursive search karo.
        - Agar koi bhi path mein word mil gaya, return true.
      - Agar character normal letter hai:
        - Us letter ke child mein jao. Agar child exist nahi karta, return false.
    - Word khatam hone pe endOfWord flag check karo.

    DFS (Depth First Search) approach use karte hain wildcard ke liye.
    Har '.' ke liye maximum 26 branches explore ho sakti hain, lekin practically
    bahut kam hoti hain.

    Trie ka fayda: Normal words ke liye O(m) time (m = word length) hai.
    Wildcards ke liye worst case O(26^m) hai, lekin average case bahut better hai.
*/

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        return this._searchInNode(word, 0, this.root);
    }

    _searchInNode(word, index, node) {
        if (index === word.length) {
            return node.isEndOfWord;
        }

        const char = word[index];

        if (char === '.') {
            // Wildcard: try all children
            for (const child of Object.values(node.children)) {
                if (this._searchInNode(word, index + 1, child)) {
                    return true;
                }
            }
            return false;
        } else {
            // Normal character
            if (!node.children[char]) {
                return false;
            }
            return this._searchInNode(word, index + 1, node.children[char]);
        }
    }
}

/*
    Time Complexity:
        - addWord: O(m) where m is the length of the word
        - search: O(m) for normal words, O(26^m) worst case for wildcards
        - Average case for search is much better than worst case

    Space Complexity: O(N * M)
        - N = total number of words, M = average length of words
        - Each word creates at most M nodes in the Trie
*/

// Test Cases
const wd = new WordDictionary();
console.log("Test Case 1: Add and search exact words");
wd.addWord("bad");
wd.addWord("dad");
wd.addWord("mad");
console.log("search('pad') -> Expected: false, Actual:", wd.search("pad"));
console.log("search('bad') -> Expected: true, Actual:", wd.search("bad"));
console.log("---");

console.log("Test Case 2: Search with wildcards");
console.log("search('.ad') -> Expected: true, Actual:", wd.search(".ad"));
console.log("search('b..') -> Expected: true, Actual:", wd.search("b.."));
console.log("---");

console.log("Test Case 3: Edge cases");
wd.addWord("a");
console.log("search('a') -> Expected: true, Actual:", wd.search("a"));
console.log("search('.') -> Expected: true, Actual:", wd.search("."));
console.log("search('aa') -> Expected: false, Actual:", wd.search("aa"));
console.log("---");

console.log("Test Case 4: Multiple dots");
wd.addWord("at");
wd.addWord("and");
wd.addWord("an");
console.log("search('a.') -> Expected: true, Actual:", wd.search("a."));
console.log("search('.a') -> Expected: true, Actual:", wd.search(".a"));
console.log("---");

module.exports = WordDictionary;
