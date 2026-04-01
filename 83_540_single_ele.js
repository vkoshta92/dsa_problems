/**
 * ============================================================================
 * PROBLEM: Single Element in a Sorted Array
 * ============================================================================
 * Sorted array diya hai jisme har element 2 baar aata hai,
 * sirf ek element single hai → usse find karna hai.
 * 
 * ============================================================================
 * APPROACH: Binary Search (Pair Index Logic)
 * ============================================================================
 * Logic:
 * 1. Mid element check karo:
 *    - Agar nums[m] == nums[m-1] → pair left side me hai
 *    - Agar nums[m] == nums[m+1] → pair right side me hai
 *    - Agar dono nahi → yehi single element hai
 * 
 * 2. Count karo left side elements:
 *    - Agar count odd hai → single left side me hai
 *    - Agar count even hai → single right side me hai
 * 
 * Why this works:
 * - Perfect pairs hone chahiye (even count)
 * - Jaha pattern break hota hai → wahi single element hota hai
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(log n)
 * - Binary search use ho raha hai
 * 
 * SPACE COMPLEXITY: O(1)
 * - Extra space nahi use ho raha
 * ============================================================================
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNonDuplicate = function(nums) {

//     let l = 0;
//     let r = nums.length - 1;

//     console.log("🚀 Array:", nums);

//     while (l < = r) {

//         let m = l + Math.floor((r - l) / 2);

//         console.log("\n--- Iteration ---");
//         console.log("l:", l, "m:", m, "r:", r);
//         console.log("values:", nums[l], nums[m], nums[r]);

//         if (m > 0 && nums[m] === nums[m - 1]) {
//             console.log("👉 Pair found on LEFT");

//             let leftCount = m - 1 - l;
//             console.log("leftCount:", leftCount);

//             if (leftCount % 2 === 1) {
//                 console.log("👉 Single LEFT side");
//                 r = m - 2;
//             } else {
//                 console.log("👉 Single RIGHT side");
//                 l = m + 1;
//             }
//         }

//         else if (m < nums.length - 1 && nums[m] === nums[m + 1]) {
//             console.log("👉 Pair found on RIGHT");

//             let leftCount = m - l;
//             console.log("leftCount:", leftCount);

//             if (leftCount % 2 === 1) {
//                 console.log("👉 Single LEFT side");
//                 r = m - 1;
//             } else {
//                 console.log("👉 Single RIGHT side");
//                 l = m + 2;
//             }
//         }

//         else {
//             console.log("✅ Found Single:", nums[m]);
//             return nums[m];
//         }
//     }

//     console.log("✅ Final Single:", nums[l]);
//     return nums[l];
// };



var singleNonDuplicate = function(nums) {
    let l= 0;
    let r=nums.length-1;
    while(l<=r){
        // find left side mid eqal h ya right side
        let m= l+Math.floor((r-l)/2);
        if(nums[m]===nums[m-1]){ // left side equal

        //2 case honge single ele pair ke left hoga ya right
            let leftCount= m-1-l;
            if(leftCount%2===1){
            r=m-2;
                }
            else{
            l= m+1;
            }

        }
        else if(nums[m]===nums[m+1]){
            //2 case honge single ele pair ke left hoga ya right
            let leftCount= m-l;
             if(leftCount%2===1){
            r=m-1;
                }
            else{
            l= m+2;
            }

        }
        else{ // if  left and right not same  find single element
            return nums[m];
        }

    }
   return nums[l];
    
};