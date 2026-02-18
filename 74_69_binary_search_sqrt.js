/**
 * Question: 74_69_binary_search_sqrt (Math: Sqrt(x) using Binary Search)
 * 
 * Explanation (Hinglish):
 * Humein kisi number ka square root nikalna hai (jaise 8 ka root 2 hota hai, kyunki 2*2=4 par 3*3=9 zyada ho jayega). 
 * Hum 0 se lekar x tak ek-ek karke check nahi karenge (slow hoga), balki Binary Search use karenge. 
 * Hum 'mid' dabba check karte hain, agar uska square x se chota hai, to hum aage wale half mein dekhte hain, warna piche wale half mein.
 * 
 * Logic:
 * 1. Range set karo: `left = 2`, `right = x/2`. (0, 1 ke liye seedha return).
 * 2. `while (left <= right)`: `mid` nikaalo.
 * 3. Agar `mid * mid === x`, to `mid` mil gaya!
 * 4. Agar `mid * mid < x`, to `left = mid + 1` (zyada bada number chaiye).
 * 5. Agar `mid * mid > x`, to `right = mid - 1` (chota number chaiye).
 * 6. Last mein `right` return karo kyunki wo sabse close integer root hoga.
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;
    let left = 2;
    let right = Math.floor(x / 2);
    while (left <= right) {
        // let mid= Math.floor((left+right)/2);
        let mid = left + Math.floor((right - left) / 2); // overcome overflow in other language

        if (x === mid ** 2) {
            return mid;
        }
        else if (x > mid ** 2) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }

    }
    return right  // sbse close yhi hogi 

};