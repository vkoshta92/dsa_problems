/**
 * Question: 68._150_reverse_polish_notation (Stack: Evaluate Reverse Polish Notation)
 * 
 * Explanation (Hinglish):
 * Humein ek mathematical expression solve karna hai jisme operators baad mein aate hain (jaise "3 4 +"). 
 * Iska simple logic ye hai: jab tak numbers milein, stack mein rakhte jao. 
 * Jaise hi koi sign (+, -, *, /) mile, stack se pichle do numbers nikalo aur unhe solve kar do. 
 * Jo result aaye use wapas stack mein daal do.
 * 
 * Logic:
 * 1. Stack banao. Tokens pe loop chalao.
 * 2. Agar token number hai, to push karo.
 * 3. Agar operator hai, to do numbers pop karo (`a`, `b`). 
 * 4. Solve karo: `b (operator) a`. Division mein `Math.trunc` use karo zero ki taraf round karne ke liye.
 * 5. Last mein stack ka bacha hua dabba return karo.
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack=[];
    const map={
        "+":  (a,b)=>(b+a),
        "-":   (a,b)=>(b-a),
        "*":    (a,b)=>(b*a),
        "/":    (a,b)=>Math.trunc(b/a),
    }
    for(let i=0;i<tokens.length;i++){
        if(map[tokens[i]]){ // map  me hoga to
            let a= stack.pop();
            let b= stack.pop();
            let ans= map[tokens[i]](+a,+b) //  a, b string h number me convert krn ah evaculte kenr ke liye
            stack.push(ans)
        }
        else{
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());  // number hona chiye kyoki 1  array hogi to sting kr dega
    
};
// logic- stack me number ha to push krte rhebnge expresion h to last two pop krke  calculte krke push kr denge. isi hisna se age krenge end me jo ayega use stack se pop kr lenge number bana ke.


// /**
//  * @param {string[]} tokens
//  * @return {number}
//  */
// var evalRPN = function(arr) {
//     //if previous value- then i use stack prefred
//     let stack=[];
//     let exp= ["-","+","*","/"];
//     for (let i=0;i<arr.length;i++){
//         if(exp.includes(arr[i])){
//             let a= stack.pop();
//             let b= stack.pop();
//             let ans= eval(`${b} ${arr[i]} ${a}`);//"3+4"==7
//             stack.push(Math.trunc(ans));
//         }
//         else{
//             stack.push(arr[i])
//         }
//     }

//         return Number(stack.pop());

    
// };





// var evalRPN = function(tokens) {
//     let stack = [];

//     for (let i = 0; i < tokens.length; i++) {
//         let token = tokens[i];

//         // ✅ if number
//         if (!isNaN(token)) {
//             stack.push(Number(token));
//         } 
//         // ✅ if operator
//         else {
//             let b = stack.pop();
//             let a = stack.pop();

//             if (token === "+") stack.push(a + b);
//             else if (token === "-") stack.push(a - b);
//             else if (token === "*") stack.push(a * b);
//             else if (token === "/") stack.push(Math.trunc(a / b)); // important
//         }
//     }

//     return stack.pop();
// };
