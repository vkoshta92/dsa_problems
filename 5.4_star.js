/**
 * Question: 5.4_star (Pattern: Same Number Triangle)
 * 
 * Explanation (Hinglish):
 * Ye bhi stairs jaisa hai, par har line mein wahi same number rahega jo line ka number hai. 
 * Pehli line mein sirf 1, dusri mein 22, teesri mein 333.
 * 
 * Logic:
 * 1. Loop `i` (lines).
 * 2. Andar wala loop `j` sirf `i + 1` ko bar-bar chapta rahega.
 */

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += (i + 1);
  }
  console.log(row);
}