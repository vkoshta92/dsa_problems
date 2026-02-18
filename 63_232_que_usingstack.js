/**
 * Question: 63_232_que_usingstack (Queue: Implement Queue using Stacks)
 * 
 * Explanation (Hinglish):
 * Stack (ulati baalti) se Queue (Seedhi line) banani hai. 
 * Hum do baaltiyan (s1, s2) rakhte hain. 
 * Jab humein line ka pehla dabba chahiye, to hum s1 ka saara saman s2 mein ulat dete hain. 
 * Ab s2 ka top wahi hai jo s1 ke sabse niche tha (matlab original line ka pehla dabba). 
 * Isse humara kaam asaan ho jata hai.
 * 
 * Logic:
 * 1. Do stacks `s1` (writing) aur `s2` (reading).
 * 2. Push: Seedha `s1` mein daalo.
 * 3. Pop/Peek: Agar `s2` khali hai, to `s1` ka saara saman `s2` mein ulat do (pop karke push).
 * 4. `s2` ke top se result de do. Isse O(1) average time milta hai.
 */

// https://leetcode.com/problems/implement-queue-using-stacks/

var MyQueue = function () {
    this.s1 = [];
    this.s2 = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x);

};

/**
 * @return {number}
 */
//worst case O(n)
// avarage case O(1)
MyQueue.prototype.pop = function () {  // s2 ka top hi niklega quee order me h
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop())
        }
    }

    return this.s2.pop();


};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () { // s2 ka top elemnt peak hoga.
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length - 1];

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {  //O(1)
    return (this.s1.length === 0 && this.s2.length === 0)

};
// 1 stack se nhi kr skte h.
// stack emp me ques 1 quee se kr skte h

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */