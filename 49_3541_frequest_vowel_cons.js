/**
 * Question: 49_3541_frequest_vowel_cons (String: Frequent Vowel and Consonant)
 * 
 * Explanation (Hinglish):
 * Humein ek string di hai aur humein ye nikalna hai ki sabse zyada baar kaun sa Vowel aaya hai 
 * aur sabse zyada baar kaun sa Consonant aaya hai. Phir humein unke count ko jodna hai. 
 * Hum ek object (HashMap) banayenge jo har letter ki ginti rakhega. 
 * Phir alag se Vowels aur Consonants ki max ginti nikal lenge.
 * 
 * Logic:
 * 1. `hashMap` banake har character ka count store karo.
 * 2. `vowels` array banao (`a, e, i, o, u`).
 * 3. String pe loop chalao aur check karo agar character vowel hai to uski max frequency update karo.
 * 4. Agar consonant hai to uski max frequency update karo.
 * 5. `maxVowels + maxCons` return karo.
 */
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let hashMap = {};
    for (let i = 0; i < s.length; i++) {
        if (!hashMap[s[i]]) {
            hashMap[s[i]] = 1;
        }
        else {
            ++hashMap[s[i]];
        }
        //  hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;

    }
    // max  vowel find
    let maxVowels = 0;
    let maxCons = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            if (hashMap[s[i]] > maxVowels) {
                maxVowels = hashMap[s[i]]
            }
            // maxVowels= Math.max(maxVowels,hashMap[s[i]])
        }
        else {
            if (hashMap[s[i]] > maxCons) {
                maxCons = hashMap[s[i]]

            }
            // maxCons= Math.max(maxCons,hashMap[s[i]])
        }
    }
    return maxVowels + maxCons;
};