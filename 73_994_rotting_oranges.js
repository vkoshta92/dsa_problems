/**
 * Question: 73_994_rotting_oranges (BFS: Rotting Oranges)
 * 
 * Explanation (Hinglish):
 * Ek grid (bag) mein santre (oranges) rakhe hain. 2 matlab sara hua (rotten), 1 matlab fresh. 
 * Har minute mein ek sara hua santra apne padosi fresh santro ko bhi marta hai (rotten kar deta hai). 
 * Humein batana hai kitni der mein saare santre sad jayenge. 
 * Hum pehle saare saade huye santro ko ek queue mein daalte hain aur BFS (level by level) spread karte hain.
 * 
 * Logic:
 * 1. Queue mein saare rotten oranges ki position `[i, j, minutes]` daal do.
 * 2. BFS: Queue se nikalo aur 4 directions (top, bottom, left, right) check karo.
 * 3. Agar padosi fresh (`1`) hai, to use rotten (`2`) karo aur queue mein minute + 1 ke sath daal do.
 * 4. Last mein check karo: agar koi `1` bacha hai, to return -1 (wo kabhi nahi sadega). 
 * 5. Warna max minutes return karo.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

// logic ,  2 ko rotten mn lenge  and jitne is uper niche age piche adjust honge  1 honge use 2 kr denge and minutes updated krte rhenge , phle 1 mil jega to retun  -1 kr denge, and sbse phle queue me push krtee rhenge jha 2  yni rotten mile uski position push krenge.  ab ak ak krkr usme shift krenge hatenge and uske adjusent ko 2 krenge ase puri array 2 ho jengi max min aa jenge rotten ke , 1 kbhi jiske adjust honge nhi  vo rotten nhi hoga usliye return -1 kr diya h or any fresh orange found.
//bfs
var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let queue = [];
    // add all rotten oranges in queue

    for (let i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            }
        }

    }



    let maxMinutes = 0
    // mark adjesent nodes as rotten and push in ques till its not empty
    while (queue.length) {
        console.log(grid[0]);
        console.log(grid[1]);
        console.log(grid[2]);
        console.log("----------------------");


        let [x, y, minutes] = queue.shift();
        if (x > 0 && grid[x - 1][y] === 1) { // -1 corner case ke liye
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, minutes + 1])
        }
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, minutes + 1])

        }
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, minutes + 1])

        }
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, minutes + 1])

        }
        maxMinutes = Math.max(minutes, maxMinutes)
    }


    //finnaly run over each elemnet  check if any fresh is remaning
    for (let i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }

    }
    return maxMinutes;

};
//T- O(n2)
// S-O(n2)