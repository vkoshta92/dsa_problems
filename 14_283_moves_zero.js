/**
 * Question: 14_283_moves_zero (https://leetcode.com/problems/move-zeroes/)
 * 
 * Explanation (Hinglish):
 * Ek array hai jisme kuch zeroes hain. Humein saare zeroes ko dhakka deke aakhri mein karna hai, 
 * par baaki numbers ka order nahi bigadna chahiye.
 * Hum kya karte hain? Ek pointer rakhte hain jo sirf non-zero numbers ki jagah yaad rakhta hai. 
 * Jaise hi koi non-zero number dikhe, use pointer wali jagah par rakh do aur pointer aage badhao. 
 * Baad mein bachi hui jagah par zero bhar do.
 * 
 * Logic:
 * 1. `p1` pointer ko 0 pe rakho.
 * 2. Loop chalao: agar element zero nahi hai, to use `nums[p1]` pe rakho aur `p1++` karo.
 * 3. Jab saare non-zero numbers aage aa jayein, to `p1` se lekar aakhri tak loop chalao aur 0 bhar do.
 */
var moveZeroes = function (nums) {
    let p1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[p1] = nums[i];
            p1++;
        }

    }
    // fill all remaninig element 0
    for (i = p1; i < nums.length; i++) {
        nums[i] = 0;
    }
    // or
    //  nums.slice(p1).fill(0).forEach((val, index) => {
    //     nums[p1 + index] = val;
    // });


};



// // moveZeroes.js

// /**
//  * Moves all zeros in the array to the end while keeping the order of non-zeros.
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modifies nums in-place
//  */
// var moveZeroes = function(nums) {
//     let p1 = 0;

//     // Step 1: Move non-zeros to front
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[p1] = nums[i];
//             p1++;
//         }
//     }
//     console.log("After shifting non-zeros:", nums, "p1 =", p1);

//     // Step 2: Create slice from p1 → end and fill with 0
//     let zeros = nums.slice(p1).fill(0);
//     console.log("zeros array (slice filled with 0):", zeros);
//         console.log("nums old",nums)

//     // Step 3: Copy zeros back into nums starting from p1
//     for (let i = 0; i < zeros.length; i++) {
//         nums[p1 + i] = zeros[i];
//         console.log(`Filling nums[${p1 + i}] = 0 →`, nums);
//     }
// };

// // -----------------------------
// // Test cases
// // -----------------------------
// let arr1 = [0, 1, 0, 3, 12];
// console.log("Original:", arr1);
// moveZeroes(arr1);
// console.log("Final arr1:", arr1);

// console.log("--------------");


