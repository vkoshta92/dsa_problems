

// logic - array me ulta chlenge end se last vlaue  ka gratr hmesa -1 hoga. loop chlenge to arr[i]< top hai nge== top  , agar arr[i]>top stack me jo vaulue dal rhe the greater milne pr use pop krte rhrnge jb tk mil na aje greater, jase hi milega vo grater ho jega and anhi mila to vo -1 ho jega. pop isliye kiya  bhle hi value ht je pr jab greater vlue mil gyi bich me to ye sure h ki left side vlo ke liye is value se right pr kuch nhi hoga.  ase hi loop chlte rhenge aund end me array print kr denge.



// optimize way
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 // t- o(n)
var nextGreaterElement = function(nums1,arr) {
    let ngeMap={};
    let stack=[];
    let n= arr.length;
    stack.push(arr[n-1]);
    ngeMap[arr[n-1]]=-1;

    // no need ifelse in prev solution alredry check in while loop.
    for(let i=n-2;i>=0;i--){
      
            // ya to value stack me hogi ya -1 hongi
            while(stack.length){
                if(stack[stack.length-1]<arr[i]){
                    stack.pop();
                }
                else{
                ngeMap[arr[i]]=stack[stack.length-1];
                break;
                }
            }
            if(stack.length===0){
                ngeMap[arr[i]]=-1;

            }
        
        stack.push(arr[i])
    }
    // let ans= [];
    // for(let i=0;i<nums1.length;i++){
    //     ans.push(ngeMap[num1[i]])
    // }
    // return ans;
return nums1.map(val=>ngeMap[val]);
    
};

// O-O(n)
//S-O(n)




// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
//  // t- o(n)
// var nextGreaterElement = function(nums1,arr) {
//     let ngeMap={};
//     let stack=[];
//     let n= arr.length;
//     stack.push(arr[n-1]);
//     ngeMap[arr[n-1]]=-1;

//     for(let i=n-2;i>=0;i--){
//         let topOfStack= stack[stack.length-1];
//         if(arr[i]<topOfStack){
//             ngeMap[arr[i]]= topOfStack;
//         }
//         else{
//             // ya to value stack me hogi ya -1 hongi
//             while(stack.length){
//                 if(stack[stack.length-1]<arr[i]){
//                     stack.pop();
//                 }
//                 else{
//                 ngeMap[arr[i]]=stack[stack.length-1]; .. yha check le rhe h ki arr[i] bda h to if me need nhi
//                 break;
//                 }
//             }
//             if(stack.length===0){
//                 ngeMap[arr[i]]=-1;

//             }
//         }
//         stack.push(arr[i])
//     }
//     // let ans= [];
//     // for(let i=0;i<nums1.length;i++){
//     //     ans.push(ngeMap[num1[i]])
//     // }
//     // return ans;
// return nums1.map(val=>ngeMap[val]);
    
// };



