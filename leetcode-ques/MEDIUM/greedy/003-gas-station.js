/*
    Problem: Gas Station
    Difficulty: Medium
    Companies: Amazon, Google, Microsoft, Meta, Apple

    Problem Statement:
    There are n gas stations along a circular route, where the amount of gas at the i-th station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the i-th station to the next (i+1)-th station. You begin the journey with an empty tank at one of the gas stations. Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a unique solution, it is guaranteed.

    Example 1:
    Input: gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
    Output: 3
    Explanation: Start at station 3 (index 3). Gas available: 4. Cost to next: 1. Tank: 3.
                 Station 4: Gas: 5, Cost: 2. Tank: 6. Station 0: Gas: 1, Cost: 3. Tank: 4.
                 Station 1: Gas: 2, Cost: 4. Tank: 2. Station 2: Gas: 3, Cost: 5. Tank: 0.
                 You travel from station 3 to station 3, ending with 0 gas.

    Example 2:
    Input: gas = [2, 3, 4], cost = [3, 4, 3]
    Output: -1
    Explanation: Total gas (9) >= total cost (10) is false, so no solution exists.
*/

/*
    Hinglish Explanation (Detailed Logic):

    Pehle ek zaroori check karo: agar total gas jo hai total cost se kam hai, toh circuit
    complete karna impossible hai. Seedha return -1 karo. Yeh mathematical proof hai ki agar
    total gas >= total cost nahi hai toh solution exist nahi karega.

    Ab hum ek greedy approach use karenge. Hum ek starting station (start) rakhenge jo ki 0 hai
    aur ek current tank (currentTank) jo ki 0 se shuru hoga.

    Ab har station pe jaake:
    - currentTank mein gas[i] add karo aur cost[i] subtract karo.
    - Agar currentTank negative ho gaya, matlab yeh station starting point nahi ho sakta.
      Kyunki agar hum yahan se shuru karte toh bhi aage nahi ja paate.
      Toh hum next station ko potential starting point banayenge (start = i + 1).
      Aur currentTank ko reset karo (currentTank = 0).

    Loop khatam hone ke baad, agar total gas >= total cost hai, toh jo start index hai woh
    guaranteed answer hoga. Kyunki greedy approach ne already prove kar diya hai ki
    agar kahin se start karke poora circuit complete ho sakta hai, toh woh start index hi hoga.

    Yeh approach O(n) time mein kaam karti hai aur O(1) space leti hai.
    Single pass mein answer mil jaata hai.
*/

function canCompleteCircuit(gas, cost) {
    const n = gas.length;

    // Check if total gas is less than total cost - impossible to complete
    let totalGas = 0;
    let totalCost = 0;
    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }

    if (totalGas < totalCost) {
        return -1;
    }

    // Find the starting station using greedy approach
    let currentTank = 0;
    let start = 0;

    for (let i = 0; i < n; i++) {
        currentTank += gas[i] - cost[i];

        // If tank goes negative, this starting point won't work
        if (currentTank < 0) {
            start = i + 1;
            currentTank = 0;
        }
    }

    return start;
}

/*
    Time Complexity: O(n)
        - We traverse the gas array twice (once for total check, once for finding start)
        - Both traversals are O(n), so overall O(n)

    Space Complexity: O(1)
        - We only use a few extra variables (totalGas, totalCost, currentTank, start)
        - No extra space proportional to input size
*/

// Test Cases
console.log("Test Case 1: gas = [1,2,3,4,5], cost = [3,4,5,1,2]");
console.log("Expected Output: 3");
console.log("Actual Output:", canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log("---");

console.log("Test Case 2: gas = [2,3,4], cost = [3,4,3]");
console.log("Expected Output: -1");
console.log("Actual Output:", canCompleteCircuit([2, 3, 4], [3, 4, 3]));
console.log("---");

console.log("Test Case 3: gas = [5,1,2,3,4], cost = [4,4,1,5,1]");
console.log("Expected Output: 4");
console.log("Actual Output:", canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
console.log("---");

console.log("Test Case 4: gas = [1,2,3,4,5], cost = [2,3,4,5,1]");
console.log("Expected Output: 3");
console.log("Actual Output:", canCompleteCircuit([1, 2, 3, 4, 5], [2, 3, 4, 5, 1]));
console.log("---");

module.exports = canCompleteCircuit;
