/**
 * Question: 13_88_merge_sorted_array (https://leetcode.com/problems/merge-sorted-array/)
 * 
 * Explanation (Hinglish):
 * Do line lagi hain bachon ki, dono height ke hisaab se khade hain (sorted). 
 * Humein dono ko milaake ek hi badi line banani hai jo sorted ho. 
 * Hum peeche se shuru karte hain kyunki pehli line (nums1) mein aage jagah khali hai. 
 * Jo bada hai use sabse peeche rakhte jao.
 * 
 * Logic:
 * 1. Do pointers lo: `p1` (nums1 ka aakhri element) aur `p2` (nums2 ka aakhri element).
 * 2. Ek pointer `i` rakho jo nums1 ki puri length ke aakhri index pe ho.
 * 3. Peeche se compare karo: agar nums1[p1] bada hai, to use aakhri position pe rakho, nahi to nums2[p2] ko.
 * 4. Pointers ko peeche khisakte jao.
 */
// var merge = function(nums1, m, nums2, n) {
//     let p1=0;
//     let p2=0;
//     let nums1Copy=nums1.slice(0,m);
// // num1copy me  isliye nai h tki num1 me add krenge .
//     for (let i=0 ;i<m+n;i++){
//         // p1  condition me tb ayega jb p2 uski lenghth se bda hoga.
//         if (p2>=n || (p1<m && nums1Copy[p1]<nums2[p2])){
//             nums1[i]=nums1Copy[p1];
//             p1++;
//         }
//         else{
//             nums1[i]= nums2[p2];
//             p2++;
//         }
//     }
// return nums1;
// };

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) {
            break
        }
        if (p1 >= 0 && (nums1[p1] > nums2[p2])) {
            nums1[i] = nums1[p1];
            p1--;
        }
        else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
};