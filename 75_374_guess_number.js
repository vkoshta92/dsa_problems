/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l= 1;
    let r= n;
    while(l<=r){
        let mid= l+Math.floor((r-l)/2);
        let fetchData= guess(mid);
        if(fetchData===0){
            return mid;
        }
        else if(fetchData>0){
            l= mid+1;
        }
        else{
            r= mid-1;
        }
    }

    return -1;// no need  1 <= pick <= n but safer side return -1
};