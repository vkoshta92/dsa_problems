
var isPalindrome = function(x) {
    // if(x<0) return false;
let xCopy=x;
x= Math.abs(x);
    let reverseNumber= 0;


    while(x>0){
    
let reminder= x%10;
reverseNumber= (reverseNumber*10)+reminder;
x= Math.floor(x/10);
    }
    // if( reverseNumber=== xCopy){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return reverseNumber=== xCopy ;
};

