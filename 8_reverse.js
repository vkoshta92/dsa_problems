/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let copyX= x;
    x= Math.abs(x);
    let rev=0;
while(x>0){
    let last= x%10;
    rev = rev*10 +last;
    x= Math.floor(x/10);
}
let limit = Math.pow(2,31);
//   if( limit < rev || limit <-rev ){
//     return 0;
//   }

if(rev<-limit || rev>limit)  return 0;


return (copyX>0)? rev :-rev;
};