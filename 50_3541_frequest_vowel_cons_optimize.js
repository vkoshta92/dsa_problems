/**
 * Question: 50_3541_frequest_vowel_cons_optimize (String: Frequent Vowel and Consonant - Optimized)
 * 
 * Explanation (Hinglish):
 * Purane tarike mein hum baar baar loop chala rahe the. 
 * Is optimized tarike mein hum Object.keys() use karte hain taaki sirf unique characters pe hi check karna pade. 
 * Kyunki vowels aur consonants to fixed hote hain, to map ki keys pe loop chalana bahut fast hota hai.
 * 
 * Logic:
 * 1. HashMap mein frequency store karo.
 * 2. `Object.keys(hashMap)` nikalo.
 * 3. Keys pe loop chalao aur vowels/consonants ki max frequency update karo.
 * 4. Time O(n) rahega par loop andr wala bahut chota hoga (max 26 characters).
 */


/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let hashMap = {};
    for (let i = 0; i < s.length; i++) {  // O(n)
        //  hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
        hashMap[s[i]] = !hashMap[s[i]] ? 1 : ++hashMap[s[i]]

    }
    // max  vowel find
    let maxVowels = 0;
    let maxCons = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    let mapKeys = Object.keys(hashMap) // bar br repeat vle na check kre masp me a gye h vhi check kre  kyoki  usme repeat nhi higa koi alphabet.isme max 26 letter hi a askte h
    for (let i = 0; i < mapKeys.length; i++) {  // O(1)
        if (vowels.includes(mapKeys[i])) {
            maxVowels = Math.max(maxVowels, hashMap[mapKeys[i]])
        }
        else {

            maxCons = Math.max(maxCons, hashMap[mapKeys[i]])
        }
    }
    return maxVowels + maxCons;
};

// time- O(n)
//Space- O(1) - max value 26 hi kr skta h map chec 1 millian ki string ho.