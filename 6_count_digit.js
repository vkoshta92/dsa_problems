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
 */

function countDigit(n) {
    let count = 0;
    if (n == 0) return 1;
    // convert negative to postive
    n = Math.abs(n)
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(countDigit(56778))