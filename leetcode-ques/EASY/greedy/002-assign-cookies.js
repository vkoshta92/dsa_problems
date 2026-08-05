/*
    Problem: Assign Cookies
    Difficulty: Easy
    Companies: Amazon, Google, Microsoft

    Problem Statement:
    You are given an integer array `cookies` where `cookies[i]` denotes the size of the i-th cookie. You are also given an integer array `children` where `children[j]` denotes the greed factor of the j-th child. Your goal is to maximize the number of content children. A child is content if his greed factor is less than or equal to the size of the cookie assigned to him. Each child can be assigned at most one cookie. Return the maximum number of content children.

    Example 1:
    Input: cookies = [1, 2, 3], children = [1, 1]
    Output: 2
    Explanation: Child 1 gets cookie of size 1, child 2 gets cookie of size 2. Both are content.

    Example 2:
    Input: cookies = [1, 2], children = [1, 2, 3]
    Output: 2
    Explanation: Child 1 gets cookie of size 1, child 2 gets cookie of size 2. Child 3 cannot be satisfied.
*/

/*
    Hinglish Explanation (Detailed Logic):

    Sabse pehle, hume cookies aur children dono arrays ko sort karna hai ascending order mein.
    Kyunki greedy approach use kar rahe hain, hume chhota se chhota cookie pehle dena hai jisse
    zyada bachon ko satisfy kar sakein.

    Sort karne ke baad, hum do pointers use karenge - ek cookies ke liye (i) aur ek children ke liye (j).
    Hum dono arrays ke start se shuru karenge.

    Ab har cookie ke liye check karenge:
    - Agar cookies[i] >= children[j], matlab yeh cookie bacche ki greed ko satisfy kar sakta hai.
      Toh hume ek content child mil gaya! (count++)
      Dono pointers aage badhao (i++, j++).
    - Agar cookies[i] < children[j], matlab yeh cookie chhota hai bacche ki greed ke liye.
      Toh yeh cookie kisi kaam ka nahi is bacche ke liye. Skip karo (i++).
    - Jab tak pointers array ki limit mein hain, tab tak loop chalao.

    Is approach mein hum guaranteed maximum content children paayenge kyunki hum hamesha
    smallest possible cookie de rahe hain har bacche ko, jo baaki bachon ke liye zyada
    cookies chhod deta hai.

    Two Pointer Approach ka fayda hai ki hum ek hi pass mein answer nikal lete hain
    after sorting, without any extra space.
*/

function assignCookies(cookies, children) {
    cookies.sort((a, b) => a - b);
    children.sort((a, b) => a - b);

    let i = 0; // cookie pointer
    let j = 0; // children pointer
    let count = 0;

    while (i < cookies.length && j < children.length) {
        if (cookies[i] >= children[j]) {
            // Cookie satisfies child's greed
            count++;
            j++; // move to next child
        }
        i++; // move to next cookie regardless
    }

    return count;
}

/*
    Time Complexity: O(n log n + m log m)
        - n = length of cookies array, m = length of children array
        - Sorting both arrays takes O(n log n) and O(m log m) respectively
        - Two pointer traversal takes O(n + m) which is dominated by sorting

    Space Complexity: O(1)
        - We are sorting in place and using only a few extra variables
        - No extra space needed apart from input arrays
*/

// Test Cases
console.log("Test Case 1: cookies = [1, 2, 3], children = [1, 1]");
console.log("Expected Output: 2");
console.log("Actual Output:", assignCookies([1, 2, 3], [1, 1]));
console.log("---");

console.log("Test Case 2: cookies = [1, 2], children = [1, 2, 3]");
console.log("Expected Output: 2");
console.log("Actual Output:", assignCookies([1, 2], [1, 2, 3]));
console.log("---");

console.log("Test Case 3: cookies = [10, 9, 8, 7], children = [5, 6, 7, 8]");
console.log("Expected Output: 2");
console.log("Actual Output:", assignCookies([10, 9, 8, 7], [5, 6, 7, 8]));
console.log("---");

console.log("Test Case 4: cookies = [1, 1], children = [1, 2, 3]");
console.log("Expected Output: 1");
console.log("Actual Output:", assignCookies([1, 1], [1, 2, 3]));
console.log("---");

module.exports = assignCookies;
