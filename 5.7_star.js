
let n=5;

for (let i=0;i<5;i++){
    let row=" ";
    for (j=0;j<n-(i+1);j++){  // for empty space
        row = row + "   "
    }
    for (k=0;k<i+1;k++){ // for usual peint 1 2 3 4 5 star
        row= row + " * "
    }
    console.log(row);
}