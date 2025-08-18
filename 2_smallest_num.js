
function findSmallest(arr) {
    let smallest = Infinity || arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
let arr = [1, -1, 35, 3, 56, 4, -89, 124];

let answer = findSmallest(arr);
console.log(`Largest Number is ${answer}`);