
let n=6;
 let isSwich=1;

for(let i=0;i<n;i++){
    let row= " ";
    for (let j=0;j<i+1;j++){
        row = row+isSwich;
        // new row me toggle 1 se strt ho jega phir alternative hota rhega.
        if(isSwich===1){
isSwich=0;
        }
        else{
            isSwich=1;
        }
    }
    console.log("row",row)
}