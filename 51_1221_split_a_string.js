/**
 * Question: 51_1221_split_a_string (String: Split a String in Balanced Strings)
 * 
 * Explanation (Hinglish):
 * Humein ek string di hai jisme 'R' aur 'L' hain. Humein ise todna hai aise balanced parts mein 
 * jisme 'R' aur 'L' ki ginti barabar ho. 
 * Hum ek counter rakhte hain. 'R' mile to counter badhao (+1), 'L' mile to ghatao (-1). 
 * Jab bhi counter zero ho jaye, matlab humein ek balanced part mil gaya!
 * 
 * Logic:
 * 1. `temp = 0` aur `count = 0` lo.
 * 2. Loop chalao: if 'R' then `temp++`, if 'L' then `temp--`.
 * 3. Agar `temp === 0` ho jaye, to `count++`.
 * 4. Last mein `count` return karo.
 */

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let temp=0;
    let count=0;
   for (let i=0;i<s.length;i++){
   
    if(s[i]==="R"){
        temp++;
    }
    if(s[i]==="L"){
        temp--;
    }
    if(temp==0){
        ++count;
    }
   }
    return count;
};

// T-O(n);
//S-O(1)

// var balancedStringSplit = function(s) {
//     let R=0;
//     let L=0;
//     let count=0;
//     for(let i=0;i<s.length;i++){
//         if(s[i]=== "R"){
//             ++R;
//         }
//         else{
//             ++L;
//         }

//         if(R===L){
//             count++;
//             R=0;
//             L=0;
//         }
//     }
//     return count;
    
// };