/**
 * ============================================================================
 * PROBLEM: Two Sum II - Input Array Is Sorted
 * ============================================================================
 * Sorted array diya hai aur ek target value.
 * Hume do aise indices return karne hain (1-based indexing)
 * jinka sum = target ho.
 * 
 * ============================================================================
 * APPROACH: Two Pointer
 * ============================================================================
 * Logic:
 * 1. Ek pointer start se (i) aur ek end se (j) lete hain
 * 2. Sum calculate karte hain:
 *    - Agar sum > target → right pointer (j) ko left le aao
 *    - Agar sum < target → left pointer (i) ko right le jao
 *    - Agar sum == target → answer mil gaya
 * 
 * Why this works:
 * - Array sorted hai → direction decide kar sakte hain
 * - Two pointer approach se linear time me solution milta hai
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Har element maximum ek baar visit hota hai
 * 
 * SPACE COMPLEXITY: O(1)
 * - Extra space use nahi ho raha
 * ============================================================================
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    //two pointer  because array sorted
    let i= 0;
    let j= numbers.length-1;
    while(i<j){
        let sum= numbers[i]+numbers[j]
         console.log("\n--- Iteration ---");
        console.log("sum:", sum);
          if(sum>target){
            console.log("👉 sum > target → move j left");
            --j;
        }
        else if(sum<target){
            console.log("👉 sum < target → move i right");
            ++i;
        }
        else{
            console.log("✅ Found:", [i+1, j+1]);
            return [i+1,j+1];
        }
    }
    
};