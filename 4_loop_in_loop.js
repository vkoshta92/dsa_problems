/**
 * Question: 4_loop_in_loop (Basic: Nested Loops)
 * 
 * Explanation (Hinglish):
 * Loop ke andar loop... matlab ek chakra ke andar dusra chakra! 
 * Jab tak baahar wala loop 1 baar chalta hai, andar wala loop apne saare round poore karta hai. 
 * Ye patterns banane ya 2D cheezon (jaise table) ke liye bahut kaam aata hai.
 * 
 * Logic:
 * 1. Baahar wala loop (`i`) control karta hai ki kitni rows (lines) hongi.
 * 2. Andar wala loop (`j`) control karta hai ki har line mein kya kaam hoga.
 * 3. Total kaam `i * j` baar hota hai.
 * 
 * Complexity:
 * - Time Complexity: O(i * j) - Jahan i baahar wale loop ki limits hain aur j andar wale ki.
 * - Space Complexity: O(1) - Humne koi extra memory use nahi kari.
 */

console.log("Nested Loop Example (Countdown Triangle):");
for (let i = 5; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row);
}