/*
    Problem: Largest Rectangle in Histogram
    Difficulty: Hard
    Companies: Amazon, Google, Microsoft, Facebook, Apple, Bloomberg

    Given an array of integers heights representing the histogram's bar height
    where the width of each bar is 1, return the area of the largest rectangle
    in the histogram.

    Example 1:
    Input: heights = [2, 1, 5, 6, 2, 3]
    Output: 10
    Explanation: The largest rectangle is shown in the red area with width=2, height=5

    Example 2:
    Input: heights = [2, 4]
    Output: 4

    Example 3:
    Input: heights = [1]
    Output: 1

    Visual representation for [2, 1, 5, 6, 2, 3]:
    
        6           ___
        5       ___|   |
        4       |   |   |
        3       |   |   |___
        2   ___|   |   |   |
        1   |   |   |   |   |___
        0___|___|___|___|___|___
            2   1   5   6   2   3
            
    Largest rectangle: width=2, height=5 (area=10)
*/

/**
 * Largest Rectangle in Histogram using Monotonic Increasing Stack
 * 
 * Hinglish Logic Explanation:
 * --------------------------
 * Humko rectangle nikalna hai jo sabse bada ho histogram mein.
 * Rectangle ki area = width * height.
 * 
 * Key Insight: Har bar ke liye, hume pata hona chahiye ki:
 * - Left mein kitni bars hain jo current bar se chhoti ya barabar hain
 * - Right mein kitni bars hain jo current bar se chhoti ya barabar hain
 * In dono se rectangle ki width milegi, aur height = current bar ki height.
 * 
 * Monotonic Stack Approach:
 * 1. Monotonic increasing stack maintain karo (indices store karo)
 * 2. Har naye bar ke liye:
 *    - Jab tak stack ka top bar bada hai current bar se:
 *      a) Stack se index pop karo (popped bar ki height fix ho gayi)
 *      b) Current index - stack top index - 1 = width
 *      c) Area = height * width, update max area
 *    - Current index push karo stack mein
 * 3. Jab sab bars process ho jayein, stack mein bacha hua indices ka bhi area calculate karo
 * 
 * Example walkthrough: [2, 1, 5, 6, 2, 3]
 * 
 * i=0, h=2: stack=[], push 0 -> stack=[0]
 * i=1, h=1: 1 < 2
 *   - pop 0, height=2, width=1-0-1=0? No, width=i=1 (kyunki stack empty)
 *     Actually: width = i - (-1) - 1 = 1 (when stack empty, left boundary = -1)
 *     area = 2 * 1 = 2, max=2
 *   - push 1 -> stack=[1]
 * i=2, h=5: 5 > 1, push 2 -> stack=[1, 2]
 * i=3, h=6: 6 > 5, push 3 -> stack=[1, 2, 3]
 * i=4, h=2: 2 < 6
 *   - pop 3, height=6, width=4-2-1=1, area=6*1=6, max=6
 *   - pop 2, height=5, width=4-1-1=2, area=5*2=10, max=10
 *   - push 4 -> stack=[1, 4]
 * i=5, h=3: 3 > 2, push 5 -> stack=[1, 4, 5]
 * 
 * End of array, process remaining:
 *   - pop 5, height=3, width=6-4-1=1, area=3*1=3, max=10
 *   - pop 4, height=2, width=6-(-1)-1=6? No: width=6-1-1=4, area=2*4=8, max=10
 *   - pop 1, height=1, width=6-(-1)-1=6, area=1*6=6, max=10
 * 
 * Answer: 10
 */
function largestRectangleArea(heights) {
    const n = heights.length;
    const stack = []; // Monotonic increasing stack of indices
    let maxArea = 0;
    
    for (let i = 0; i <= n; i++) {
        // i == n ka matlab humne saare bars process kar liye
        // Ab stack mein jo bhi hai uska area calculate karo
        const currentHeight = (i === n) ? 0 : heights[i];
        
        // Jab tak current bar stack ke top se chhota hai
        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            const area = height * width;
            maxArea = Math.max(maxArea, area);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}

/*
    Time Complexity: O(n)
    - Har index exactly ek baar push hota hai stack mein
    - Har index exactly ek baar pop hota hai stack se
    - Amortized: O(n)

    Space Complexity: O(n)
    - Worst case: stack mein saare indices ho sakte hain
    - Example: increasing array [1, 2, 3, 4, 5]
*/

// ===================== TEST CASES =====================

// Test Case 1: Basic example
// [2, 1, 5, 6, 2, 3] -> Largest rectangle: 2*5 = 10
console.log("Test 1:", largestRectangleArea([2, 1, 5, 6, 2, 3]));
// Expected Output: 10

// Test Case 2: Two bars
// [2, 4] -> 2*2 = 4
console.log("Test 2:", largestRectangleArea([2, 4]));
// Expected Output: 4

// Test Case 3: Single bar
// [1] -> 1*1 = 1
console.log("Test 3:", largestRectangleArea([1]));
// Expected Output: 1

// Test Case 4: Increasing array
// [1, 2, 3, 4, 5] -> 1*5 = 5 (last bar)
console.log("Test 4:", largestRectangleArea([1, 2, 3, 4, 5]));
// Expected Output: 9 (3*3 at index 2)

// Test Case 5: Decreasing array
// [5, 4, 3, 2, 1] -> 5*1 = 5 (first bar)
console.log("Test 5:", largestRectangleArea([5, 4, 3, 2, 1]));
// Expected Output: 5

// Test Case 6: All same heights
// [3, 3, 3, 3] -> 3*4 = 12
console.log("Test 6:", largestRectangleArea([3, 3, 3, 3]));
// Expected Output: 12

// Test Case 7: Complex case
// [2, 4, 6, 8, 6, 4, 2] -> 4*5 = 20
console.log("Test 7:", largestRectangleArea([2, 4, 6, 8, 6, 4, 2]));
// Expected Output: 20

module.exports = { largestRectangleArea };
