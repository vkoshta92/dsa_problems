// https://namastedev.com/learn/namaste-dsa/max-consecutive-ones-dsa-notes

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currentCount=0;
    let maxCount=0;
    for (let i=0;i<nums.length;i++){
        if(nums[i]===1){
            currentCount++;
        }
        if(nums[i]===0){
        
            maxCount= Math.max(currentCount,maxCount);
            currentCount=0;

        }
    }
   // check again max
    // o milega nhi curet increase hota rhge update nhi hopyga isliye  max check kr liya h
    return Math.max(currentCount,maxCount);
};

