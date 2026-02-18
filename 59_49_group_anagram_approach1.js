/**
 * Question: 59_49_group_anagram_approach1 (String: Group Anagrams - Sorting Approach)
 * 
 * Explanation (Hinglish):
 * Humein bohot saare words ko group karna hai jo aapas mein anagram hain. 
 * Anagram words ko agar sort (A-Z arrange) kar diya jaye, to wo bilkul ek jaise ban jate hain. 
 * Jaise "eat" aur "tea" dono sort hokar "aet" ban jate hain. 
 * Hum har word ko sort karte hain aur use diary (Map) ki 'key' bana lete hain. 
 * Jo bhi same 'key' wale words hain, unhe ek hi group mein daal dete hain.
 * 
 * Logic:
 * 1. Ek map banao groups store karne ke liye.
 * 2. Words pe loop chalao: har word ko split-sort-join karke `sortedStr` banao.
 * 3. Agar `sortedStr` map mein nahi hai, to naya array banao.
 * 4. Word ko us array mein push karo.
 * 5. Map ke saare values return karo.
 */

// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split("").sort().join("");

        if (!map[sortedStr]) {
            map[sortedStr] = [strs[i]]; // initialize array kyoki array me hi push krte h
        }
        else {
            map[sortedStr].push(strs[i]) // push value
        }
    }
    return [...Object.values(map)]
};

// T- O(n * m logm)
// S- O(n*m)