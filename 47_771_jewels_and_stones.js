// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count=0;
    for(let i=0;i<stones.length;i++){
        // if(jewels.includes(stones[i])){ // perticuler stone jewals ke andr h ya nhi
        //     ++count;
        // }
           for(j=0;j<jewels.length;j++){
        if(jewels[j]===stones[i]){

            ++count;
            break;
        }
      }
    }
    return count;
};