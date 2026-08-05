/*
==========================================================================
Problem Name: Koko Eating Bananas
Difficulty: Medium
Companies: Google, Amazon, Facebook, Microsoft
==========================================================================

Problem Statement:
Koko loves to eat bananas. There are n piles of bananas, the ith pile has
piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she
chooses some pile of bananas and eats k bananas from that pile. If the
pile has less than k bananas, she eats all of them instead and will not
eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish before the guards return.
Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4
Explanation: Koko eats 4 bananas/hour. She finishes in 8 hours.

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23
==========================================================================
*/

/*
==============================================
  Hinglish Logic Explanation (Binary Search on Answer)
==============================================

Dekho bhai, Koko ko banana khaane hai aur use h hours diye gaye hain.
Humein minimum speed k dhundhni hai jisme sab kha saki.

Observation:
- Minimum possible speed = 1 banana/hour (sabse slow)
- Maximum possible speed = max(pile) banana/hour (ek pile ek mein khatam)
- Answer space: [1, max(pile)]
- Agar speed k se time <= h ho raha hai, toh k answer ho sakta hai ya chhota bhi.
- Agar speed k se time > h ho raha hai, toh k bada hai, chhota karna padega.

Binary Search Approach:
1. low = 1, high = max(pile)
2. Jab tak low < high:
   a. mid = low + (high - low) / 2
   b. Calculate hours required: sum of ceil(pile[i] / mid) for all piles
   c. Agar hours <= h:
      -> speed kam ho sakti hai, high = mid
   d. Agar hours > h:
      -> speed badhani padegi, low = mid + 1
3. low == high == minimum speed

Example walkthrough: piles = [3,6,7,11], h = 8
- low=1, high=11, mid=6 -> hours = ceil(3/6)+ceil(6/6)+ceil(7/6)+ceil(11/6) = 1+1+2+2 = 6 <= 8 -> high=6
- low=1, high=6, mid=3 -> hours = 1+2+3+4 = 10 > 8 -> low=4
- low=4, high=6, mid=5 -> hours = 1+1+2+3 = 7 <= 8 -> high=5
- low=4, high=5, mid=4 -> hours = 1+2+2+3 = 8 <= 8 -> high=4
- low=4, high=4 -> minimum speed = 4!

Time Complexity: O(n * log(maxPile)) - Har binary search step mein n piles check karte hain.
Space Complexity: O(1) - Constant space.
==============================================
*/

function minEatingSpeed(piles, h) {
    // Minimum speed 1 honi chahiye, maximum = largest pile
    let low = 1;
    let high = Math.max(...piles);

    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2);

        // Calculate kitne hours lagenge mid speed se
        let hoursNeeded = 0;
        for (const pile of piles) {
            hoursNeeded += Math.ceil(pile / mid);
        }

        if (hoursNeeded <= h) {
            // Speed kam ho sakti hai, try smaller speed
            high = mid;
        } else {
            // Speed badhani padegi
            low = mid + 1;
        }
    }

    return low;
}

/*
==============================================
  Time Complexity: O(n * log(maxPile))
  - Binary search: O(log(maxPile))
  - Har step mein piles traverse: O(n)
  - Total: O(n * log(maxPile))

  Space Complexity: O(1)
  - Sirf variables use ho rahe hain.
==============================================
*/

// ===================== TEST CASES =====================

// Test Case 1: Basic example
// Input: piles = [3,6,7,11], h = 8
// Expected Output: 4
console.log("Test 1:", minEatingSpeed([3, 6, 7, 11], 8)); // 4

// Test Case 2: One pile, all hours available
// Input: piles = [30,11,23,4,20], h = 5
// Expected Output: 30
console.log("Test 2:", minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30

// Test Case 3: Slightly more hours
// Input: piles = [30,11,23,4,20], h = 6
// Expected Output: 23
console.log("Test 3:", minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23

// Test Case 4: Single pile
// Input: piles = [5], h = 5
// Expected Output: 1
console.log("Test 4:", minEatingSpeed([5], 5)); // 1

// Test Case 5: Large h (lots of time)
// Input: piles = [1,1,1,1], h = 100
// Expected Output: 1
console.log("Test 5:", minEatingSpeed([1, 1, 1, 1], 100)); // 1

module.exports = minEatingSpeed;
