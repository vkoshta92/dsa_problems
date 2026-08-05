/*
==========================================================================
Problem Name: Time Based Key-Value Store
Difficulty: Medium
Companies: Google, Amazon, Facebook, Microsoft, Apple
==========================================================================

Problem Statement:
Design a time-based key-value data structure that can store multiple values
for the same key at different time stamps and retrieve the key's value at
a certain timestamp.

Implement the TimeMap class:
- TimeMap() Initializes the object of the data structure.
- void set(String key, String value, int timestamp) Stores the key with
  the value at the given time timestamp.
- String get(String key, int timestamp) Returns a value such that set was
  called previously with timestamp_prev <= timestamp. If there are multiple
  such values, it returns the value associated with the largest timestamp_prev.
  If no values exist, return "".

Example 1:
Input: ["TimeMap","set","get","get","set","get","get"]
       [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
Output: [null,null,"bar","bar",null,"bar2","bar2"]
==========================================================================
*/

/*
==============================================
  Hinglish Logic Explanation (HashMap + Binary Search)
==============================================

Dekho bhai, hume ek time-based key-value store banana hai.
Set mein key, value aur timestamp store karte hain.
Get mein key aur timestamp dete hain, largest timestamp <= given timestamp
ka value return karna hai.

Data Structure Design:
- Ek HashMap (Object) use karenge jisme:
  key -> array of [timestamp, value] pairs
- Har key ke liye timestamps sorted order mein honge (kyunki hum set
  chronologically call karte hain, toh array automatically sorted rahega).

Set Operation:
- Agar key pehle se hai, toh us array mein [timestamp, value] push karo.
- Agar key nayi hai, toh nayi array banao aur usme push karo.

Get Operation:
- Key ke array mein binary search lagao:
  Largest timestamp <= given timestamp dhundho.
- Binary search approach:
  1. low = 0, high = arr.length - 1
  2. Jab tak low <= high:
     a. mid = (low + high) / 2
     b. Agar arr[mid].timestamp == target: exact match mila!
     c. Agar arr[mid].timestamp < target: answer ya mid hai ya uske right mein
        low = mid + 1
     d. Agar arr[mid].timestamp > target: answer left mein hai
        high = mid - 1
  3. High pointer last valid index par hoga (<= timestamp wala)
  4. Agar high < 0 matlab koi valid timestamp nahi, return ""

Why Binary Search?
- Set calls chronological order mein hain, toh timestamps already sorted hain.
- Get mein O(log n) mein answer mil jayega instead of O(n) linear scan.

Example walkthrough:
- set("foo", "bar", 1) -> store["foo"] = [[1, "bar"]]
- set("foo", "bar2", 4) -> store["foo"] = [[1, "bar"], [4, "bar2"]]
- get("foo", 1) -> binary search, arr[0].timestamp=1==1 -> "bar"
- get("foo", 3) -> binary search, arr[0].timestamp=1<3, arr[1].timestamp=4>3
  -> high=0 -> arr[0] -> "bar"
- get("foo", 4) -> binary search, arr[1].timestamp=4==4 -> "bar2"

Time Complexity:
  Set: O(1) amortized (array push)
  Get: O(log n) where n = number of set calls for that key

Space Complexity: O(n) where n = total set calls
==============================================
*/

class TimeMap {
    constructor() {
        // HashMap: key -> array of [timestamp, value] pairs
        this.store = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store[key]) {
            this.store[key] = [];
        }
        this.store[key].push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.store[key]) {
            return "";
        }

        const arr = this.store[key];
        let low = 0;
        let high = arr.length - 1;
        let result = "";

        while (low <= high) {
            const mid = Math.floor(low + (high - low) / 2);

            if (arr[mid][0] <= timestamp) {
                // Valid timestamp hai, store karo aur right mein dhundho
                result = arr[mid][1];
                low = mid + 1;
            } else {
                // Timestamp bada hai, left mein dhundho
                high = mid - 1;
            }
        }

        return result;
    }
}

/*
==============================================
  Time Complexity:
  - set(): O(1) amortized (array push operation)
  - get(): O(log n) where n = number of entries for that key

  Space Complexity: O(n)
  - n = total number of set calls across all keys
==============================================
*/

// ===================== TEST CASES =====================

const tm = new TimeMap();

// Test Case 1: Basic set and get
// set("foo", "bar", 1)
// get("foo", 1) -> Expected: "bar"
tm.set("foo", "bar", 1);
console.log("Test 1:", tm.get("foo", 1)); // "bar"

// Test Case 2: Get with timestamp between values
// get("foo", 3) -> Expected: "bar" (closest <= 3 is timestamp 1)
console.log("Test 2:", tm.get("foo", 3)); // "bar"

// Test Case 3: Set another value and get exact match
// set("foo", "bar2", 4)
// get("foo", 4) -> Expected: "bar2"
tm.set("foo", "bar2", 4);
console.log("Test 3:", tm.get("foo", 4)); // "bar2"

// Test Case 4: Get with larger timestamp
// get("foo", 5) -> Expected: "bar2" (closest <= 5 is timestamp 4)
console.log("Test 4:", tm.get("foo", 5)); // "bar2"

// Test Case 5: Key doesn't exist
// get("baz", 1) -> Expected: ""
console.log("Test 5:", tm.get("baz", 1)); // ""

// Test Case 6: Get with timestamp smaller than all stored
// get("foo", 0) -> Expected: "" (no timestamp <= 0)
console.log("Test 6:", tm.get("foo", 0)); // ""

module.exports = TimeMap;
