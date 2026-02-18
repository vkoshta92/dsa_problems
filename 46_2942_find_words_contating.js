/**
 * Question: 46_2942_find_words_contating (String: Find Words Containing Character)
 * 
 * Explanation (Hinglish):
 * Humein bohot saare words ki list (array) di hai aur ek akela character 'x' diya hai. 
 * Humein batana hai ki kaun-kaun se words mein ye 'x' chhupa hua hai. 
 * Un words ke index batane hain.
 * Hum har word ko uthayenge aur uske ek-ek letter ko check karenge. 
 * Jaise hi character mil jaye, us index ko save karke agle word pe chale jayenge.
 * 
 * Logic:
 * 1. Bahar wala loop har word ke liye chalao.
 * 2. Andar wala loop current word ke har character ke liye.
 * 3. Agar character mil jaye, to index ko `newArr` mein daalo aur `break` karo.
 * 4. Last mein `newArr` return karo.
 */

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let newArr = []; // ISKO SPACE COMPLEXITY me add nhi krenge.
    for (let i = 0; i < words.length; i++) {
        // if (words[i].includes(x)){
        //     newArr.push(i);
        // }
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                newArr.push(i);
                break; // kisi charecter me x  mil gy ato age check nhi krenge isliye break use kiya.
            }
        }

    }
    return newArr;
};

// T-O(n^2)
//S-O(1)