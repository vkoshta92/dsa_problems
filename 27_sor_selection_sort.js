let arr = [7, 1, 5, 4, 3, 2,-1];
let n = arr.length;
function selectionSort(arr) {
  for (let i = 0; i < n - 1; i++) {
    //find min in array
    let min = i;
    for (let j = i + 1; j < n; j++) { // min vaale of rest of array.
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if(min !== i); // means  tbhi swap hoga jb kuch min ho j vle loop me i ho  gya to same ho jega.
    [arr[i], arr[min]]= [arr[min],arr[i]]; // bhar loop me andr vle min ko bs  swap krn ah 
  }
  return arr;
}

let result = selectionSort(arr);
console.log(result);


// time complexity - O(n^2)
// space complecity - O (1)