/**
 * Question: 28_insertion_sort (Sorting: Insertion Sort)
 * 
 * Explanation (Hinglish):
 * Ye bilkul waise hi hai jaise hum taash (cards) ko sort karte hain. 
 * Hum ek card uthate hain aur use pichle sorted cards ke beech mein sahi jagah par "ghusa" (insert) dete hain.
 * Hum har number ko uske pichle numbers se compare karte hain aur unhe tab tak aage khiskate hain jab tak sahi jagah mil na jaye.
 * 
 * Logic:
 * 1. Door (loop) shuru karo index 1 se.
 * 2. Current element ko `curr` mein save karo.
 * 3. Pichle elements (`prev`) ko tab tak aage khiskate raho jab tak wo `curr` se bade hain.
 * 4. Jab sahi jagah mil jaye, to `curr` ko wahan rakh do.
 */
let n = arr.length;
function insertionSort(arr) {

    for (let i = 1; i < n; i++) {
        let curr = arr[i];
        let prev = i - 1;

        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr; // end ke bad  vle se last vle replce kr lngr agar km n aho 
    }
    return arr;

}

let result = insertionSort(arr);
console.log(result);


// time complexity - O(n^2)
// space complecity - O (1)