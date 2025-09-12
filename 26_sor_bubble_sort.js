
// let arr= [3,7,0,1,0,2,9,6,4,1];

// function bubbleSort(arr){
//     let n = arr.length;
//     for (let i=0 ;i<n-1;i++){ // alteration kitna bar  puri array  change hogi
//         for (let j=0;j<n-1-i;j++){ // 2 , 2 ke pair me hogi 
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(arr))

// time complecity O(n2)
//space = O(1)
//  not use for production

// agr arary sort phle ho bhi gyi tb bhi bar bar loop chlega  koi as trika jise sort phle ho jae pta chl jae.
// if in any itreation no swaping  then array is alredy sorted.


let arr= [3,7,0,1,0,2,9,6,4,1];

function bubbleSort(arr){
    let n = arr.length;
    for (let i=0 ;i<n-1;i++){ // alteration kitna bar  puri array  change hogi
        let isSwapped= false;
        for (let j=0;j<n-1-i;j++){ // 2 , 2 ke pair me hogi 
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]= [arr[j+1],arr[j]];
                isSwapped=true;
            }
        }
            // if (isSwapped===false) break; // agar swap na ho to yhi break ho jae array sort ho chyki hai
            if (!isSwapped) break; // agar swap na ho to yhi break ho jae array sort ho chyki hai

    }
    return arr;
}
console.log(bubbleSort(arr))