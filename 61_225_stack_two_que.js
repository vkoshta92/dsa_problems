/**
 * Question: 61_225_stack_two_que (Stack: Implement Stack using Two Queues)
 * 
 * Explanation (Hinglish):
 * Humein Queue (jis mein pehla aaya pehla gaya) ka use karke Stack (jis mein naya aaya pehla gaya) banana hai. 
 * Jab humein kisi dabba ko nikalna (pop) hota hai, to hum aakhri wale dabba tak pahunchne ke liye 
 * baaki saare dabbo ko dusri queue mein bhej dete hain. 
 * Phir aakhri dabba humara answer hota hai. Bas ye khel humein pop aur top ke liye karna padta hai.
 * 
 * Logic:
 * 1. Do queues `q1` aur `q2` lo.
 * 2. Push: Seedha `q1` mein daalo.
 * 3. Pop: `q1` ke n-1 dabbo ko `q2` mein bhej do. Aakhri bacha hua dabba pop kar lo.
 * 4. `q1` aur `q2` ko swap kar do taki agli baar phir se `q1` pe kaam ho sake.
 * 5. Top: Pop jaisa hi, bas aakhri dabba nikal ke wapas queue mein daal do.
 */

var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
    console.log("Stack created → q1:", this.q1, " q2:", this.q2);
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    console.log("\nPUSH called with:", x);

    this.q1.push(x); // normal queue push

    console.log("After push → q1:", this.q1, " q2:", this.q2);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    console.log("\nPOP called");

    let n = this.q1.length;
    console.log("Total elements in q1:", n);

    // Move first n-1 elements from q1 → q2
    for (let i = 0; i < n - 1; i++) {
        let moved = this.q1.shift();
        this.q2.push(moved);
        console.log("Shifted", moved, "→ q2:", this.q2);
    }

    // Jo last bacha → wahi stack ka TOP hai → pop karo
    let ans = this.q1.shift();
    console.log("Popped element (stack top):", ans);

    // Swap queues
    console.log("Swapping q1 and q2");
    [this.q1, this.q2] = [this.q2, this.q1];

    console.log("After POP → q1:", this.q1, " q2:", this.q2);

    return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    console.log("\nTOP called");

    let n = this.q1.length;
    console.log("Total elements in q1:", n);

    // Move first n-1 elements from q1 → q2
    for (let i = 0; i < n - 1; i++) {
        let moved = this.q1.shift();
        this.q2.push(moved);
        console.log("Shifted", moved, "→ q2:", this.q2);
    }

    // Peek last element (stack top)
    let topElement = this.q1[0];
    console.log("Top element (peek):", topElement);

    // Push it into q2 also because top() should NOT remove it
    this.q2.push(this.q1.shift());
    console.log("Moved top element into q2 →", this.q2);

    // Swap queues again
    console.log("Swapping q1 and q2");
    [this.q1, this.q2] = [this.q2, this.q1];

    console.log("After TOP → q1:", this.q1, " q2:", this.q2);

    return topElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    let isEmpty = this.q1.length === 0;
    console.log("\nEMPTY check →", isEmpty);
    return isEmpty;
};

// --------------------------
// Example for testing
// --------------------------

var obj = new MyStack();
obj.push(10);
obj.push(20);
obj.push(30);

console.log("\nTop:", obj.top());
console.log("\nPop:", obj.pop());
console.log("\nEmpty?:", obj.empty());






// var MyStack = function() {
//     this.q1=[];
//     this.q2=[];
    
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
//     this.q1.push(x);
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
//     let n= this.q1.length;
//     for(let i=0;i<n-1;i++){
//         this.q2.push(this.q1.shift());

//     }
//     let ans= this.q1.shift();
//       [this.q1,this.q2]= [this.q2,this.q1];

//     return ans;
    
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
//     let n= this.q1.length;
//     for(let i=0;i<n-1;i++){
//         this.q2.push(this.q1.shift())
//     }
//     let lastEleFront= this.q1[0];// peeking from front
//     this.q2.push(this.q1.shift()); // because pop me remove krn ahota h top me ise show bhi krn ahota h
//     [this.q1,this.q2]= [this.q2,this.q1];
//     return lastEleFront;
    
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
//     return this.q1.length===0;
// };

// /** 
//  * Your MyStack object will be instantiated and called as such:
//  * var obj = new MyStack()
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.empty()
//  */
