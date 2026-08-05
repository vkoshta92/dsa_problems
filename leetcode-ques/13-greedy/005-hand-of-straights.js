/*
    Problem: Hand of Straights
    Difficulty: Medium
    Companies: Amazon, Google, Meta, Microsoft

    Problem Statement:
    Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards. Given an integer array hand where hand[i] is the value written on the i-th card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

    Example 1:
    Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
    Output: true
    Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

    Example 2:
    Input: hand = [1,2,3,4,5], groupSize = 4
    Output: false
    Explanation: Alice's hand cannot be rearranged into groups of 4 consecutive cards.
*/

/*
    Hinglish Explanation (Detailed Logic):

    Pehle check karo ki cards ka count groupSize se divisible hai ya nahi.
    Agar nahi hai toh groups bana hi nahi sakte, seedha return false karo.

    Ab algorithm:
    1. Har card ki frequency count karo (Map mein store karo).
    2. Sabse chhota card dhundho jo abhi bhi available hai (sorted order mein traverse karo).
    3. Us chhote card se groupSize consecutive cards ka group banao.
       - Har card ke liye check karo ki woh available hai ya nahi.
       - Agar koi card nahi mila, toh group bana possible nahi hai, return false.
    4. Har card ki frequency decrement karo jab group mein use ho.
    5. Jab tak saare cards use nahi ho jaate, repeat karo.

    Example: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
    - Sorted: [1,2,2,3,3,4,6,7,8]
    - Frequencies: {1:1, 2:2, 3:2, 4:1, 6:1, 7:1, 8:1}
    - Start with 1: need 1,2,3 -> all available. Group formed: [1,2,3]
    - Start with 2: need 2,3,4 -> all available. Group formed: [2,3,4]
    - Start with 6: need 6,7,8 -> all available. Group formed: [6,7,8]
    - All cards used, return true!

    Yeh greedy approach hai kyunki hum hamesha smallest available card se group start karte hain.
*/

function isNStraightHand(hand, groupSize) {
    const n = hand.length;

    // Check if division is possible
    if (n % groupSize !== 0) {
        return false;
    }

    // Count frequency of each card
    const count = {};
    for (const card of hand) {
        count[card] = (count[card] || 0) + 1;
    }

    // Sort unique cards
    const sortedCards = Object.keys(count).map(Number).sort((a, b) => a - b);

    // Try to form groups starting from smallest card
    for (const card of sortedCards) {
        if (count[card] === 0) continue; // Already used in previous groups

        const frequency = count[card];

        // Need to form 'frequency' groups starting from this card
        for (let i = 0; i < groupSize; i++) {
            const currentCard = card + i;

            // Check if currentCard exists and has enough frequency
            if (!count[currentCard] || count[currentCard] < frequency) {
                return false;
            }

            // Decrease frequency as we use these cards
            count[currentCard] -= frequency;
        }
    }

    return true;
}

/*
    Time Complexity: O(n log n)
        - Counting frequencies: O(n)
        - Sorting unique cards: O(k log k) where k is number of unique cards
        - Forming groups: O(n) - each card is processed at most once
        - Overall: O(n log n) due to sorting

    Space Complexity: O(n)
        - Frequency map stores up to n unique cards
        - Sorting uses O(k) space where k <= n
*/

// Test Cases
console.log("Test Case 1: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3");
console.log("Expected Output: true");
console.log("Actual Output:", isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
console.log("---");

console.log("Test Case 2: hand = [1,2,3,4,5], groupSize = 4");
console.log("Expected Output: false");
console.log("Actual Output:", isNStraightHand([1, 2, 3, 4, 5], 4));
console.log("---");

console.log("Test Case 3: hand = [1,2,3,4,5,6], groupSize = 2");
console.log("Expected Output: true");
console.log("Actual Output:", isNStraightHand([1, 2, 3, 4, 5, 6], 2));
console.log("---");

console.log("Test Case 4: hand = [8,10,12,7,9], groupSize = 3");
console.log("Expected Output: false");
console.log("Actual Output:", isNStraightHand([8, 10, 12, 7, 9], 3));
console.log("---");

module.exports = isNStraightHand;
