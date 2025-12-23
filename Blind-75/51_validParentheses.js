// 📚 BATCH 11 – STACKS

function isValid(s) {
  // Stack to store opening brackets
  const stack = [];

  // Mapping of closing -> opening brackets
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  // Traverse string
  for (let ch of s) {
    // If opening bracket, push to stack
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else {
      // Closing bracket: stack must not be empty
      if (stack.length === 0) return false;

      // Top of stack must match corresponding opening
      const top = stack.pop();
      if (top !== map[ch]) return false;
    }
  }

  // Stack should be empty at end
  return stack.length === 0;
}

// Test
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
