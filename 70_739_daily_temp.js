/**
 * Question: 70_739_daily_temp (Stack: Daily Temperatures)
 * 
 * Explanation (Hinglish):
 * Humein batana hai ki kitne dino baad garmi (zyada temperature) aane wali hai. 
 * Ye bhi Next Greater Element jaisa hi hai, par yahan hum value nahi balki 'dinon ka fark' (index difference) dhundte hain. 
 * Hum stack mein temperature ki jagah unke 'index' store karte hain. 
 * Peeche se chalenge aur garmi wale din ka index dhundte jayenge.
 * 
 * Logic:
 * 1. Stack mein indices (0, 1, 2...) push karo. Loop peeche se chalao.
 * 2. Monotonic stack logic: jab tak `temp[i] >= temp[top]`, pop karte jao.
 * 3. Agar koi bada temp mila, to fark nikalo: `ans[i] = top - i`. 
 * 4. Warna `ans[i] = 0` (matlab kabhi garmi nahi aayegi).
 * 5. Current index `i` push karo.
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temp) {
    let stack = [];
    let n = temp.length;
    let ans = Array(n).fill(0);
    stack.push(n - 1);
    // ans[n-1]=0;  // aready 0 h

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1]
            if (temp[i] >= temp[top]) {
                stack.pop();
            }
            else {
                ans[i] = top - i;
                break;
            }
        }
        // if(stack.length===0){  // arrayref 0 h no need check.
        //     ans[i]=0;
        // }
        stack.push(i);
    }
    return ans;

};