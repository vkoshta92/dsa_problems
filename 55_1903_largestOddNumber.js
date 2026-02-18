/**
 * Question: 55_1903_largestOddNumber (String: Largest Odd Number in String)
 * 
 * Explanation (Hinglish):
 * Humein ek bada sa number string mein diya hai. Humein isme se sabse bada odd number part nikalna hai. 
 * Iska simple logic ye hai ki kisi bhi number ka unit digit (aakhri digit) agar odd hai, to poora number odd hota hai. 
 * To hum peeche se check karenge. Jaise hi pehla odd digit mile, wahan se lekar shuruat tak ka poora part return kar denge.
 * 
 * Logic:
 * 1. Loop chalao peeche se (`n = length - 1` se 0).
 * 2. Check karo `Number(num[n]) % 2 === 1`.
 * 3. Agar pehla hie odd digit mil gaya, to wahi tak ka substring return kar do.
 * 4. Agar poora loop khatam ho jaye aur kuch na mile, to khali string return karo.
 */

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let n = num.length - 1;
    while (n >= 0) {
        if (Number(num[n]) % 2 === 1) {
            return num.substring(0, n + 1);
        }
        n--;
    }
    return ""

};

T = O(n);
S = O(1)