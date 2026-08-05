/*
==========================================================================
Problem: Group Anagrams
Difficulty: Medium
Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg, Uber
==========================================================================

Problem Statement:
Given an array of strings strs, group the anagrams together. You can return 
the answer in any order. An anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, typically using all the original 
letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
- 1 <= strs.length <= 10^4
- 0 <= strs[i].length <= 100
- strs[i] consists of lower-case English letters.
==========================================================================
*/

/*
==========================================================================
Hinglish Logic Explanation:
==========================================================================

Bhai, yeh problem samajhne ke liye pehle soch ki anagram kya hota hai.
Anagram ka matlab hai ki do words ka letters same hon, bas order alag ho.

Jaise "eat" aur "tea" dono mein 'e', 'a', 't' letters hain - bas order change hai.

Toh hume kya karna hai? Ek HashMap banana hai jismein:
- KEY: sorted string (jo anagrams ka common key hoga)
- VALUE: us sorted string se match hone wale saare original strings ka group

Steps:
1. Ek empty HashMap/Map lo.
2. Har string ke liye:
   a. Us string ko sort karo (alphabetically).
   b. Sorted string ko key banao HashMap mein.
   c. Original string ko us key ke group mein daalo.
3. Finally, HashMap ki saari values (groups) return karo.

Example: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
- "eat" sort -> "aet" -> Map: { "aet": ["eat"] }
- "tea" sort -> "aet" -> Map: { "aet": ["eat", "tea"] }
- "tan" sort -> "ant" -> Map: { "aet": ["eat", "tea"], "ant": ["tan"] }
- "ate" sort -> "aet" -> Map: { "aet": ["eat", "tea", "ate"], "ant": ["tan"] }
- "nat" sort -> "ant" -> Map: { "aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"] }
- "bat" sort -> "abt" -> Map: { "aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"], "abt": ["bat"] }

Result: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

Time Complexity: O(n * k log k) jahan n = number of strings, k = max length of a string
Space Complexity: O(n * k) - HashMap mein saare strings store honge
==========================================================================
*/

function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        // String ko sort karke key banao
        const sorted = str.split('').sort().join('');

        // Agar key exist nahi karti toh empty array initialize karo
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }

        // Original string ko us group mein add karo
        map.get(sorted).push(str);
    }

    // Saari groups ko array mein convert karke return karo
    return Array.from(map.values());
}

module.exports = groupAnagrams;

// ============ TEST CASES ============

console.log("Test 1: Basic anagrams");
console.log("Input:", ["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log("Expected: [[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]");
console.log("Output:  ", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log("---");

console.log("Test 2: Single empty string");
console.log("Input: [\"\"]");
console.log("Expected: [[\"\"]]");
console.log("Output:  ", groupAnagrams([""]));
console.log("---");

console.log("Test 3: Single character strings");
console.log("Input: [\"a\"]");
console.log("Expected: [[\"a\"]]");
console.log("Output:  ", groupAnagrams(["a"]));
console.log("---");

console.log("Test 4: No anagrams - all unique");
console.log("Input: [\"abc\",\"def\",\"ghi\"]");
console.log("Expected: [[\"abc\"],[\"def\"],[\"ghi\"]]");
console.log("Output:  ", groupAnagrams(["abc", "def", "ghi"]));
console.log("---");

console.log("Test 5: Multiple groups");
console.log("Input: [\"listen\",\"silent\",\"hello\",\"olleh\",\"test\"]");
console.log("Expected: [[\"listen\",\"silent\"],[\"hello\",\"olleh\"],[\"test\"]]");
console.log("Output:  ", groupAnagrams(["listen", "silent", "hello", "olleh", "test"]));
console.log("---");
