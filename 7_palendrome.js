/**
 * Question: 7_palindrome (Math: Palindrome Number)
 * 
 * Explanation (Hinglish):
 * Palindrome matlab wo number jise ulta karne par bhi wahi rahe (jaise 121 ulta karke bhi 121 hai). 
 * Hum number ko peeche se ek-ek digit karke todte hain aur uska ulta (reverse) banate hain. 
 * Agar original number aur reverse number barabar hain, to wo Palindrome hai!
 * 
 * Logic:
 * 1. Original number ki copy rakho (`xCopy`).
 * 2. Number ko 10 se divide karke uska aakhri digit (reminder) nikalo.
 * 3. `reverseNumber = (reverseNumber * 10) + digit` karke ulta number bunte jao.
 * 4. Number ko chota karte jao (`Math.floor(x/10)`).
 * 5. Last mein check karo: `reverseNumber === xCopy`.
 */

var isPalindrome = function (x) {
    // if(x<0) return false;
    let xCopy = x;
    x = Math.abs(x);
    let reverseNumber = 0;


    while (x > 0) {

        let reminder = x % 10;
        reverseNumber = (reverseNumber * 10) + reminder;
        x = Math.floor(x / 10);
    }
    // if( reverseNumber=== xCopy){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return reverseNumber === xCopy;
};

