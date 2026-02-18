/**
 * Question: 9_26_removeDuplicates (Array: Remove Duplicates from Sorted Array)
 * 
 * Explanation (Hinglish):
 * Humein ek sorted line di hai jisme kuch log repeat ho rahe hain (jaise 1, 1, 2, 2, 3). 
 * Humein sirf unique logon ko line ke shuruat mein lana hai. 
 * Hum do pointers rakhte hain: ek jo bata raha hai ki unique log kahan tak hain, aur dusra jo poori line check kar raha hai. 
 * Jab bhi koi naya person mile, use unique wali jagah pe bitha do.
 * 
 * Logic:
 * 1. `pointer = 0` (pehle element ke liye).
 * 2. Loop `i = 0` se length tak:
 * 3. Agar `nums[i] > nums[pointer]`, matlab naya unique element mila!
 * 4. Pointer ko aage badhao (`pointer++`) aur wahan naya element rakh do.
 * 5. Last mein `pointer + 1` return karo (yahi count hai unique elements ka).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
//  non-decreasing - may be duplicate a[i+1]>= a[i]
// two pointer 
var removeDuplicates = function (nums) {
    let pointer = 0; //first index pointer
    for (let i = 0; i < nums.length; i++) {
        // find unique element
        if (nums[i] > nums[pointer]) {
            // pointer= pointer+1; // pointer right me shift ho jee
            pointer++;
            nums[pointer] = nums[i];

        }
    }
    return pointer + 1; // pointer indepointer bta rha h value ak jyda hogi last indepointer se 

};