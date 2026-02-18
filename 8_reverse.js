/**
 * Question: 8_reverse (Math: Reverse Integer)
 * 
 * Explanation (Hinglish):
 * Humein ek number ko ulta (reverse) karna hai (jaise 123 ka 321). 
 * Hum number ke aakhri digits ko nikalte hain aur unhe aage jodte hain. 
 * Par dhyan rakhna hai ki ulta number computer ki limit (32-bit integer) se bada na ho jaye. 
 * Agar limit cross hui, to return 0.
 * 
 * Logic:
 * 1. Number ka sign (+/-) save kar lo. Positive part pe kaam karo.
 * 2. `while (x > 0)`: aakhri digit nikalo aur use `rev * 10 + last` karke jodte jao.
 * 3. Reverse hone par check karo ki kya wo limit (`2^31`) se bada hai?
 * 4. Agar limit mein hai, to wapas sign lagake return kar do.
 * 
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let copyX = x;
    x = Math.abs(x);
    let rev = 0;
    while (x > 0) {
        let last = x % 10;
        rev = rev * 10 + last;
        x = Math.floor(x / 10);
    }
    let limit = Math.pow(2, 31);
    //   if( limit < rev || limit <-rev ){
    //     return 0;
    //   }

    if (rev < -limit || rev > limit) return 0;


    return (copyX > 0) ? rev : -rev;
};