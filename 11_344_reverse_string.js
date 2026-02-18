/**
 * Question: 11_344_reverse_string (https://leetcode.com/problems/reverse-string/)
 * 
 * Explanation (Hinglish):
 * Isme humein ek array diya hai letters ka, aur humein use ulta (reverse) karna hai. 
 * Par shart ye hai ki humein naya array nahi banana, usi array mein badlav karne hain.
 * Hum kya karenge? Pehla aur aakhri letter pakdenge aur unhe swap (badal) denge. 
 * Phir second aur second-last, aur aise hi beech tak jayenge.
 * 
 * Logic:
 * 1. Array ki length nikaalo.
 * 2. Loop chalao array ke aadhe (half) tak.
 * 3. Har step mein current element `s[i]` ko uske peeche se corresponding element `s[len-1-i]` ke saath swap karo.
 */
var reverseString = function (s) {
    let len = s.length;
    let halfLen = Math.floor(len / 2)
    for (let i = 0; i < halfLen; i++) {
        // swap
        [s[i], s[len - 1 - i]] = [s[len - 1 - i], s[i]]
    }
    return s;
};