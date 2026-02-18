/**
 * Question: 47_771_jewels_and_stones (String: Jewels and Stones)
 * 
 * Explanation (Hinglish):
 * Tumhare paas bohot saare pathar (Stones) hain, par unme se kuch hi asli heere (Jewels) hain. 
 * Humein count karna hai ki humare paas kul kitne heere hain. 
 * Humein Jewels ki ek string di gayi hai jo batati hai ki 'Heera' kaun-kaun se character hain. 
 * Hum apne har pathar ko uthayenge aur check karenge ki kya ye Jewels wali list mein hai. 
 * Agar haan, to count badha denge.
 * 
 * Logic:
 * 1. Do loops chalao. Bahar wala stones ke liye.
 * 2. Andar wala loop current stone ko jewels ki ek-ek item se compare karne ke liye.
 * 3. Agar stone jewel mil jaye, to `count++` aur break.
 * 4. Count return karo.
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        // if(jewels.includes(stones[i])){ // perticuler stone jewals ke andr h ya nhi
        //     ++count;
        // }
        for (j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) {

                ++count;
                break;
            }
        }
    }
    return count;
};