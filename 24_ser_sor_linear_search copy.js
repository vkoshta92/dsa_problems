

function lineaSerch(arr,target){
for(let i=0;i<=arr.length;i++){
    if(arr[i]===target) return i

}
return -1;
}

console.log(lineaSerch([3,2,6,8],2))