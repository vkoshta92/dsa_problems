/**
 * Question: 76_33_search_in_rotated_array (Binary Search: Search in Rotated Sorted Array)
 * 
 * Explanation (Hinglish):
 * Ek sorted line thi jo kahin beech se 'Rotate' (ghum) gayi hai. Matlab line ab do hisson mein sorted hai. 
 * Humein ismein se koi number dhundna hai Bina saari line check kare. 
 * Hum Binary Search use karenge, par dhyan rakhenge ki mid ke kis side wali line sahi salamat (sorted) hai 
 * aur humara target us range mein aata hai ya nahi.
 * 
 * Logic:
 * 1. Binary Search lagaao: `l = 0`, `r = last index`.
 * 2. `mid` nikaalo aur dekho kya `arr[mid]` hi target hai? Agar haan, to return index.
 * 3. Pehle check karo left side sorted hai kya (`arr[l] <= arr[m]`)?
 *    - Agar haan, to dekho kya target left range mein hai? Agar haan to `r = m - 1`, warna `l = m + 1`.
 * 4. Agar left sorted nahi hai, to pakka right side sorted hoga:
 *    - Dekho kya target right range mein hai? Agar haan to `l = m + 1`, warna `r = m - 1`.
 * 5. Agar loop khatam ho jaye aur target na mile, to -1 return kar do.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (target === arr[m]) {
            return m;
        }

        //left side sorted
        if (arr[l] <= arr[m]) {
            if (target < arr[m] && target >= arr[l]) {
                r = m - 1;
            }
            else {
                l = m + 1
            }
        }
        // right side sorted target arr[m]<arr[r]
        else {
            if (target > arr[m] && target <= arr[r]) {
                l = m + 1;
            }
            else {
                r = m - 1;
            }
        }


    }
    return -1;
};

// --- Test Cases ---
let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(`Array: [${nums}], Target: ${target}`);
console.log(`Index found at: ${search(nums, target)}`); // Expected: 4

target = 3;
console.log(`\nArray: [${nums}], Target: ${target}`);
console.log(`Index found at: ${search(nums, target)}`); // Expected: -1

let nums2 = [1];
target = 0;
console.log(`\nArray: [${nums2}], Target: ${target}`);
console.log(`Index found at: ${search(nums2, target)}`); // Expected: -1