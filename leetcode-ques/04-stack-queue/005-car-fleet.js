/*
    Problem: Car Fleet
    Difficulty: Medium
    Companies: Amazon, Google, Meta

    There are n cars going to the same destination along a one-lane road.
    The destination is target miles away.

    You are given two integer arrays position and speed, both of length n,
    where position[i] is the position of the ith car and speed[i] is the
    speed of the ith car (in miles per hour).

    A car can never pass another car ahead of it, but it can catch up to it
    and drive bumper to bumper at the same speed. The faster car will slow
    down to match the slower car's speed. The distance between these two cars
    is ignored (i.e., they are assumed to have the same position).

    A car fleet is some non-empty set of cars driving at the same position
    and same speed. Note that a single car is also a car fleet.

    If a car catches up to a car fleet right at the destination point, it
    will still be considered as one car fleet.

    Return the number of car fleets that will arrive at the destination.

    Example 1:
    Input: target = 12, position = [10, 8, 0, 5, 3], speed = [2, 4, 1, 1, 3]
    Output: 3
    Explanation:
        - Car at position 10 and 8 forms a fleet (speed becomes 2)
        - Car at position 5 forms a fleet alone
        - Car at position 0 forms a fleet alone
        - Car at position 3 forms a fleet alone

    Example 2:
    Input: target = 10, position = [3], speed = [3]
    Output: 1
    Explanation: There is only one car, hence there is only one fleet.

    Example 3:
    Input: target = 100, position = [0, 2, 4], speed = [4, 2, 1]
    Output: 1
    Explanation:
        - All cars catch up to each other before the destination
        - The fleet of cars at position 0 and 2 merge with car at position 4
*/

/**
 * Car Fleet using Stack approach
 * 
 * Hinglish Logic Explanation:
 * --------------------------
 * Sabse pehle samajhte hain car fleet kya hota hai:
 * - Jab peeche wali gaadi tez ho aur aage wali dheemi,
 *   toh peeche wali aake aage wali ke peeche lag jati hai
 * - Dono ab ek saath chalti hain - isko fleet bolte hain
 * 
 * Key Insight: Jis gaadi ko target tak pahunchne mein zyada time lagega,
 * woh fleet leader banega (aage rahega). Jo peeche hai agar tez hai,
 * toh wo fleet mein merge ho jayega.
 * 
 * Algorithm:
 * 1. Position ke hisaab se sort karo (descending order - sabse aage wali pehle)
 * 2. Har gaadi ke liye calculate karo time to reach target:
 *    time = (target - position) / speed
 * 3. Stack mein time store karo (monotonic decreasing)
 * 4. Agar current gaadi ka time > stack top ka time:
 *    - Matlab current gaadi aage hai (fleet leader)
 *    - Naya fleet banega, stack mein push karo
 * 5. Agar current gaadi ka time <= stack top ka time:
 *    - Matlab current gaadi peeche hai aur tez hai
 *    - Wo fleet mein merge ho jayega, kuch mat karo
 * 
 * Example walkthrough: target=12, position=[10,8,0,5,3], speed=[2,4,1,1,3]
 * 
 * Sort by position desc: [(10,2), (8,4), (5,1), (3,3), (0,1)]
 * 
 * Times to reach target:
 *   car(10,2): (12-10)/2 = 1.0
 *   car(8,4):  (12-8)/4  = 1.0
 *   car(5,1):  (12-5)/1  = 7.0
 *   car(3,3):  (12-3)/3  = 3.0
 *   car(0,1):  (12-0)/1  = 12.0
 * 
 * Processing:
 * car(10,2) time=1.0: stack=[], push 1.0 -> stack=[1.0]
 * car(8,4)  time=1.0: 1.0 <= 1.0, skip -> stack=[1.0]
 * car(5,1)  time=7.0: 7.0 > 1.0, push -> stack=[1.0, 7.0]
 * car(3,3)  time=3.0: 3.0 <= 7.0, skip -> stack=[1.0, 7.0]
 * car(0,1)  time=12.0: 12.0 > 7.0, push -> stack=[1.0, 7.0, 12.0]
 * 
 * Answer: 3 fleets
 */
function carFleet(target, position, speed) {
    const n = position.length;
    
    // Create pairs of (position, speed) and sort by position descending
    const cars = [];
    for (let i = 0; i < n; i++) {
        cars.push({ pos: position[i], spd: speed[i] });
    }
    cars.sort((a, b) => b.pos - a.pos);
    
    const stack = []; // Stack stores times to reach target
    
    for (const car of cars) {
        const time = (target - car.pos) / car.spd;
        
        // Agar stack empty hai ya current time zyada hai
        // toh naya fleet leader hai
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }
        // Agar time <= stack top, toh ye gaadi fleet mein merge ho jayegi
    }
    
    return stack.length;
}

/*
    Time Complexity: O(n log n)
    - Sorting ke liye O(n log n)
    - Stack operations O(n)
    - Overall: O(n log n)

    Space Complexity: O(n)
    - cars array ke liye O(n)
    - Stack ke liye O(n)
*/

// ===================== TEST CASES =====================

// Test Case 1: Basic example
// Cars at 10,8 form fleet, car at 5 alone, car at 3 alone = 3 fleets
console.log("Test 1:", carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
// Expected Output: 3

// Test Case 2: Single car
// Only one car = one fleet
console.log("Test 2:", carFleet(10, [3], [3]));
// Expected Output: 1

// Test Case 3: All cars merge before destination
// All cars catch up to each other = 1 fleet
console.log("Test 3:", carFleet(100, [0, 2, 4], [4, 2, 1]));
// Expected Output: 1

// Test Case 4: Cars at same position
// Position 0, speed 2 and speed 4 = merge into 1 fleet
// Position 5, speed 1 = separate fleet
console.log("Test 4:", carFleet(10, [0, 0, 5], [2, 4, 1]));
// Expected Output: 2

// Test Case 5: No car catches another
// All cars have different times = each is its own fleet
console.log("Test 5:", carFleet(20, [0, 4, 8], [2, 2, 2]));
// Expected Output: 3

// Test Case 6: All cars start at same position
// Only one fleet
console.log("Test 6:", carFleet(10, [0, 0, 0], [1, 2, 3]));
// Expected Output: 1

module.exports = { carFleet };
