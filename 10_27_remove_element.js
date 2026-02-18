/**
 * Question: 10_27_remove_element (https://leetcode.com/problems/remove-element/)
 * 
 * Explanation (Hinglish):
 * Bhai, isme humein ek array diya hai aur ek value (thappa) di hai. 
 * Humein wo thappa hatana hai array se. To hum kya karte hain? 
 * Ek 'pointer' rakhte hain. Har ek item ko dekhte hain, agar wo thappa nahi hai, 
 * to usko 'pointer' wali jagah pe rakh dete hain aur pointer ko aage badha dete hain. Bas!
 * 
 * Logic:
 * 1. Pointer 0 se start karo.
 * 2. Poore array pe loop chalao.
 * 3. Agar current element humari target value ke barabar nahi hai, to usko pointer wali index pe copy karo.
 * 4. Pointer ko increment karo.
 * 5. Last mein pointer return kar do.
 */
// https://leetcode.com/problems/remove-element/
var removeElement = function (nums, val) {
    let pointer = 0;
    for (let i = 0; i < nums.length; i++) {
        //  shift elements to left if it is not equal to val
        if (nums[i] !== val) {
            nums[pointer] = nums[i];
            pointer++;
        }
    }
    return pointer;
};