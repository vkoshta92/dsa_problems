/**
 * ============================================================================
 * PROBLEM: Gas Station
 * ============================================================================
 * Given gas and cost arrays for a circular route, find starting station
 * index to complete circuit. Return -1 if impossible.
 * 
 * ============================================================================
 * APPROACH: Greedy Single Pass
 * ============================================================================
 * Logic:
 * 1. Track total gas and current gas
 * 2. If current gas becomes negative, can't start from current range
 * 3. Reset start to next station
 * 4. If total gas >= 0, solution exists
 * 
 * Key Insight:
 * - If total gas < total cost: impossible
 * - If we fail at station i, we fail at all stations from start to i
 * - So we can skip all those and start from i+1
 * 
 * Why Skip Works:
 * - We had enough gas to reach i from some start
 * - But not enough to go past i
 * - Any station between start and i would have even less gas at i
 * 
 * Example: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
 * - i=0: totalGas=-2, currGas=-2 → reset, start=1
 * - i=1: totalGas=-4, currGas=-2 → reset, start=2
 * - i=2: totalGas=-6, currGas=-2 → reset, start=3
 * - i=3: totalGas=-2, currGas=3
 * - i=4: totalGas=1, currGas=6
 * - totalGas=1 >= 0, return start=3
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through arrays
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only tracking a few variables
 * ============================================================================
 */

function canCompleteCircuit(gas, cost) {
  let totalGas = 0;
  let currGas = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    // Overall gas balance
    totalGas += gas[i] - cost[i];

    // Current journey gas balance
    currGas += gas[i] - cost[i];

    // If gas becomes negative, cannot start from previous start
    if (currGas < 0) {
      start = i + 1; // try next station
      currGas = 0;
    }
  }

  // If total gas is negative, journey impossible
  return totalGas >= 0 ? start : -1;
}

// Test
console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2])); // 3
