/*
    Problem: Basic Calculator
    Difficulty: Hard
    Companies: Amazon, Google, Microsoft, Meta, Apple

    Given a string s representing a valid expression, implement a basic
    calculator to evaluate it, and return the result of the evaluation.

    Note: You are guaranteed that the given expression is always valid and
    will only contain digits, '+', '-', '(', ')', and spaces.

    Example 1:
    Input: s = "1 + 1"
    Output: 2

    Example 2:
    Input: s = " 2-1 + 2 "
    Output: 3

    Example 3:
    Input: s = "(1+(4+5+2)-3)+(6+8)"
    Output: 23

    Example 4:
    Input: s = "1-(2+3)"
    Output: -4

    Note: This calculator does NOT support multiplication or division.
    Only addition, subtraction, and parentheses are supported.
*/

/**
 * Basic Calculator using Stack
 * 
 * Hinglish Logic Explanation:
 * --------------------------
 * Ye ek calculator hai jo +, -, aur parentheses support karta hai.
 * Brackets ko handle karne ke liye stack use karte hain.
 * 
 * Key Ideas:
 * 1. Current result track karo (result variable)
 * 2. Current sign track karo (+1 ya -1)
 * 3. Jab '(' mile:
 *    - Current result aur sign ko stack mein push karo
 *    - Result aur sign ko reset karo (naye expression ke liye)
 * 4. Jab ')' mile:
 *    - Stack se purana result aur sign wapas lo
 *    - Current result ko purane result ke saath combine karo
 *    - Pura sign apply karo
 * 5. Digits ko number mein convert karo aur current result mein add karo
 * 
 * Example walkthrough: "(1+(4+5+2)-3)+(6+8)"
 * 
 * Initial: result=0, sign=1, stack=[]
 * 
 * '(': push (0, 1) -> stack=[(0, 1)], result=0, sign=1
 * '1': number=1, result=0+1*1=1
 * '+': sign=1
 * '(': push (1, 1) -> stack=[(0, 1), (1, 1)], result=0, sign=1
 * '4': number=4, result=0+1*4=4
 * '+': sign=1
 * '5': number=5, result=4+1*5=9
 * '+': sign=1
 * '2': number=2, result=9+1*2=11
 * ')': pop (1, 1), result=1+1*11=12
 * '-': sign=-1
 * '3': number=3, result=12+(-1)*3=9
 * ')': pop (0, 1), result=0+1*9=9
 * '+': sign=1
 * '(': push (9, 1) -> stack=[(9, 1)], result=0, sign=1
 * '6': number=6, result=0+1*6=6
 * '+': sign=1
 * '8': number=8, result=6+1*8=14
 * ')': pop (9, 1), result=9+1*14=23
 * 
 * Answer: 23
 */
function calculate(s) {
    let result = 0;
    let sign = 1; // 1 for positive, -1 for negative
    const stack = [];
    let i = 0;
    
    while (i < s.length) {
        const char = s[i];
        
        if (char >= '0' && char <= '9') {
            // Digit mila, poori number nikalo
            let num = 0;
            while (i < s.length && s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + parseInt(s[i]);
                i++;
            }
            result += sign * num;
            i--; // Loop increment karega
        } else if (char === '+') {
            sign = 1;
        } else if (char === '-') {
            sign = -1;
        } else if (char === '(') {
            // Current result aur sign stack mein push karo
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            // Stack se purana result aur sign wapas lo
            const prevSign = stack.pop();
            const prevResult = stack.pop();
            result = prevResult + prevSign * result;
        }
        // Spaces ko ignore karo
        
        i++;
    }
    
    return result;
}

/*
    Time Complexity: O(n)
    - Ek baar string traverse karte hain
    - Har character ko exactly ek baar process karte hain

    Space Complexity: O(n)
    - Worst case: nested brackets hain toh stack mein zyada elements honge
    - Example: "((((1+2)+3)+4)+5)"
*/

// ===================== TEST CASES =====================

// Test Case 1: Simple addition
// "1 + 1" -> 2
console.log("Test 1:", calculate("1 + 1"));
// Expected Output: 2

// Test Case 2: Addition and subtraction
// " 2-1 + 2 " -> 3
console.log("Test 2:", calculate(" 2-1 + 2 "));
// Expected Output: 3

// Test Case 3: Nested parentheses
// "(1+(4+5+2)-3)+(6+8)" -> 23
console.log("Test 3:", calculate("(1+(4+5+2)-3)+(6+8)"));
// Expected Output: 23

// Test Case 4: Negative result
// "1-(2+3)" -> 1-5 = -4
console.log("Test 4:", calculate("1-(2+3)"));
// Expected Output: -4

// Test Case 5: Complex nested
// "((1+2)+(3+4))" -> 3+7 = 10
console.log("Test 5:", calculate("((1+2)+(3+4))"));
// Expected Output: 10

// Test Case 6: Just a number
// "42" -> 42
console.log("Test 6:", calculate("42"));
// Expected Output: 42

// Test Case 7: Multiple spaces
// " 10 +   20  -  5 " -> 25
console.log("Test 7:", calculate(" 10 +   20  -  5 "));
// Expected Output: 25

// Test Case 8: Deeply nested
// "(((1)))" -> 1
console.log("Test 8:", calculate("(((1)))"));
// Expected Output: 1

module.exports = { calculate };
