/**
 * Question: 20_rec_sum_of_odd (Recursion: Sum of Odd elements in Array)
 * 
 * Explanation (Hinglish):
 * Array mein se sirf wo numbers chunne hain jo Odd (visham) hain aur unka sum nikalna hai.
 * Hum ek ek karke peeche se numbers check karte hain. 
 * Agar number odd hai, to use sum mein jodte hain, nahi to chhod dete hain aur aage (piche) badh jate hain.
 * 
 * Logic:
 * 1. Check karo current element odd hai ya nahi (`num % 2 !== 0`).
 * 2. Base case: Agar index 0 hai, to check karo agar wo odd hai to use return karo, nahi to 0.
 * 3. Recursive step: Agar current odd hai to use jod do `sum(n-1)` ke saath, warna sirf `sum(n-1)` return karo.
 */
let newArr = [1, 3, 4, 5, 0, 8, 11]
function sumOfOdd(n) {
    let isOdd = (newArr[n] % 2 !== 0); // bolean 
    if (n === 0) {
        // if(isOdd) return newArr[n];
        // else return 0;
        return isOdd ? newArr[n] : 0;
    }
    // if (isOdd){
    //     return newArr[n]+sumOfOdd(n-1);
    // }
    // else{
    //     return 0 +  sumOfOdd(n-1)
    // }
    return (isOdd ? newArr[n] : 0) + sumOfOdd(n - 1);
}

console.log(sumOfOdd(newArr.length - 1));
