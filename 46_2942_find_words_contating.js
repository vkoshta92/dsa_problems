// https://leetcode.com/problems/find-words-containing-character/

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let newArr= []; // ISKO SPACE COMPLEXITY me add nhi krenge.
    for(let i=0;i<words.length;i++){
        // if (words[i].includes(x)){
        //     newArr.push(i);
        // }
        for (let j=0;j<words[i].length;j++){
            if(words[i][j]=== x){
                newArr.push(i);
                break; // kisi charecter me x  mil gy ato age check nhi krenge isliye break use kiya.
            }
        }

    }
    return newArr;
};

// T-O(n^2)
//S-O(1)