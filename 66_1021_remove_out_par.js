

// https://leetcode.com/problems/remove-outermost-parentheses/
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack= [];
    let ans= "";
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            stack.push(s[i])
            let len= stack.length;
        //    if(len>1){
        //         ans= ans+s[i];
        //     }
            ans= ans+ ((stack.length>1)? s[i]:"");
        }
        else{
            let len= stack.length;
            // if(len>1){
            //     ans= ans+s[i];
            // }
            ans= ans+ ((stack.length>1)? s[i]:"");

            stack.pop(); // push ke bad lenth check krnger pop ke phle
        }
    }
    return ans
    
};
// T- O(n)
// space O(n)