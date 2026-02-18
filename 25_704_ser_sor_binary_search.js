/**
 * Question: 25_704_ser_sor_binary_search (Searching: Binary Search)
 * 
 * Explanation (Hinglish):
 * Binary Search tab kaam aata hai jab array pehle se SORTED ho. Ye bahut fast hota hai.
 * Socho tum ek dictionary mein word dhund rahe ho. Tum seedha beech (middle) ka page kholte ho. 
 * Agar word bada hai to aage dhoondhte ho, chota hai to peeche. 
 * Har baar tum search area ko aadha (half) kar dete ho.
 * 
 * Logic:
 * 1. Do pointers rakho: `left` (0) aur `right` (n-1).
 * 2. Beech ka index `middle` nikaalo.
 * 3. Agar `target == middle`, to wahi answer hai.
 * 4. Agar `target > middle`, to left ko `middle + 1` kar do.
 * 5. Agar `target < middle`, to right ko `middle - 1` kar do.
 * 6. Ye tab tak karo jab tak left <= right ho.
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (right >= left) {
        let middle = Math.floor((left + right) / 2);
        if (target === nums[middle]) return middle;
        else if (target < nums[middle]) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }

    }
    return -1;
};

// Complexity= n*1/2*1/2  ...... x=1;
// n/2^x=1;
// x= log(n)
//space O(1)
