/**
 * Question: 62_225_implement stack_using_one_que (Stack: Implement Stack using One Queue)
 * 
 * Explanation (Hinglish):
 * Is baar hum sirf ek hi Queue use karenge. 
 * Jab bhi top dabba nikalna ho, hum queue ke agle n-1 dabbo ko line se piche lagate jayenge. 
 * Jaise train ke engine ko bacha kar baaki lines ko peeche ghuma dete hain. 
 * Is se jo sabse aakhir mein aaya tha, wo ab engine (front) ban jayega!
 * 
 * Logic:
 * 1. Ek hi queue `q` lo.
 * 2. Push: Normal push.
 * 3. Pop: Queue ke first `n-1` elements ko utha kar wapas peeche push kar do.
 * 4. Ab jo pehla element bacha hai, wahi originally aakhri tha, use return kar do.
 */

// https://leetcode.com/problems/implement-stack-using-queues/
// 

var MyStack = function () {
    this.q = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift())
    }
    return this.q.shift();

};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift())
    }
    let front = this.q[0];
    this.q.push(this.q.shift());
    return front;


};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q.length === 0;

};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */