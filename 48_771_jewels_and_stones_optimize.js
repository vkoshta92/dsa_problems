/**
 * Question: 48_771_jewels_and_stones_optimize (String: Jewels and Stones - Optimized)
 * 
 * Explanation (Hinglish):
 * Do loops wala tarika thoda slow hai. Is baar hum use karenge "Set" (Memory Table). 
 * Pehle saare Jewels ko ek Set mein daal dnge. 
 * Phir har Stone ko Set mein check karenge. Set mein check karna bahut fast hota hai (O(1)). 
 * Is se humein result raste mein hi mil jata hai aur time kam lagta hai.
 * 
 * Logic:
 * 1. `jSets` banake usme saare Jewels daal do.
 * 2. `count = 0` se shuru karo.
 * 3. Stones pe loop chalao aur check karo `jSets.has(stones[j])`.
 * 4. Agar hai, to `count++`.
 * 5. Last mein count return karo.
 */

// /**
//  * @param {string} jewels
//  * @param {string} stones
//  * @return {number}
//  */
// var numJewelsInStones = function(jewels, stones) {
//     let count=0;
//     for(let i=0;i<stones.length;i++){
//         // if(jewels.includes(stones[i])){ // perticuler stone jewals ke andr h ya nhi
//         //     ++count;
//         // }
//            for(j=0;j<jewels.length;j++){
//         if(jewels[j]===stones[i]){

//             ++count;
//             break;
//         }
//       }
//     }
//     return count;
// };


// /**
//  * @param {string} jewels
//  * @param {string} stones
//  * @return {number}
//  */
// var numJewelsInStones = function(jewels, stones) {
//     let count=0;
//     for(let i=0;i<stones.length;i++){
//         // if(jewels.includes(stones[i])){ // perticuler stone jewals ke andr h ya nhi
//         //     ++count;
//         // }
//            for(j=0;j<jewels.length;j++){
//         if(jewels[j]===stones[i]){

//             ++count;
//             break;
//         }
//       }
//     }
//     return count;
// };



/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    // isi ko hashing bhi khte h.
    let jSets = new Set(); // max lenghth jsets 52 engist letter.isliyr space complexity(O)1 hogi
    for (let i = 0; i < jewels.length; i++) {
        jSets.add(jewels[i]);
    }
    let count = 0;
    for (let j = 0; j < stones.length; j++) {
        if (jSets.has(stones[j])) {// iski vfg se O(1) time complexiy h
            ++count;
        }
    }
    return count;

};

//T=O(n);
//S=O(1)