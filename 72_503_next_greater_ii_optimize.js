/**
 * Question: 72_503_next_greater_ii_optimize (Stack: Next Greater Element II - Optimized)
 * 
 * Explanation (Hinglish):
 * Bina array ko double kare kaam kaise karein? 
 * Hum hypothetically loop ko `2*n` tak chalate hain. 
 * Jab hum `i % n` karte hain, to loop apne aap circular behave karne lagta hai. 
 * Ye memory bachata hai aur logic wahi rehta hai.
 * 
 * Logic:
 * 1. Loop chalao `2*n - 2` se 0 tak.
 * 2. `i % n` use karke original indices pe kaam karo.
 * 3. Monotonic stack logic se greater element dhundo aur stack mein rakho.
 * 4. Result `ans` array return karo.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (arr) {

    // let arr= [...nums,...nums];  
    //logic . array ko double krn ki need nhi h   array ke size ke doble tk loop chlaenge and i%n nikl  ke hisba se conditio lgenge tki vo usi n ke size me rotate kre . and hypothetcly  dobra array ko check krta rhega and greater mil jega.
    let stack = [];
    let n = arr.length;

    let ans = Array(n).fill(-1);
    stack.push(arr[n - 1]);
    for (let i = (n * 2) - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i % n] < top) {
                ans[i % n] = top;
                break;
            }
            else {
                stack.pop();

            }
        }
        stack.push(arr[i % n]);
    }
    return ans.slice(0, n)

};

// T=O(n)
// S=O(n)