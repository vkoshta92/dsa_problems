
// https://leetcode.com/problems/group-anagrams/



/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    console.log("Input Strings:", strs);

    let map = {}; // map to store groups
    console.log("Initial Map:", map);

    // Loop through each string
    for (let i = 0; i < strs.length; i++) {

        let freqArr = Array(26).fill(0);  // frequency array
        let s = strs[i];

        console.log("\n------------------------------");
        console.log("Current String:", s);
        console.log("Initial freqArr:", freqArr);

        // Count characters of current string
        for (let j = 0; j < s.length; j++) {
            let alphabetIndex = s[j].charCodeAt() - 'a'.charCodeAt();
            freqArr[alphabetIndex]++;

            console.log(
                `Char: ${s[j]}, Index: ${alphabetIndex}, Updated freqArr:`,
                [...freqArr]
            );
        }

        // Create key based on frequency array
        let key = "";
        for (let k = 0; k < 26; k++) {
            key = key + String.fromCharCode(k) + freqArr[k];
            // key = key + String.fromCharCode(k+97) + freqArr[k];
            // key = key + "#"+ freqArr[k];
            
        }

        console.log("Generated Key:", key);

        // Fill the map
        if (!map[key]) {
            map[key] = [s];
            console.log("New group created:", map[key]);
        } else {
            map[key].push(s);
            console.log("Added to existing group:", map[key]);
        }

        console.log("Map Now:", map);
    }

    console.log("\nFinal Map Values:", Object.values(map));

    return [...Object.values(map)];
};

// Example run
console.log("\nOUTPUT:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// T-O(n*m);
//  S- O(n*m)





// leetcode

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function(strs) {
//     let map= {};
//     // we are creating key all aphabet not sortinh here
//     for(let i=0;i<strs.length;i++){
//         let freqArr= Array(26).fill(0);
//     let s= strs[i];
//     for(let j=0;j<s.length;j++){
//     let alphabetIndex= s[j].charCodeAt()-'a'.charCodeAt();
//     freqArr[alphabetIndex]++;
//     }
//     let key ="";
//     for(let k=0;k<26;k++){
//         key= key+String.fromCharCode(k)+freqArr[k]
//     }

//     // fill the map

//     if(!map[key]){
//         map[key]= [s];
//     }
//     else{
//         map[key].push(s)
//     }

//     }
//     return [...Object.values(map)]
  
// };
