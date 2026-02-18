/**
 * Question: 71_503_next_greater_ii (Stack: Next Greater Element II)
 * 
 * Explanation (Hinglish):
 * Is baar array circular hai, matlab aakhri dabba ke baad phir se shuruat wale dabbe line mein hain. 
 * Iska sabse asaan tarika ye hai ki array ko double kar do (repeating). 
 * Phir normal Next Greater logic lagao. Aakhir mein n/2 results return karo.
 * 
 * Logic:
 * 1. `arr = [...nums, ...nums]` karke array badi karo.
 * 2. Peeche se loop chalao aur monotonic stack use karo.
 * 3. Results ko `ans` mein store karo.
 * 4. Top n/2 products return karo.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {

    let arr = [...nums, ...nums];
    // logic same geater ki trh hi krna h bs array circluer h to suru se krn ki vgh array ko double kr denge repeat kr denge.
    let stack = [];
    let n = arr.length;

    let ans = Array(n).fill(-1);
    stack.push(arr[n - 1]);
    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i] < top) {
                ans[i] = top;
                break;
            }
            else {
                stack.pop();

            }
        }
        stack.push(arr[i]);
    }
    return ans.slice(0, n / 2)

};