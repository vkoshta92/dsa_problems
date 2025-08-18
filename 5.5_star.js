
// for (let i=5;i>0;i--){
//     let row= " ";
//     for(let j=0;j<=i;j++){
//         row += ( j+1 );
//     }
//     console.log(row)
// }


let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n-i; j++) {
    row += (j + 1);
  }
  console.log(row);
}