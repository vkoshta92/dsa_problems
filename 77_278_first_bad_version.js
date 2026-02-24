/**
 * Question: 77_278_first_bad_version (Binary Search: First Bad Version)
 * 
 * Explanation (Hinglish):
 * Humein bahut saari versions check karni hain (jaise software updates 1, 2, 3...). 
 * Ek version kharab (bad) ho gaya, to uske baad ke saare automatically bad ho gaye. 
 * Humein sabse PEHLA kharab version dhundna hai.
 * Hum Binary Search ka use karenge kyunki versions sorted hain (Good, Good, Good, Bad, Bad, Bad...).
 * 
 * Logic:
 * 1. Binary search lagao `l = 1` aur `r = n` ke beech.
 * 2. `mid` nikaalo.
 * 3. Check karo `isBadVersion(mid)`:
 *    - Agar False (Good): Matlab `mid` ke pehle wale bhi good hain, to aage dekho (`l = mid + 1`).
 *    - Agar True (Bad): Matlab ye ya isse pehle wala pehla bad version ho sakta hai, to peeche dekho (`r = mid`).
 * 4. Loop tab tak chalega jab tak `l < r`.
 * 5. Last mein `r` (ya `l`) return kardo, wahi pehla bad version hoga.
 * 
 * Complexity:
 * - Time Complexity: O(log n) - Kyunki hum har step mein search area aadha kar rahe hain.
 * - Space Complexity: O(1) - Humne koi extra memory use nahi kari.
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1;
        let r = n;
        while (l < r) {
            let mid = l + Math.floor((r - l) / 2);
            if (!isBadVersion(mid)) { // Good version
                l = mid + 1;
            }
            else { // Bad version
                r = mid;  // mid-1 nahi kyuki mid hi pehla bad ho sakta hai
            }
        }
        return r;
    };
};

// --- Mock Case for Verification ---
const firstBad = 4;
const isBadVersion = (v) => v >= firstBad;
const findFirstBad = solution(isBadVersion);

console.log(`Total Versions: 10, First Bad is set to: ${firstBad}`);
console.log(`Algorithm found First Bad Version at: ${findFirstBad(10)}`); // Expected: 4