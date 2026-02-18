/**
 * Question: 5.3_star (Pattern: Number Triangle)
 * 
 * Explanation (Hinglish):
 * Is baar hum sitare nahi, numbers chapenge! 
 * Pehli line mein 1, dusri mein 12, teesri mein 123... 
 * Jitni line ka number hai, wahan tak ginti jayegi.
 * 
 * Logic:
 * 1. Loop `i` (lines).
 * 2. Loop `j` (numbers): har baar 1 se lekar `i+1` tak numbers jodo.
 */

for (let i = 0; i < 5; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
        row += (j + 1);
    }
    console.log(row)
}