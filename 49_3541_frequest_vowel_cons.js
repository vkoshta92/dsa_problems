
// https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let hashMap={};
 for(let i=0;i<s.length;i++){
    if(!hashMap[s[i]]){
        hashMap[s[i]]=1;
    }
    else{
        ++hashMap[s[i]];
    }
    //  hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
    
 }
    // max  vowel find
    let maxVowels=0;
    let maxCons=0;
    let vowels= ["a","e","i","o","u"]
    for (let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            if(hashMap[s[i]]>maxVowels){
                maxVowels= hashMap[s[i]]
            }
            // maxVowels= Math.max(maxVowels,hashMap[s[i]])
        }
        else{
              if(hashMap[s[i]]>maxCons){
            maxCons= hashMap[s[i]]

              }
            // maxCons= Math.max(maxCons,hashMap[s[i]])
        }
    }
 return maxVowels+maxCons;
};