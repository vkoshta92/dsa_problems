/**
 * Question: 27_sor_selection_sort (Sorting: Selection Sort)
 * 
 * Explanation (Hinglish):
 * Selection Sort mein hum "select" karte hain. Poore array mein se sabse chota (minimum) number dhundte hain 
 * aur use sabse pehli khali jagah pe rakh dete hain. 
 * Phir baaki bache huye array mein se sabse chota dhundte hain aur use dusri jagah pe. 
 * Aise karte karte saare numbers apni sahi jagah pe aa jate hain.
 * 
 * Logic:
 * 1. Loop chalao 0 se n-1 tak.
 * 2. Har baar maano ki current index `i` hi sabse chota hai (`min = i`).
 * 3. Baaki bache huye array (`i+1` se end tak) mein asli minimum dhundo.
 * 4. Agar koi chota mil jaye, to `min` ko update karo.
 * 5. Last mein `arr[i]` aur `arr[min]` ko swap kar do.
 */
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
    if (min !== i); // means  tbhi swap hoga jb kuch min ho j vle loop me i ho  gya to same ho jega.
    [arr[i], arr[min]] = [arr[min], arr[i]]; // bhar loop me andr vle min ko bs  swap krn ah 
  }
  return arr;
}

let result = selectionSort(arr);
console.log(result);


// time complexity - O(n^2)
// space complecity - O (1)