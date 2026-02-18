/**
 * Question: 45_58_strings_lenghLastWord_another_approach (String: Length of Last Word - Single Loop)
 * 
 * Explanation (Hinglish):
 * Is approach mein hum ek hi loop mein kaam khatam karte hain. 
 * Peeche se shuru karte hain. Agar character space nahi hai, to count badhao. 
 * Agar space mil jaye AUR count pehle hi kuch ho chuka hai (matlab humne word poora kar liya), to loop se break kar do.
 * 
 * Logic:
 * 1. Loop peeche se chalao.
 * 2. Agar `s[n]` space nahi hai, to `count++`.
 * 3. Agar space mila aur `count > 0` hai, to break.
 * 4. Count return karo.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let n = s.length - 1;
    let count = 0;
    while (n >= 0) {
        if (s[n] !== " ") { // is space found
            ++count;
        }
        else if (count > 0) {  // if found space and count 0 se jyda h mesns word mil gya to vhi count ho jega vhi break ho jega.
            break;
        }
        --n;


    }
    return count;
};

// T=O(n)
//S=O(1)