/*
|--------------------------------------------------------------------------
| Problem: Asteroid Collision
| Difficulty: Medium
| Companies: Amazon, Google, Meta, Microsoft, Apple, Uber, Lyft
| LeetCode: #735
|--------------------------------------------------------------------------
|
| Problem Statement:
| We are given an array asteroids of integers representing asteroids in a row.
| For each asteroid, the absolute value represents its size, and the sign
| represents its direction (positive meaning right, negative meaning left).
| Each asteroid moves at the same speed.
|
| Find out the state of the asteroids after all collisions. If two asteroids
| meet, the smaller one will explode. If both are the same size, both will
| explode. Two asteroids moving in the same direction will never meet.
|
| Example 1:
| Input: asteroids = [5, 10, -5]
| Output: [5, 10]
| Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
|
| Example 2:
| Input: asteroids = [8, -8]
| Output: []
| Explanation: The 8 and -8 collide exploding each other.
|
| Example 3:
| Input: asteroids = [10, 2, -5]
| Output: [10]
| Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide
|              resulting in 10.
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, socho ek line mein asteroids chal rahe hain. Right direction (+ve)
| wale aage badh rahe hain, left direction (-ve) wale peeche aa rahe hain.
|
| Collision sirf tab hota hai jab right-moving (+ve) asteroid left-moving
| (-ve) asteroid ke left side pe ho. Matlab:
|   - ... kuch +ve, phir -ve ...  => collision!
|   - ... -ve, phir +ve ... => no collision (door ja rahe hain)
|   - ... +ve, +ve ... => no collision (same direction)
|   - ... -ve, -ve ... => no collision (same direction)
|
| Approach: Stack
| ---------------
| 1. Ek stack maintain karo jo bache hue asteroids ko store karega.
|
| 2. Har asteroid ko process karo:
|    a) Agar asteroid +ve hai (right moving): seedha stack mein push karo.
|       Kyunki yeh kabhi left-moving asteroid se collide nahi karega
|       (left side pe koi left-moving nahi ho sakta stack mein).
|
|    b) Agar asteroid -ve hai (left moving):
|       - Jab tak stack mein +ve asteroid hai aur uska size current se
|         chhota hai, tab tak stack ke top ko pop karo (smaller explode).
|       - Agar stack mein +ve asteroid hai aur barabar size ka hai,
|         dono destroy ho jayenge: pop karo aur current ko bhi ignore karo.
|       - Agar stack khaali hai ya stack ka top -ve hai, current push karo.
|         (Kyunki koi collision nahi hoga)
|
| 3. Stack mein jo bacha, wahi answer hai.
|
| Dry Run: asteroids = [10, 2, -5]
|   asteroid = 10 (+ve): push -> stack = [10]
|   asteroid = 2 (+ve): push -> stack = [10, 2]
|   asteroid = -5 (-ve):
|     stack top = 2 (+ve), 2 < 5: pop -> stack = [10]
|     stack top = 10 (+ve), 10 > 5: 10 survives, -5 destroyed -> stop
|   Result: [10]
|
| Dry Run: asteroids = [5, 10, -5]
|   asteroid = 5 (+ve): push -> stack = [5]
|   asteroid = 10 (+ve): push -> stack = [5, 10]
|   asteroid = -5 (-ve):
|     stack top = 10 (+ve), 10 > 5: 10 survives, -5 destroyed -> stop
|   Result: [5, 10]
|--------------------------------------------------------------------------
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
    const stack = [];

    for (const asteroid of asteroids) {
        if (asteroid > 0) {
            // Right-moving: seedha push karo
            stack.push(asteroid);
        } else {
            // Left-moving: collisions check karo
            let destroyed = false;

            while (stack.length > 0 && stack[stack.length - 1] > 0) {
                const top = stack[stack.length - 1];

                if (top < Math.abs(asteroid)) {
                    // Current asteroid bigger, stack top destroy hoga
                    stack.pop();
                } else if (top === Math.abs(asteroid)) {
                    // Dono barabar, dono destroy
                    stack.pop();
                    destroyed = true;
                    break;
                } else {
                    // Stack top bigger, current asteroid destroy
                    destroyed = true;
                    break;
                }
            }

            // Agar current asteroid destroy nahi hua, push karo
            if (!destroyed) {
                stack.push(asteroid);
            }
        }
    }

    return stack;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n)
| - Har asteroid ek baar push hota hai aur maximum ek baar pop hota hai.
| - While loop ke andar bhi total O(n) operations hote hain across all
|   iterations kyunki ek element sirf ek baar pop hota hai.
|
| Space Complexity: O(n)
| - Worst case mein koi collision nahi hoti aur saare asteroids stack mein
|   store hote hain.
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Asteroid Collision ===");
console.log("");

// Test Case 1: Standard example
console.log("Test 1: asteroids = [5, 10, -5]");
console.log("Expected: [5, 10]");
console.log("Output:", asteroidCollision([5, 10, -5]));
console.log("");

// Test Case 2: Equal collision
console.log("Test 2: asteroids = [8, -8]");
console.log("Expected: []");
console.log("Output:", asteroidCollision([8, -8]));
console.log("");

// Test Case 3: Chain collision
console.log("Test 3: asteroids = [10, 2, -5]");
console.log("Expected: [10]");
console.log("Output:", asteroidCollision([10, 2, -5]));
console.log("");

// Test Case 4: No collision (all same direction)
console.log("Test 4: asteroids = [-2, -1, 1, 2]");
console.log("Expected: [-2, -1, 1, 2]");
console.log("Output:", asteroidCollision([-2, -1, 1, 2]));
console.log("");

module.exports = { asteroidCollision };
