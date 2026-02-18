/**
 * Question: 57_242_valid_anagrame (String: Valid Anagram)
 * 
 * Explanation (Hinglish):
 * Do strings Anagram tab hoti hain jab dono mein wahi same letters hon aur har letter ki ginti bhi barabar ho. 
 * Jaise "anagram" aur "nagaram". 
 * Hum ek diary (HashMap) banate hain. Pehli string ke letters note karke unki ginti badhate hain (+1). 
 * Phir dusri string ke letters note karke unki ginti ghatate hain (-1). 
 * Agar aakhir mein diary mein sab zero bacha, to Anagram hai!
 * 
 * Logic:
 * 1. Agar lambai (length) alag hai, to seedha false return karo.
 * 2. HashMap banao: string `s` ke har character ka count store karo.
 * 3. String `t` pe loop chalao: character ka count decrease karo.
 * 4. Agar kisi character ka count 0 se kam ho jaye ya mile hi na, to false.
 * 5. Last mein true return karo.
 */

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//     return s.split("").sort().join("")=== t.split("").sort().join("");

// };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        }
        else {
            ++map[s[i]];
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]] || map[t[i]] < 0) {
            return false;
        }
        else {
            map[t[i]]--; // map se check krte rhenge tab tk minus lrte rhenge agar sb 0 ho jega means barabar h letters.
        }
    }
    return true;

};

// T= O(n);
// S= O(1)