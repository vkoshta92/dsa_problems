// https://leetcode.com/problems/jewels-and-stones/

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
var numJewelsInStones = function(jewels, stones) {
    // isi ko hashing bhi khte h.
    let jSets= new Set(); // max lenghth jsets 52 engist letter.isliyr space complexity(O)1 hogi
    for (let i=0;i<jewels.length;i++){
        jSets.add(jewels[i]);
    }
    let count=0;
    for(let j=0;j<stones.length;j++){
        if(jSets.has(stones[j])){// iski vfg se O(1) time complexiy h
            ++count;
        }
    }
    return count;

};

//T=O(n);
//S=O(1)