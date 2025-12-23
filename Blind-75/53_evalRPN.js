function evalRPN(tokens) {
  const stack = [];

  for (let token of tokens) {
    // If token is a number, push to stack
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      // Pop last two numbers
      const b = stack.pop();
      const a = stack.pop();

      // Apply operation
      if (token === '+') stack.push(a + b);
      else if (token === '-') stack.push(a - b);
      else if (token === '*') stack.push(a * b);
      else if (token === '/') {
        // Truncate towards zero
        stack.push(Math.trunc(a / b));
      }
    }
  }

  // Final result
  return stack.pop();
}

// Test
console.log(evalRPN(["2","1","+","3","*"])); // 9
