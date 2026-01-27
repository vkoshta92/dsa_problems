/**
 * @param {number[][]} grid
 * @return {number}
 */

// logic ,  2 ko rotten mn lenge  and jitne is uper niche age piche adjust honge  1 honge use 2 kr denge and minutes updated krte rhenge , phle 1 mil jega to retun  -1 kr denge, and sbse phle queue me push krtee rhenge jha 2  yni rotten mile uski position push krenge.  ab ak ak krkr usme shift krenge hatenge and uske adjusent ko 2 krenge ase puri array 2 ho jengi max min aa jenge rotten ke , 1 kbhi jiske adjust honge nhi  vo rotten nhi hoga usliye return -1 kr diya h or any fresh orange found.
//bfs
var orangesRotting = function(grid) {
    let m= grid.length;
    let n= grid[0].length;
    let queue=[];
    // add all rotten oranges in queue

    for(let i=0;i<m;i++){
        for(j=0;j<n;j++){
            if(grid[i][j]===2){
            queue.push([i,j,0]);
        }
        }
       
    }



let maxMinutes=0
    // mark adjesent nodes as rotten and push in ques till its not empty
    while(queue.length){
        console.log(grid[0]);
        console.log(grid[1]);
        console.log(grid[2]);
        console.log("----------------------");


        let [x,y,minutes]= queue.shift();
        if(x>0 && grid[x-1][y]===1){ // -1 corner case ke liye
            grid[x-1][y]=2;
            queue.push([x-1,y,minutes+1])
        }
         if(x<m-1 && grid[x+1][y]===1){
            grid[x+1][y]=2;
            queue.push([x+1,y,minutes+1])

        }
         if(y<n-1 && grid[x][y+1]===1){
            grid[x][y+1]=2;
            queue.push([x,y+1,minutes+1])

        }
         if(y>0 && grid[x][y-1]===1){
            grid[x][y-1]=2;
            queue.push([x,y-1,minutes+1])

        }
        maxMinutes= Math.max(minutes,maxMinutes)
    }


    //finnaly run over each elemnet  check if any fresh is remaning
   for(let i=0;i<m;i++){
        for(j=0;j<n;j++){
            if(grid[i][j]===1){
                return -1;
        }
        }
       
    }
    return maxMinutes;
    
};
//T- O(n2)
// S-O(n2)