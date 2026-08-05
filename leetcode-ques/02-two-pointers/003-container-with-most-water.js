/*
====================================================================
Problem: Container With Most Water
Difficulty: Medium
Companies: Amazon, Google, Microsoft, Facebook, Apple, Bloomberg
====================================================================

You are given an integer array height of length n.
There are n vertical lines drawn such that the two endpoints
of the i-th line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container,
such that the container contains the most water.

Return the maximum amount of water a container can store.

Note: You may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The max area is between index 1 (height 8) and index 8 (height 7)
             Width = 8 - 1 = 7, Height = min(8, 7) = 7, Area = 7 * 7 = 49

Example 2:
Input: height = [1,1]
Output: 1
Explanation: Only one container possible between index 0 and 1
             Width = 1 - 0 = 1, Height = min(1, 1) = 1, Area = 1

Example 3:
Input: height = [4,3,2,1,4]
Output: 16
Explanation: Container between index 0 (height 4) and index 4 (height 4)
             Width = 4 - 0 = 4, Height = min(4, 4) = 4, Area = 4 * 4 = 16

Example 4:
Input: height = [1,2,1]
Output: 2
====================================================================
*/

/*
====================================================================
Hinglish Logic Explanation (Two Pointer Approach):
====================================================================

Bhai, sabse pehle samajhte hain ki container kaise kaam karta hai.
Container ka area hota hai = width * height
Width = right index - left index
Height = min(height[left], height[right]) -- kyunki pani usi level tak bhar sakta hai

Ab brute force approach yeh hai ki har pair ka area nikal lo,
jo O(n^2) hoga. But hum optimize kar sakte hain.

Optimized Two Pointer Approach:
1. Do pointers lagao -- ek left (start) pe, ek right (end) pe.
2. Area nikalo: min(height[left], height[right]) * (right - left)
3. Ab socho, pointer kisko move karna hai?
   - Agar height[left] < height[right], toh left ko move karo (right++)
   - Agar height[right] <= height[left], toh right ko move karo (right--)
4. Kyunki width toh decrease ho raha hai har baar, humein height badhana padega
   taaki area badh sake. Isliye chhote height wale pointer ko move karte hain.
5. Har step pe maxArea update karte jao.

Yeh approach O(n) mein kaam kar jati hai because ek pointer start se
aur doosra end se chalta hai, kabhi overlap nahi karenge.

Key Insight: Agar hum bada wala pointer move karein, toh height ya toh
badhegi ya same rahegi, but width zaroor ghatega, toh area guaranteed
ghatega. But agar chhota pointer move karein, toh height badhne ka
chance hai jo area badha sakta hai.
====================================================================
*/

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let width = right - left;
        let h = Math.min(height[left], height[right]);
        let currentArea = width * h;

        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

/*
====================================================================
Time Complexity: O(n)
- Ek pass mein saare elements cover ho jaate hain
- Left pointer se start, right pointer se end, dono ek taraf move hote hain

Space Complexity: O(1)
- Sirf do pointers aur ek maxArea variable use ho raha hai
- Koi extra array nahi ban rahi
====================================================================
*/

// ======================== TEST CASES ========================

// Test Case 1: Standard example
console.log("Test 1: [1,8,6,2,5,4,8,3,7]");
console.log("Expected Output: 49");
console.log("Actual Output: " + maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("---");

// Test Case 2: Minimum array
console.log("Test 2: [1,1]");
console.log("Expected Output: 1");
console.log("Actual Output: " + maxArea([1, 1]));
console.log("---");

// Test Case 3: Symmetric array
console.log("Test 3: [4,3,2,1,4]");
console.log("Expected Output: 16");
console.log("Actual Output: " + maxArea([4, 3, 2, 1, 4]));
console.log("---");

// Test Case 4: Small array with low middle
console.log("Test 4: [1,2,1]");
console.log("Expected Output: 2");
console.log("Actual Output: " + maxArea([1, 2, 1]));
console.log("---");

// Test Case 5: Ascending order
console.log("Test 5: [1,2,3,4,5,6,7,8,9,10]");
console.log("Expected Output: 25");
console.log("Actual Output: " + maxArea([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("---");

module.exports = { maxArea };
