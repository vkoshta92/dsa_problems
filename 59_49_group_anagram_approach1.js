
// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map={};
    for(let i=0;i<strs.length;i++){
        let sortedStr= strs[i].split("").sort().join("");

        if(!map[sortedStr]){
            map[sortedStr]= [strs[i]]; // initialize array kyoki array me hi push krte h
        }
        else{
            map[sortedStr].push(strs[i]) // push value
        }
    }
    return [...Object.values(map)]
};

// T- O(n * m logm)
// S- O(n*m)