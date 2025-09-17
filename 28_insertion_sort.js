let arr = [7, 1, 5, 4, 3, 2,-1];
let n = arr.length;
function insertionSort(arr) {
 
    for(let i=1;i<n;i++){
        let curr= arr[i];
        let prev= i-1;

        while(arr[prev]>curr && prev>=0){
            arr[prev+1]=arr[prev];
            prev--;
        }
        arr[prev+1]= curr; // end ke bad  vle se last vle replce kr lngr agar km n aho 
    }
    return arr;

}

let result = insertionSort(arr);
console.log(result);


// time complexity - O(n^2)
// space complecity - O (1)