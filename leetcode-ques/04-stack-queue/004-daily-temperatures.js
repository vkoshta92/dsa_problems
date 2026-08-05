/*
    Problem: Daily Temperatures
    Difficulty: Medium
    Companies: Amazon, Google, Meta, Bloomberg

    Given an array of integers temperatures represents the daily temperatures,
    return an array answer such that answer[i] is the number of days you have
    to wait after the ith day to get a warmer temperature. If there is no future
    day for which this is possible, keep answer[i] == 0 instead.

    Example 1:
    Input: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
    Output: [1, 1, 4, 2, 1, 1, 0, 0]

    Example 2:
    Input: temperatures = [30, 40, 50, 60]
    Output: [1, 1, 1, 0]

    Example 3:
    Input: temperatures = [30, 60, 90]
    Output: [1, 1, 0]
*/

/**
 * Daily Temperatures using Monotonic Decreasing Stack
 * 
 * Hinglish Logic Explanation:
 * --------------------------
 * Humko har din ke liye find karna hai ki kitne din baad garmi badhegi
 * (kab warmer temperature aayega).
 * 
 * Brute force O(n^2) hoga - har din ke liye aage traverse karo.
 * Stack approach O(n) mein kaam ho jayega.
 * 
 * Approach:
 * 1. Ek stack maintain karo jo indices store karega
 * 2. Stack hamesha monotonic decreasing rahega (temperatures ke hisaab se)
 * 3. Har naye temperature ke liye:
 *    - Jab tak stack ka top element chhota hai current temperature se:
 *      a) Stack se index pop karo (popped index ka answer mil gaya)
 *      b) Current index - popped index = kitne din wait karna pada
 *    - Current index ko stack mein push karo
 * 
 * Example walkthrough: [73, 74, 75, 71, 69, 72, 76, 73]
 * 
 * i=0, temp=73: stack=[], push 0 -> stack=[0]
 * i=1, temp=74: 74 > 73, pop 0, ans[0]=1-0=1, push 1 -> stack=[1]
 * i=2, temp=75: 75 > 74, pop 1, ans[1]=2-1=1, push 2 -> stack=[2]
 * i=3, temp=71: 71 < 75, push 3 -> stack=[2, 3]
 * i=4, temp=69: 69 < 71, push 4 -> stack=[2, 3, 4]
 * i=5, temp=72: 72 > 69, pop 4, ans[4]=5-4=1
 *            72 > 71, pop 3, ans[3]=5-3=2, push 5 -> stack=[2, 5]
 * i=6, temp=76: 76 > 72, pop 5, ans[5]=6-5=1
 *            76 > 75, pop 2, ans[2]=6-2=4, push 6 -> stack=[6]
 * i=7, temp=73: 73 < 76, push 7 -> stack=[6, 7]
 * 
 * Final: [1, 1, 4, 2, 1, 1, 0, 0]
 */
function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = []; // Stack stores indices
    
    for (let i = 0; i < n; i++) {
        // Jab tak stack ka top chhota hai current temperature se
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    
    return answer;
}

/*
    Time Complexity: O(n)
    - Har index exactly ek baar push hota hai stack mein
    - Har index exactly ek baar pop hota hai stack se
    - Amortized analysis: O(n)

    Space Complexity: O(n)
    - Worst case: stack mein saare indices ho sakte hain
    - Example: decreasing array [5, 4, 3, 2, 1]
*/

// ===================== TEST CASES =====================

// Test Case 1: Basic example
// [73, 74, 75, 71, 69, 72, 76, 73]
console.log("Test 1:", dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// Expected Output: [1, 1, 4, 2, 1, 1, 0, 0]

// Test Case 2: Increasing array
// [30, 40, 50, 60] -> har din ke baad immediately warmer
console.log("Test 2:", dailyTemperatures([30, 40, 50, 60]));
// Expected Output: [1, 1, 1, 0]

// Test Case 3: Few elements
// [30, 60, 90] -> sirf last din ko koi nahi milega
console.log("Test 3:", dailyTemperatures([30, 60, 90]));
// Expected Output: [1, 1, 0]

// Test Case 4: Decreasing array - kisi ko bhi warmer nahi milega
// [5, 4, 3, 2, 1]
console.log("Test 4:", dailyTemperatures([5, 4, 3, 2, 1]));
// Expected Output: [0, 0, 0, 0, 0]

// Test Case 5: Single element
// [100] -> only one day, no future day
console.log("Test 5:", dailyTemperatures([100]));
// Expected Output: [0]

// Test Case 6: Alternating temperatures
// [34, 80, 34, 78, 34, 80]
console.log("Test 6:", dailyTemperatures([34, 80, 34, 78, 34, 80]));
// Expected Output: [1, 0, 2, 1, 1, 0]

module.exports = { dailyTemperatures };
