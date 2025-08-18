function secondLargestNumber(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    if(arr.length<2){
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        // array me aelment duplicate ke case me
        else if (arr[i] > secondLargest  && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }
    // return secondLargest===-Infinity?null:secondLargest;
    return secondLargest;


}

let arr = [1, -1, 35, 3, 124, 4, -89, 124,56];

let ans = secondLargestNumber(arr);
console.log(ans);