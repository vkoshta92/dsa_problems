/*
    Problem: Evaluate Reverse Polish Notation
    Difficulty: Medium
    Companies: Amazon, Google, Microsoft, Facebook, LinkedIn

    You are given an array of strings tokens that represents an arithmetic
    expression in Reverse Polish Notation (postfix notation).

    Evaluate the expression. Return an integer that represents the value
    of the expression.

    Note that:
    - The valid operators are '+', '-', '*', and '/'
    - Each operand may be an integer or another expression
    - The division between two integers always truncates toward zero
    - There will not be any division by zero
    - The input represents a valid arithmetic expression in RPN

    Example 1:
    Input: tokens = ["2","1","+","3","*"]
    Output: 9
    Explanation: ((2 + 1) * 3) = 9

    Example 2:
    Input: tokens = ["4","13","5","/","+"]
    Output: 6
    Explanation: (4 + (13 / 5)) = 6

    Example 3:
    Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
    Output: 22
    Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
                = ((10 * (6 / (12 * -11))) + 17) + 5
                = ((10 * (6 / -132)) + 17) + 5
                = ((10 * 0) + 17) + 5
                = (0 + 17) + 5
                = 22
*/

/**
 * Evaluate Reverse Polish Notation using Stack approach
 * 
 * Hinglish Logic Explanation:
 * --------------------------
 * RPN (postfix notation) mein operators baad mein aate hain operands ke.
 * 
 * Hum ek stack use karenge. Token by token traverse karenge:
 * 
 * 1. Agar current token ek number hai, toh use stack mein push kar do.
 * 
 * 2. Agar current token ek operator hai (+, -, *, /), toh:
 *    - Stack se do elements pop karo (pehle pop = right operand, doosra = left operand)
 *    - Dono operands pe operation lagao
 *    - Result wapas stack mein push kar do
 * 
 * 3. Jab sab tokens ho jayein, stack mein sirf ek element bachega - that's our answer!
 * 
 * Important: Division mein truncation toward zero hota hai, isliye Math.trunc use karte hain
 * Math.floor nahi kyunki wo negative numbers ke liye galat dega.
 * 
 * Example walkthrough: ["2","1","+","3","*"]
 * Step 1: "2" -> push 2, stack = [2]
 * Step 2: "1" -> push 1, stack = [2, 1]
 * Step 3: "+" -> pop 1 and 2, compute 2+1=3, push 3, stack = [3]
 * Step 4: "3" -> push 3, stack = [3, 3]
 * Step 5: "*" -> pop 3 and 3, compute 3*3=9, push 9, stack = [9]
 * Answer: 9
 */
function evalRPN(tokens) {
    const stack = [];
    
    for (const token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            const right = stack.pop();
            const left = stack.pop();
            
            switch (token) {
                case '+':
                    stack.push(left + right);
                    break;
                case '-':
                    stack.push(left - right);
                    break;
                case '*':
                    stack.push(left * right);
                    break;
                case '/':
                    stack.push(Math.trunc(left / right));
                    break;
            }
        } else {
            stack.push(parseInt(token));
        }
    }
    
    return stack[0];
}

/*
    Time Complexity: O(n)
    - Har token ko exactly ek baar process karte hain
    - n = number of tokens

    Space Complexity: O(n)
    - Worst case mein stack mein n/2 elements ho sakte hain
    - (jab saare numbers ho aur koi operator na ho)
*/

// ===================== TEST CASES =====================

// Test Case 1: Basic addition and multiplication
// Input: ((2 + 1) * 3) = 9
console.log("Test 1:", evalRPN(["2", "1", "+", "3", "*"]));
// Expected Output: 9

// Test Case 2: Division with truncation
// Input: (4 + (13 / 5)) = 4 + 2 = 6
console.log("Test 2:", evalRPN(["4", "13", "5", "/", "+"]));
// Expected Output: 6

// Test Case 3: Complex expression with negative numbers
// ((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = 22
console.log("Test 3:", evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
// Expected Output: 22

// Test Case 4: Simple subtraction
// Input: (5 - 3) = 2
console.log("Test 4:", evalRPN(["5", "3", "-"]));
// Expected Output: 2

// Test Case 5: Single number
// Input: Just 42
console.log("Test 5:", evalRPN(["42"]));
// Expected Output: 42

// Test Case 6: Division truncation toward zero
// Input: (7 / -2) truncates to -3 (not -4)
console.log("Test 6:", evalRPN(["7", "-2", "/"]));
// Expected Output: -3

module.exports = { evalRPN };
