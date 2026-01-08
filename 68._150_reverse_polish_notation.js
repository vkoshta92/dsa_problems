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
