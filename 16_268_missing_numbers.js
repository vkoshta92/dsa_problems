/**
 * Question: 16_268_missing_numbers (https://leetcode.com/problems/missing-number/)
 * 
 * Explanation (Hinglish):
 * Humein 0 se lekar N tak ki ginti di gayi hai ek array mein, par ek number gayab hai. 
 * Use dhundne ka sabse aasaan tarika: Math! 
 * Pehle nikal lo ki agar koi gayab nahi hota to total sum kitna hota. 
 * Phir array ke numbers ka asli sum nikal lo. Dono ka difference hi wo gayab number hai.
 * 
 * Logic:
 * 1. Formula use karo: `n * (n+1) / 2` taki ideal sum mil jaye.
 * 2. Array ke saare elements ka sum nikaalo (using loop or reduce).
 * 3. `totalSum - arraySum` return kar do.
 */
var missingNumber = function (nums) {
    let n = nums.length;
    // total sum calculate

    let totalSum = n * (n + 1) / 2;

    // let sum=0;
    //  for (let i=0;i<n;i++){
    //     sum += nums[i];
    //  }
    let sum = nums.reduce((acc, curr) => acc + curr, 0)

    return totalSum - sum;

};