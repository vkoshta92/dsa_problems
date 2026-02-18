/**
 * Question: 52_541_reverse_string (String: Reverse String II)
 * 
 * Explanation (Hinglish):
 * String ko thoda ajeeb tarike se reverse karna hai. 
 * Har 2k characters mein se pehle k characters ko reverse karna hai, aur agle k ko waise hi chhod dena hai. 
 * Hum 2k ke steps mein jump karte hain. 
 * Har baar jump ke baad pehle k characters ko pakadte hain aur unhe swap karke ulta kar dete hain.
 * 
 * Logic:
 * 1. String ko array mein badlo (kyunki string immutable hoti hai).
 * 2. Loop chalao: `x = x + 2*k` ke jump ke saath.
 * 3. Har jump pe pehle `k` elements ko reverse karo (using two-pointer swap logic).
 * 4. Dhyaan rakho ki agar bache huye characters `k` se kam hain, to poore bache huye ko reverse kar do.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split(""); // because string are immutable

  //  s= s.join("") // again string

  // jump 2k step
  // reverse k element
  for (let x = 0; x < s.length; x = x + 2 * k) {
    // reverse first k elemt starting from x
    let n = k; // kyoki k number ko ko hi hme swap krna h
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) {
      [s[x + i], s[x + n - i - 1]] = [s[x + n - 1 - i], s[x + i]]; // x isliye joda h kyoki next pair me swap krenge to k*2 se bdega vha pr swap hoga.  hr br  swap me buffer value add krni pdegi , these value jump for 2k
    }
  }
  return s.join("");
};
// T-O(n);
// S-O(n)
//if not covert array O(1)





// let arr = [1, 2, 3];
// let str = "abc";

// arr[1] = 99;       // ✅ works
// str[1] = "Z";      // ❌ does not work

// console.log(arr);  // [1, 99, 3]  // mutable
// console.log(str);  // "abc" (unchanged) // imutable


// without convert string
// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {string}
//  */
// var reverseStr = function(s, k) {
//     let result = "";

//     for (let i = 0; i < s.length; i += 2 * k) {
//         // First k characters to reverse
//         let part1 = s.substring(i, i + k);
//         // Remaining next k characters (unchanged)
//         let part2 = s.substring(i + k, i + 2 * k);

//         // reverse part1 manually
//         let reversed = "";
//         for (let j = part1.length - 1; j >= 0; j--) {
//             reversed += part1[j];
//         }

//         // add both parts to result
//         result += reversed + part2;
//     }

//     return result;
// };

