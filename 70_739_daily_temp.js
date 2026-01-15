

// // logic old - array me ulta chlenge end se last vlaue  ka gratr hmesa -1 hoga. loop chlenge to arr[i]< top hai nge== top  , agar arr[i]>top stack me jo vaulue dal rhe the greater milne pr use pop krte rhrnge jb tk mil na aje greater, jase hi milega vo grater ho jega and anhi mila to vo -1 ho jega. pop isliye kiya  bhle hi value ht je pr jab greater vlue mil gyi bich me to ye sure h ki left side vlo ke liye is value se right pr kuch nhi hoga.  ase hi loop chlte rhenge aund end me array print kr denge.

// logic- same h next greater temp niklna h and bs isme index ko niklna h top stack and use minus kr dena h array ke index i se  to vo diffrrence chiye h.

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let stack=[];
    let n= temp.length;
    let ans=  Array(n).fill(0);
    stack.push(n-1);
    // ans[n-1]=0;  // aready 0 h

    for(let i=n-2;i>=0;i--){
        while(stack.length){
            let top= stack[stack.length-1]
            if(temp[i]>=temp[top]){
                stack.pop();
            }
            else{
                ans[i]= top-i;
                break;
            }
        }
        // if(stack.length===0){  // arrayref 0 h no need check.
        //     ans[i]=0;
        // }
        stack.push(i);
    }
    return ans;
    
};