function thirdLargestNumber(arr) {
    if (arr.length < 3) {
        return null;
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } 
        else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        } 
        else if (arr[i] > thirdLargest && arr[i] !== firstLargest && arr[i] !== secondLargest) {
            thirdLargest = arr[i];
        }
    }

    // return thirdLargest === -Infinity ? null : thirdLargest;
    return thirdLargest;

}

let arr = [1, -1, 35, 45, 3, 56, 4, -89, 124, 467];
console.log(thirdLargestNumber(arr)); // 124
