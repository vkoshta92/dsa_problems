/**
 * Question: 29_912_sort_merge_sort (Sorting: Merge Sort)
 * 
 * Explanation (Hinglish):
 * Merge Sort "Divide and Conquer" strategy pe chalta hai. 
 * Pehle poore array ko tab tak aadha-aadha todte jao jab tak har part mein sirf 1 hi element bache. 
 * Phir un tukdon ko jodte (merge karte) jao par judte waqt dhyan rakho ki wo sorted order mein judein.
 * 
 * Logic:
 * 1. `sortArray` function: Agar array length 1 ya kam hai, to wahi return karo.
 * 2. Array ko beech se tod do (`mid`).
 * 3. Left aur Right part ko recursively sort karo.
 * 4. `merge` function: Do sorted arrays ko compare karke ek naya sorted array banao.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    return merge(left, right);
};

function merge(arr1, arr2) {
    let res = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        }
        else {
            res.push(arr2[j])
            j++;

        }
    }

    return [...res, ...arr1.slice(i), ...arr2.slice(j)];
}


// time complexity- nLog(n);  merge ki n h deicide ki logn h
// space time complexity-O(n)
