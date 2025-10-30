
// https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/


/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let hashMap={};
 for(let i=0;i<s.length;i++){  // O(n)
    //  hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
    hashMap[s[i]]= !hashMap[s[i]]?1: ++hashMap[s[i]]
    
 }
    // max  vowel find
    let maxVowels=0;
    let maxCons=0;
    let vowels= ["a","e","i","o","u"]
    let mapKeys= Object.keys(hashMap) // bar br repeat vle na check kre masp me a gye h vhi check kre  kyoki  usme repeat nhi higa koi alphabet.isme max 26 letter hi a askte h
    for (let i=0;i<mapKeys.length;i++){  // O(1)
        if(vowels.includes(mapKeys[i])){
            maxVowels= Math.max(maxVowels,hashMap[mapKeys[i]])
        }
        else{

            maxCons= Math.max(maxCons,hashMap[mapKeys[i]])
        }
    }
 return maxVowels+maxCons;
};

// time- O(n)
//Space- O(1) - max value 26 hi kr skta h map chec 1 millian ki string ho.