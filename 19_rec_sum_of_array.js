/**
 * Question: 19_rec_sum_of_array (Recursion: Sum of Array elements)
 * 
 * Explanation (Hinglish):
 * Array के सारे numbers का sum निकालना है recursion से। 
 * हम पीछे से शुरू करते हैं। आखरी वाला number पकड़ते हैं और recursion से बोलते हैं "भाई, बाकी बच्चों का sum निकाल के दे"। 
 * जब पहले position (0) पे पहुंचेंगे, तब वापस लौटना शुरू करेंगे।
 * 
 * Logic:
 * 1. Base case: Agar index `n` 0 hai, to pehla element `arr[0]` return karo.
 * 2. Recursive step: `arr[n] + sum(n-1)` return karo.
 */

function sum(n) {
    if (n === 0) {
        return arr[0];
    }
    return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1));

