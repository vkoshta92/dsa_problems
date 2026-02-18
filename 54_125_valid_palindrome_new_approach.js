/**
 * Question: 54_125_valid_palindrome_new_approach (String: Valid Palindrome - Two Pointer)
 * 
 * Explanation (Hinglish):
 * Is approach mein hum memory bachate hain. Nayi string nahi banate. 
 * Do pointers use karte hain: ek shuruat mein (`i`) aur ek aakhir mein (`j`). 
 * Dono pointers ko beech ki taraf late hain. 
 * Agar beech mein koi symbol ya space aaye to use skip kar dete hain. 
 * Phir check karte hain ki dono letters same hain ya nahi.
 * 
 * Logic:
 * 1. Lowercase string lo. `i = 0`, `j = n-1`.
 * 2. Agar `s[i]` valid char nahi hai to `i++`.
 * 3. Agar `s[j]` valid char nahi hai to `j--`.
 * 4. Agar dono valid hain aur same nahi hain, to false return karo.
 * 5. Warna dono pointers ko aage badhao.
 */



var isPalindrome = function (s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) {
            ++i
        }
        else if (!s[j].match(/[a-z0-9]/i)) {
            --j;
        }
        else if (s[i] === s[j]) {
            ++i;
            --j;
        }
        else {
            return false;
        }
    }
    return true;

};
// T= O(n)
// S= O(1)