/*
====================================================================
Problem: Trapping Rain Water
Difficulty: Hard
Companies: Google, Amazon, Microsoft, Facebook, Apple, Goldman Sachs, Bloomberg
====================================================================

Given n non-negative integers representing an elevation map where
the width of each bar is 1, compute how much water it can trap
after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The elevation map is represented by the array.
             The trapped water is 6 units.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
Explanation: The elevation map traps 9 units of water.

Example 3:
Input: height = [1,0,1]
Output: 1
Explanation: Water trapped between the two bars of height 1.

Example 4:
Input: height = [3,0,0,2,0,2]
Output: 8
====================================================================
*/

/*
====================================================================
Hinglish Logic Explanation (Two Pointer Approach):
====================================================================

Bhai, trapping rain water ek classic problem hai. Samajhte hain step by step.

Pehle samjho ki paani kaise trap hota hai:
- Har index pe paani tabhi trap hoga jab uske left mein koi
  building ho jo usse zyada ya equal ho, aur right mein bhi koi
  building ho jo usse zyada ya equal ho.
- Paani ki height = min(maxLeft, maxRight) - height[i]
  jahan maxLeft = left side ki sabse badi building
        maxRight = right side ki sabse badi building

Approach 1: Prefix Arrays (O(n) space)
- Ek leftMax array banao jo store kare har index ke left mein max height
- Ek rightMax array banao jo store kare har index ke right mein max height
- Har index pe water = min(leftMax[i], rightMax[i]) - height[i]

Approach 2: Two Pointer (O(1) space) -- OPTIMAL
- Do pointers lagao left aur right
- Do variables rakho maxLeft aur maxRight
- Agar maxLeft < maxRight, toh:
  - Agar height[left] > maxLeft, toh maxLeft update karo
  - Nahi toh paani trap karo: maxLeft - height[left]
  - Left pointer aage badhao
- Agar maxRight < maxLeft, toh:
  - Agar height[right] > maxRight, toh maxRight update karo
  - Nahi toh paani trap karo: maxRight - height[right]
  - Right pointer piche lao

Key Insight: Jab maxLeft < maxRight hota hai, toh hum jaante hain ki
right side mein maxRight se badi building hai, toh paani ki height
maxLeft pe depend karegi. Isliye hum left side process karte hain.
====================================================================
*/

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let maxLeft = height[left];
    let maxRight = height[right];
    let water = 0;

    while (left < right) {
        if (maxLeft < maxRight) {
            left++;
            if (height[left] > maxLeft) {
                maxLeft = height[left];
            } else {
                water += maxLeft - height[left];
            }
        } else {
            right--;
            if (height[right] > maxRight) {
                maxRight = height[right];
            } else {
                water += maxRight - height[right];
            }
        }
    }

    return water;
}

/*
====================================================================
Time Complexity: O(n)
- Single pass through the array
- Left and right pointers milke poora array cover karte hain

Space Complexity: O(1)
- Sirf kuch variables use ho rahe hain (left, right, maxLeft, maxRight, water)
- Koi extra array nahi ban rahi
====================================================================
*/

// ======================== TEST CASES ========================

// Test Case 1: Standard example
console.log("Test 1: [0,1,0,2,1,0,1,3,2,1,2,1]");
console.log("Expected Output: 6");
console.log("Actual Output: " + trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log("---");

// Test Case 2: Large container
console.log("Test 2: [4,2,0,3,2,5]");
console.log("Expected Output: 9");
console.log("Actual Output: " + trap([4, 2, 0, 3, 2, 5]));
console.log("---");

// Test Case 3: Simple valley
console.log("Test 3: [1,0,1]");
console.log("Expected Output: 1");
console.log("Actual Output: " + trap([1, 0, 1]));
console.log("---");

// Test Case 4: Multiple valleys
console.log("Test 4: [3,0,0,2,0,2]");
console.log("Expected Output: 8");
console.log("Actual Output: " + trap([3, 0, 0, 2, 0, 2]));
console.log("---");

// Test Case 5: No water possible
console.log("Test 5: [1,2,3,4,5]");
console.log("Expected Output: 0");
console.log("Actual Output: " + trap([1, 2, 3, 4, 5]));
console.log("---");

// Test Case 6: Empty array
console.log("Test 6: []");
console.log("Expected Output: 0");
console.log("Actual Output: " + trap([]));
console.log("---");

module.exports = { trap };
