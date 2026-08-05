/*
    Problem: Candy
    Difficulty: Hard
    Companies: Amazon, Google, Meta, Microsoft, Apple

    Problem Statement:
    There are n children standing in a line. Each child is assigned a rating value given in an integer array ratings. You are giving candies to these children subjected to the following requirements:
    - Each child must have at least one candy.
    - Children with a higher rating get more candies than their neighbors.
    Return the minimum number of candies you need to have to distribute to the children.

    Example 1:
    Input: ratings = [1,0,2]
    Output: 5
    Explanation: Child 0 gets 2 candies, child 1 gets 1 candy, child 2 gets 2 candies.
                 Total = 2 + 1 + 2 = 5

    Example 2:
    Input: ratings = [1,2,2]
    Output: 4
    Explanation: Child 0 gets 1 candy, child 1 gets 2 candies, child 2 gets 1 candy.
                 Total = 1 + 2 + 1 = 4
*/

/*
    Hinglish Explanation (Detailed Logic):

    Yeh problem two-pass greedy approach se solve hoti hai.

    Pehla Pass (Left to Right):
    - Har bachche ko pehle 1 candy do (minimum requirement).
    - Left se right jao. Agar ratings[i] > ratings[i-1], toh candy[i] = candy[i-1] + 1.
      Yeh ensure karta hai ki jo bachcha zyada rated hai usse left neighbor se zyada mila.
    - Agar ratings[i] <= ratings[i-1], toh kuch mat karo, pehle se 1 candy hai.

    Dusra Pass (Right to Left):
    - Ab right se left jao. Agar ratings[i] > ratings[i+1], toh candy[i] = max(candy[i], candy[i+1] + 1).
      Yeh ensure karta hai ki jo bachcha zyada rated hai usse right neighbor se zyada mila.
    - Max isliye use karte hain kyunki pehle pass mein jo value mili thi woh bhi valid hai.

    Example: ratings = [1, 2, 4, 3, 2, 1]
    - Pehla Pass:  [1, 2, 3, 1, 1, 1]
      (4 > 2, toh 3 mila. Baaki sab 1 se shuru)
    - Dusra Pass:  [1, 2, 3, 2, 1, 1]
      (3 > 2, toh max(1, 2) = 2. 2 > 1, toh max(1, 1) = 1)
    - Final: [1, 2, 3, 2, 1, 1] = 10 candies

    Two-pass approach se hum ensure karte hain ki dono constraints satisfy hoti hain
    aur minimum candies distribute hoti hain.
*/

function candy(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);

    // Left to Right Pass: ensure higher rating than left neighbor gets more
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Right to Left Pass: ensure higher rating than right neighbor gets more
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Calculate total candies
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += candies[i];
    }

    return total;
}

/*
    Time Complexity: O(n)
        - Left to Right pass: O(n)
        - Right to Left pass: O(n)
        - Summing up candies: O(n)
        - Overall: O(n) - three linear passes

    Space Complexity: O(n)
        - candies array of size n
        - No extra space proportional to input otherwise
*/

// Test Cases
console.log("Test Case 1: ratings = [1,0,2]");
console.log("Expected Output: 5");
console.log("Actual Output:", candy([1, 0, 2]));
console.log("---");

console.log("Test Case 2: ratings = [1,2,2]");
console.log("Expected Output: 4");
console.log("Actual Output:", candy([1, 2, 2]));
console.log("---");

console.log("Test Case 3: ratings = [1,3,2,2,1]");
console.log("Expected Output: 7");
console.log("Actual Output:", candy([1, 3, 2, 2, 1]));
console.log("---");

console.log("Test Case 4: ratings = [1,2,3,4,5,3,2,1]");
console.log("Expected Output: 19");
console.log("Actual Output:", candy([1, 2, 3, 4, 5, 3, 2, 1]));
console.log("---");

module.exports = candy;
