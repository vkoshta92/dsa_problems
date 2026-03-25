/**
 * ============================================================================
 * PROBLEM: Evaluate Reverse Polish Notation (RPN)
 * ============================================================================
 * Evaluate an arithmetic expression in Reverse Polish Notation.
 * RPN: operators follow their operands. Example: "3 4 +" = 7
 * 
 * ============================================================================
 * APPROACH: Stack
 * ============================================================================
 * Logic:
 * 1. Iterate through tokens
 * 2. If token is number: push to stack
 * 3. If token is operator: pop two operands, apply operator, push result
 * 4. Final result is the only element in stack
 * 
 * Order of Operands:
 * - Pop second operand first (b), then first (a)
 * - For subtraction and division: a - b, a / b
 * 
 * Example: ["2", "1", "+", "3", "*"]
 * - "2": push → stack = [2]
 * - "1": push → stack = [2, 1]
 * - "+": pop 1, 2 → push 2+1=3 → stack = [3]
 * - "3": push → stack = [3, 3]
 * - "*": pop 3, 3 → push 3*3=9 → stack = [9]
 * - Result: 9
 * 
 * Division Note:
 * - Must truncate toward zero
 * - Math.trunc() handles this (removes decimal part)
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through tokens
 * - Each token pushed/popped at most once
 * 
 * SPACE COMPLEXITY: O(n)
 * - Stack stores operands
 * ============================================================================
 */

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
