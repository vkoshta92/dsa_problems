/**
 * Question: 5.2_star (Pattern: Right Angled Triangle)
 * 
 * Explanation (Hinglish):
 * Is baar sitare har line mein badhte jayenge (pehli line mein 1, dusri mein 2...). 
 * Ye ek seedhi seedi (stairs) jaisa dikhega. 
 * Andar wala loop tab tak chalega jitni baahar wale loop ki current ginti (level) hai.
 * 
 * Logic:
 * 1. Loop `i` (lines): 0 se n tak.
 * 2. Loop `j` (stars): 0 se lekar `i` tak hi chalega.
 * 3. Har line mein `i + 1` sitare print honge.
 */

for (let i = 0; i < 4; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
        row += " * "
    }
    console.log(row)
}