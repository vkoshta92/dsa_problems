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
