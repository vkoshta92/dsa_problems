/**
 * Question: 5.5_star (Pattern: Inverted Number Triangle)
 * 
 * Explanation (Hinglish):
 * Is baar stairs ulati hain! Sabse upar zyada numbers, aur niche aate aate kam hotey jayenge. 
 * Jaise 12345, phir 1234, phir 123... 
 * Hum andar wale loop ko `n - i` tak chalate hain taki har baar ek kam ho jaye.
 * 
 * Logic:
 * 1. Loop `i` (lines) shuru se n tak.
 * 2. Andar wala loop `j` hamesha 1 se shuru hoga par khatam `n - i` par hoga.
 */

let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += (j + 1);
  }
  console.log(row);
}