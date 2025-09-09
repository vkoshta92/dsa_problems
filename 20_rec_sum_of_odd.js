// let newArr=[1,3,4,5,0,8,11]
// function sumOfOdd(n){
    
//    if(n<0) return 0;
//     if (newArr[n]%2!==0){
//         return newArr[n]+sumOfOdd(n-1);
//     }
//     else{
//         return sumOfOdd(n-1)
//     }
// }

// console.log(sumOfOdd(newArr.length-1));

let newArr=[1,3,4,5,0,8,11]
function sumOfOdd(n){
    let isOdd=( newArr[n]%2 !==0); // bolean 
   if(n===0){
    // if(isOdd) return newArr[n];
    // else return 0;
    return isOdd?newArr[n]:0;
   }
    // if (isOdd){
    //     return newArr[n]+sumOfOdd(n-1);
    // }
    // else{
    //     return 0 +  sumOfOdd(n-1)
    // }
    return (isOdd? newArr[n]:0)+ sumOfOdd(n-1);
}

console.log(sumOfOdd(newArr.length-1));
