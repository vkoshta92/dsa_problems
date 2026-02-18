/**
 * Question: 56_14_longest_coomon_prefix (String: Longest Common Prefix)
 * 
 * Explanation (Hinglish):
 * Bohot saare words diye hain, humein sabse bada wahi part nikalna hai jo sab words ke shuruat mein common ho. 
 * Jaise: ["flower","flow","flight"] mein "fl" common hai. 
 * Hum pehle word ke ek-ek letter ko uthate hain aur baaki saare words ke ussi position wale letter se match karte hain. 
 * Jahan match tuta, wahan tak ka prefix return kar dete hain.
 * 
 * Logic:
 * 1. Pehle word (`strs[0]`) ke letters pe loop chalao.
 * 2. Har letter ke liye baaki words (`strs[1]` se aakhir tak) ko check karo.
 * 3. Agar kisi word ka letter alag hai ya word khatam ho gaya, to pehle word ka wahan tak ka part (`substring`) return karo.
 * 4. Agar poora word match ho jaye, to pura word return karo.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let x = 0; // for tracking
    while (x < strs[0].length) {
        let ch = strs[0][x];
        for (let i = 1; i < strs.length; i++) {
            if (ch != strs[i][x] || x === strs[i].length) {
                // break if one condition is true
                return strs[0].substring(0, x);
            }

        }
        ++x;
    }
    return strs[0]
};

// T- O(s)  sis sum of all string
// S=O(1)