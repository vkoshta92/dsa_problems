/**
 * Question: 44_58_strings_lenghLastWord (String: Length of Last Word)
 * 
 * Explanation (Hinglish):
 * Ek sentence diya hai, humein usme jo sabse aakhri word hai uski lambai (length) batani hai. 
 * Sentence ke aakhir mein kuch extra spaces bhi ho sakte hain, unhe ignore karna hai. 
 * Hum sentence ke bilkul peeche se chalna shuru karenge. Pehle saare spaces ko skip karenge. 
 * Phir jab ek asli word mile, to jab tak space na aa jaye tab tak count karenge.
 * 
 * Logic:
 * 1. Index `n` ko `s.length - 1` pe rakho.
 * 2. Pehle while loop se aakhri ke saare spaces skip karo jab tak `s[n]` koi character na ban jaye.
 * 3. Dusre while loop se jab tak `s[n]` space na ho aur loop index valid ho, characters count karo.
 * 4. Count return kar do.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    //     s= s.trim();
    //     s= s.split(" "); // array
    //    return s[s.length-1].length;

    // trim all spaces , piche side se chlenge remove krenge spaces
    let n = s.length - 1;
    while (n >= 0) {
        if (s[n] !== " ") {
            break;
        }
        --n;
    }

    // n is the point where ,my last  word starts ab count start krenge
    let count = 0;
    while (n >= 0) {
        if (s[n] === " ") break;

        --n;
        ++count;


    }
    //
    return count;

};