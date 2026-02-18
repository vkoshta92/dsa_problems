/**
 * Question: 30_707_linked_list_design_linked_list (Linked List: Design Linked List)
 * 
 * Explanation (Hinglish):
 * Linked List ek train ki tarah hai jisme dabbe (Nodes) ek dusre se jude hote hain. 
 * Har dabbe mein kuch saaman (Value) hota hai aur agle dabbe ka pata (Next pointer). 
 * Humein is train ko banana seekhna hai - naye dabbe jodna, kisi dabbe ko nikalna, aur value dhundna.
 * 
 * Logic:
 * 1. `Node` class/function: Ek value aur `next` (jo initially null ho).
 * 2. `MyLinkedList`: Training ka engine (`head`) aur kitne dabbe hain (`size`).
 * 3. Methods:
 *    - `get`: Index tak train mein traverse karo.
 *    - `addAtHead`: Naya dabba engine ke pehle lagao.
 *    - `addAtTail`: Train ke aakhri dabbe tak jao aur wahan naya dabba jodo.
 *    - `addAtIndex`: Index se ek pehle wale dabbe tak jao aur beech mein naya dabba fit karo.
 *    - `deleteAtIndex`: Index se pehle wale dabbe ka link badal ke agle ke agle se jod do.
 */

function Node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (this.head == null) {
        this.head = newNode;
    }
    else {
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;

        }
        curr.next = newNode;
        // newNode.next= null;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;  // invalid case
    // means headme add hona h
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    else if (index === this.size) {
        this.addAtTail(val);
        return;
    }

    else {

        let newNode = new Node(val);
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }
    this.size++;

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
        // agar phle hi delete krna ho to  head move kr denge.
        this.head = this.head.next;
    }
    else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;

        }
        curr.next = curr.next.next;
    }

    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
let list = new MyLinkedList();
list.addAtHead(1);   // [1]
list.addAtTail(3);   // [1,3]
list.addAtIndex(1, 2);// [1,2,3] ✅ correct
console.log(list.get(1)); // 2
list.deleteAtIndex(1);// [1,3]
console.log(list.get(1)); // 3 ✅
