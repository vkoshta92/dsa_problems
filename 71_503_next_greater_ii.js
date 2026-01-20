/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {

    let arr= [...nums,...nums];
    // logic same geater ki trh hi krna h bs array circluer h to suru se krn ki vgh array ko double kr denge repeat kr denge.
    let stack=[];
    let n= arr.length;

    let ans=Array(n).fill(-1);
    stack.push(arr[n-1]);
    for(let i=n-2;i>=0;i--){
        while(stack.length){
            let top= stack[stack.length-1];
            if(arr[i]<top){
                ans[i]=top;
                break;
            }
            else{
                stack.pop();
                
            }
        }
        stack.push(arr[i]);
    }
    return ans.slice(0,n/2)
    
};