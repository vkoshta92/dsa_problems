/*
    Problem: Partition Labels
    Difficulty: Medium
    Companies: Amazon, Google, Meta, Microsoft, Apple

    Problem Statement:
    You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Note that the partition is done so that after concatenating all the parts, the resultant string should be s. Return a list of integers representing the size of these parts.

    Example 1:
    Input: s = "ababcbacadefegdehijhklij"
    Output: [9, 7, 8]
    Explanation: The partition is "ababcbaca", "defegde", "hijhklij".
                 - First part has letters a,b,c (last occurrence of a is at index 8)
                 - Second part has letters d,e,f,g (last occurrence of g is at index 14)
                 - Third part has letters h,i,j,k,l (last occurrence of l is at index 20)

    Example 2:
    Input: s = "eccbbbbdec"
    Output: [10]
    Explanation: All letters appear in the entire string, so it cannot be partitioned.
*/

/*
    Hinglish Explanation (Detailed Logic):

    Sabse pehle, hume har character ka last occurrence track karna hai string mein.
    Yeh isliye zaroori hai kyunki jab hum koi character include karte hain ek partition mein,
    toh uss character ke last occurrence tak jaana padega - tab tak woh character uss
    partition mein rahega.

    Algorithm:
    1. Pehle ek map banao jo har character ka last index store kare.
    2. Ab string ko traverse karo, maintaining current partition ka start aur end.
    3. Har character ke liye:
       - Current partition ka end update karo agar character ka last index end se bada hai.
       - Jab current index == end ho jaaye, matlab partition complete ho gaya!
         Size (end - start + 1) result mein daalo aur naya partition shuru karo.

    Example ke saath samjho: "ababcbacadefegdehijhklij"
    - 'a' ka last index 8 hai, toh partition end = 8
    - 'b' ka last index 5 hai, end already 8 hai
    - Jab index 8 pe pahunche (a), toh index == end, partition complete = 9 elements
    - Next partition start karo index 9 se...

    Yeh greedy approach hai kyunki hum har baar maximum possible partition size lete hain
    jab tak koi character force nahi karta usse bada karne ke liye.

    Time Complexity: O(n) - string ka ek hi pass lagta hai
    Space Complexity: O(1) - fixed 26 characters ke liye map
*/

function partitionLabels(s) {
    // Step 1: Find last occurrence of each character
    const lastOccurrence = {};
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
    }

    const result = [];
    let start = 0;
    let end = 0;

    // Step 2: Traverse string and find partitions
    for (let i = 0; i < s.length; i++) {
        // Update the end of current partition
        end = Math.max(end, lastOccurrence[s[i]]);

        // If current index equals end, partition is complete
        if (i === end) {
            result.push(end - start + 1);
            start = i + 1;
        }
    }

    return result;
}

/*
    Time Complexity: O(n)
        - We traverse the string once to build lastOccurrence map: O(n)
        - We traverse the string again to find partitions: O(n)
        - Overall: O(n)

    Space Complexity: O(1)
        - lastOccurrence map stores at most 26 entries (lowercase English letters)
        - Result array stores partitions, but this is required output
        - No extra space proportional to input size
*/

// Test Cases
console.log('Test Case 1: s = "ababcbacadefegdehijhklij"');
console.log("Expected Output: [9, 7, 8]");
console.log("Actual Output:", partitionLabels("ababcbacadefegdehijhklij"));
console.log("---");

console.log('Test Case 2: s = "eccbbbbdec"');
console.log("Expected Output: [10]");
console.log("Actual Output:", partitionLabels("eccbbbbdec"));
console.log("---");

console.log('Test Case 3: s = "abc"');
console.log("Expected Output: [1, 1, 1]");
console.log("Actual Output:", partitionLabels("abc"));
console.log("---");

console.log('Test Case 4: s = "caedbdedda"');
console.log("Expected Output: [1, 9]");
console.log("Actual Output:", partitionLabels("caedbdedda"));
console.log("---");

module.exports = partitionLabels;
