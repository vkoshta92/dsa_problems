// /**
//  * @param {number} x
//  * @return {number}
//  */
// var mySqrt = function(x) {
//     if (x === 0 || x === 1) return x;

//     for (let i = 0; i <= x; i++) {
//         if (i * i > x) return i - 1;
//     }
// };


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x;
      let left=2;
        let right=Math.floor(x/2);
        while(left<=right){
        let mid= Math.floor((left+right)/2);
        if(x===mid**2){
            return mid;
        }
        else if(x>mid**2){
            left= mid+1;
        }
        else{
            right= mid-1;
        }

        }
    return right  // sbse close yhi hogi 
    
};