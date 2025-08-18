
function findLargest(arr) {
    let largestValue = -Infinity || arr[0];
    // sbse chota number lenge tki compare kar ske.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestValue) {
            largestValue = arr[i];
        }
    }
    return largestValue;
}
let arr = [1, -1, 35, 3, 56, 4, -89, 124];

let answer = findLargest(arr);
console.log(`Largest Number is ${answer}`);