/**
 * Question: 15_485_max_concesetive_ones (https://leetcode.com/problems/max-consecutive-ones/)
 * 
 * Explanation (Hinglish):
 * Ek array mein 0s aur 1s hain. Humein ye nikalna hai ki lagataar (back-to-back) kitni baar 1 aaya hai sabse zyada.
 * Hum ek counter rakhte hain. Jab bhi 1 dikhe, counter badhao. 
 * Jaise hi 0 dikhe, check karo ki ab tak ka sabse bada count kya tha, aur phir counter ko zero kar do.
 * 
 * Logic:
 * 1. `currentCount` aur `maxCount` ko 0 se start karo.
 * 2. Array pe loop chalao.
 * 3. Agar 1 hai to `currentCount++` karo.
 * 4. Agar 0 hai to `maxCount` ko update karo (`Math.max`) aur `currentCount` ko reset karo.
 * 5. Last mein ek aur baar `Math.max` return karo kyunki ho sakta hai array 1 pe khatam ho.
 */
var findMaxConsecutiveOnes = function (nums) {
    let currentCount = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
        }
        if (nums[i] === 0) {

            maxCount = Math.max(currentCount, maxCount);
            currentCount = 0;

        }
    }
    // check again max
    // o milega nhi curet increase hota rhge update nhi hopyga isliye  max check kr liya h
    return Math.max(currentCount, maxCount);
};

