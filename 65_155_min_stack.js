/**
 * Question: 65_155_min_stack (Stack: Min Stack)
 * 
 * Explanation (Hinglish):
 * Humein ek aise stack ki zarurat hai jo normal push/pop to kare hi, 
 * par humein ye bhi bataye ki stack mein sabse chota (Minimum) dabba kaun sa hai... aur ye bhi fatfat (O(1) mein). 
 * Hum har dabba ke sath uska 'personal minimum' bhi save karte hain. 
 * Jaise agar 5 ke baad 2 aaya, to dabba mein [2, 2] rakhenge (matlab ab tak ka min 2 hai).
 * 
 * Logic:
 * 1. Stack mein har element ek array jaisa store karo: `[value, min_till_now]`.
 * 2. Push: agar stack khali hai, to `[val, val]`. 
 * 3. Warna prev min ke sath compare karke naya min save karo: `[val, Math.min(val, prevMin)]`.
 * 4. `getMin()` bas current top dabba ka dusra value return karega.
 */

// https://leetcode.com/problems/min-stack/

var MinStack = function () {
    this.s = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.s.length === 0) {
        this.s.push([val, val]);
    }
    else {
        let minValue = Math.min(val, this.s[this.s.length - 1][1]); // 2 value store array fisr current , second min
        this.s.push([val, minValue]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.s[this.s.length - 1][0];

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.s[this.s.length - 1][1];

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//Time-O(1)
// Space-O(n)