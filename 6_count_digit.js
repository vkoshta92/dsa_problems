
function countDigit (n){
let count =0;
if(n==0) return 1;
// convert negative to postive
n= Math.abs(n)
while(n>0){
    n=Math.floor(n/10);
    count++;
}
return count;
}

console.log(countDigit(56778))