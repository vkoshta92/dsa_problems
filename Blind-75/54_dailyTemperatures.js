function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = []; // stores indices

  for (let i = 0; i < temperatures.length; i++) {
    // While current temp is higher than stack top
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex; // days waited
    }

    // Push current index
    stack.push(i);
  }

  return result;
}

// Test
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
// [1,1,4,2,1,1,0,0]
