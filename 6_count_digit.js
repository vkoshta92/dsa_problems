/**
 * Question: 6_count_digit (Math: Count Digits)
 * 
 * Explanation (Hinglish):
 * Humein ginn-na (count) hai ki ek number mein kitne digits hain (jaise 567 mein 3 digits hain). 
 * Hum tab tak number ko 10 se divide karte rehte hain jab tak wo 0 nahi ho jata. 
 * Jitni baar divide kiya, utne hi digits hain!
 * 
 * Logic:
 * 1. `count = 0` lo.
 * 2. `while (n > 0)`: `n = Math.floor(n / 10)` (ek digit hatao).
 * 3. Har baar `count++` badhao.
 * 4. Return `count`.
 * 
 * Complexity:
 * - Time Complexity: O(log10(n)) - Kyunki hum har step mein number ko 10 guna chota kar rahe hain.
 * - Space Complexity: O(1) - Sirf ek variable use kiya hai.
 */

function countDigit(n) {
    if (n === 0) return 1;
    n = Math.abs(n);
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

// --- Test Cases ---
console.log(`Number: 56778, Digits: ${countDigit(56778)}`); // Expected: 5
console.log(`Number: 0, Digits: ${countDigit(0)}`);         // Expected: 1
console.log(`Number: -123, Digits: ${countDigit(-123)}`);   // Expected: 3