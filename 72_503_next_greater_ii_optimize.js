
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(arr) {

    // let arr= [...nums,...nums];  
    //logic . array ko double krn ki need nhi h   array ke size ke doble tk loop chlaenge and i%n nikl  ke hisba se conditio lgenge tki vo usi n ke size me rotate kre . and hypothetcly  dobra array ko check krta rhega and greater mil jega.
    let stack=[];
    let n= arr.length;

    let ans=Array(n).fill(-1);
    stack.push(arr[n-1]);
    for(let i=(n*2)-2;i>=0;i--){
        while(stack.length){
            let top= stack[stack.length-1];
            if(arr[i%n]<top){
                ans[i%n]=top;
                break;
            }
            else{
                stack.pop();
                
            }
        }
        stack.push(arr[i%n]);
    }
    return ans.slice(0,n)
    
};

// T=O(n)
// S=O(n)