/**
 * Question: 75_374_guess_number (Binary Search: Guess Number Higher or Lower)
 * 
 * Explanation (Hinglish):
 * Ye ek game jaisa hai. Computer ne ek number chuna hai (1 se n tak), aur humein use guess karna hai. 
 * Computer humein batayega ki humara guess chota hai, bada hai, ya sahi hai. 
 * Humein sabse jaldi (O(log n) mein) sahi number batana hai, isliye hum Binary Search wali trick lagayenge. 
 * Har baar bich wala (mid) dabba guess karenge!
 * 
 * Logic:
 * 1. Search range: `l = 1`, `r = n`.
 * 2. Jab tak range khatam na ho: `mid` guess karo.
 * 3. `guess(mid)` se poocho: 
 *    - `0`: matlab mil gaya! Return `mid`.
 *    - `1`: matlab hum chota bol rahe hain, to `l = mid + 1`.
 *    - `-1`: matlab hum bada bol rahe hain, to `r = mid - 1`.
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let l = 1;
    let r = n;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        let fetchData = guess(mid);
        if (fetchData === 0) {
            return mid;
        }
        else if (fetchData > 0) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }

    return -1;// no need  1 <= pick <= n but safer side return -1
};