/**
 * Question: 69_496_next_greater_ele (Stack: Next Greater Element I)
 * 
 * Explanation (Hinglish):
 * Humein array mein har number ke liye uske right side wala sabse pehla 'bada' number dhundna hai. 
 * Hum peeche se (reverse) chalte hain. Ek Stack banate hain jo humein 'potential' bade numbers dikhata hai. 
 * Jab bhi hum chote dabbo se bade dabba pe aate hain, hum choton ko pop kar dete hain kyunki humein sirf rights side ka pehla bada chahiye. 
 * Hum results ko ek map mein save kar lete hain.
 * 
 * Logic:
 * 1. Loop chalao array `nums2` pe peeche se.
 * 2. Stack mein jo bhi number `arr[i]` se chota hai, use pop kar do (O(n) monotonic stack).
 * 3. Agar stack empty hai, to matlab right mein koi bada nahi hai (ans -1). 
 * 4. Warna stack ka top hi humara answer hai. Map mein save karo: `map[arr[i]] = top`.
 * 5. Last mein `nums1` ke hisab se map se values nikalo.
 */

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



