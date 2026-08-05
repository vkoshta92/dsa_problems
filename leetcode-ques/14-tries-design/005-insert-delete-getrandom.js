/*
    Problem: Insert Delete GetRandom O(1)
    Difficulty: Medium
    Companies: Amazon, Google, Meta, Microsoft, Apple

    Problem Statement:
    Implement the RandomizedSet class:
    - RandomizedSet() Initializes the RandomizedSet object.
    - bool insert(int val) Inserts an item val into the set if not present. Returns true if the element was not present, false otherwise.
    - bool remove(int val) Removes an item val from the set if present. Returns true if the element was present, false otherwise.
    - int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

    You must implement the functions of the class such that each function works in average O(1) time complexity.

    Example 1:
    Input: ["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]
           [[],[1],[2],[2],[],[1],[2],[]]
    Output: [null,true,false,true,2,true,false,2]
    Explanation:
        RandomizedSet randomizedSet = new RandomizedSet();
        randomizedSet.insert(1); // Inserts 1, returns true. Set: {1}
        randomizedSet.remove(2); // Returns false, set: {1}
        randomizedSet.insert(2); // Inserts 2, returns true. Set: {1, 2}
        randomizedSet.getRandom(); // Returns 1 or 2 randomly
        randomizedSet.remove(1); // Removes 1, returns true. Set: {2}
        randomizedSet.insert(2); // Returns false (2 already present), Set: {2}
*/

/*
    Hinglish Explanation (Detailed Logic):

    Is problem mein hume O(1) time mein insert, delete aur random element
    get karna hai. Single data structure se possible nahi hota, isliye
    do data structures combine karte hain:

    1. Array - Random access O(1) deta hai
    2. HashMap (Map) - Lookup, insert, delete O(1) deta hai

    Array mein actual values store karte hain, HashMap mein value -> index mapping.

    insert(val):
    - Array ke end mein value add karo.
    - HashMap mein value -> index (array.length - 1) store karo.
    - Return true.

    remove(val):
    - Agar val HashMap mein nahi hai, return false.
    - Agar val last element hai, seedha array.pop() aur map.delete().
    - Agar val last element nahi hai:
      - Last element ko val ki position pe le aao (swap trick).
      - Array ke last element ko hatao (pop).
      - Map mein last element ka index update karo.
      - Map se val hatao.
    - Yeh swap trick important hai kyunki array se beech se hatana O(n) hota
      hai, lekin last se hatana O(1) hota hai.

    getRandom():
    - Random index generate karo: Math.floor(Math.random() * array.length)
    - Us index pe array se value return karo.

    Swap trick ka example:
    Array: [1, 2, 3, 4], Map: {1:0, 2:1, 3:2, 4:3}
    Remove 2: Swap 2 with 4 -> [1, 4, 3], Map: {1:0, 4:1, 3:2}
    Ab last element (4) ko O(1) mein hata sakte hain -> [1, 4]
*/

class RandomizedSet {
    constructor() {
        this.array = [];       // Store values
        this.map = new Map();  // Store value -> index mapping
    }

    insert(val) {
        if (this.map.has(val)) {
            return false; // Already exists
        }

        this.array.push(val);
        this.map.set(val, this.array.length - 1);
        return true;
    }

    remove(val) {
        if (!this.map.has(val)) {
            return false; // Doesn't exist
        }

        const index = this.map.get(val);
        const lastElement = this.array[this.array.length - 1];

        // Swap with last element (if not already last)
        if (index !== this.array.length - 1) {
            this.array[index] = lastElement;
            this.map.set(lastElement, index);
        }

        // Remove last element
        this.array.pop();
        this.map.delete(val);

        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.array.length);
        return this.array[randomIndex];
    }
}

/*
    Time Complexity:
        - insert: O(1) amortized - push to array + map insert
        - remove: O(1) amortized - swap + pop + map delete
        - getRandom: O(1) - random index access

    Space Complexity: O(n)
        - Array stores n elements
        - HashMap stores n key-value pairs
        - Total: O(n) where n is number of elements in set
*/

// Test Cases
console.log("Test Case 1: Basic operations");
const rs1 = new RandomizedSet();
console.log("insert(1) -> Expected: true, Actual:", rs1.insert(1));
console.log("insert(2) -> Expected: true, Actual:", rs1.insert(2));
console.log("insert(1) -> Expected: false (duplicate), Actual:", rs1.insert(1));
console.log("remove(2) -> Expected: true, Actual:", rs1.remove(2));
console.log("remove(2) -> Expected: false (not found), Actual:", rs1.remove(2));
console.log("---");

console.log("Test Case 2: getRandom returns valid elements");
const rs2 = new RandomizedSet();
rs2.insert(10);
rs2.insert(20);
rs2.insert(30);
const randomVal = rs2.getRandom();
console.log("getRandom() -> Expected: 10, 20, or 30, Actual:", randomVal);
console.log("---");

console.log("Test Case 3: Remove from middle");
const rs3 = new RandomizedSet();
rs3.insert(1);
rs3.insert(2);
rs3.insert(3);
rs3.insert(4);
rs3.remove(2);
console.log("After removing 2, getRandom() -> Expected: 1, 3, or 4, Actual:", rs3.getRandom());
console.log("---");

console.log("Test Case 4: Single element");
const rs4 = new RandomizedSet();
console.log("insert(5) -> Expected: true, Actual:", rs4.insert(5));
console.log("getRandom() -> Expected: 5, Actual:", rs4.getRandom());
console.log("remove(5) -> Expected: true, Actual:", rs4.remove(5));
console.log("remove(5) -> Expected: false, Actual:", rs4.remove(5));
console.log("---");

module.exports = RandomizedSet;
