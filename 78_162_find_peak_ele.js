/**
 * ============================================================================
 * PROBLEM: Find Peak Element
 * ============================================================================
 * Ek array diya hai jisme hume koi bhi "peak element" find karna hai.
 * Peak element wo hota hai jo apne neighbors se bada hota hai.
 * 
 * NOTE:
 * - Array sorted hona zaroori nahi hai
 * - Multiple peaks ho sakte hain → kisi bhi ek ka index return karo
 * 
 * ============================================================================
 * APPROACH: Binary Search
 * ============================================================================
 * Logic:
 * 1. Mid element find karo
 * 2. Compare nums[m] with nums[m+1]
 * 3. Agar nums[m+1] > nums[m] → peak right side me hoga
 * 4. Else → peak left side me hoga (including m)
 * 5. Loop tab tak chalao jab tak l == r na ho jaye
 * 
 * Why this works:
 * - Array me "slope" concept use karte hain
 * - Agar increasing slope hai → peak aage milega
 * - Agar decreasing slope hai → peak peeche milega
 * - Har step me half array eliminate ho jata hai
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(log n)
 * - Har iteration me search space half ho raha hai
 * 
 * SPACE COMPLEXITY: O(1)
 * - Sirf pointers use ho rahe hain, extra space nahi
 * ============================================================================
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // array sortted nhi h tb bhi ho gya kyoki choti choti sorted array h any of peak bola h ques me. 
    let l=0;
    let r= nums.length-1;
    while(l<r){
        let m= l+ Math.floor((r-l)/2);
        if(nums[m+1]>nums[m]){
            // peak right side milega
            l= m+1;
        }
        else{
            // left side but m  bhi ho skta h  kyoki m last hoga  vo bhi paek ho skta h
            r= m; // l r ke barabar ho jega exit ho jega
        }
    }
    return r; // l also return same output
    
};