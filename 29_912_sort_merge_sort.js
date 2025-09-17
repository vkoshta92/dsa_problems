//https://leetcode.com/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length<=1) return nums;
    let mid = Math.floor(nums.length/2);
    let left= sortArray(nums.slice(0,mid));
    let right= sortArray(nums.slice(mid));
    return merge(left,right);
};

function merge(arr1,arr2){
    let res=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i]);
            i++;
        }
        else{
            res.push(arr2[j])
                j++;
            
        }
    }

    return [...res, ...arr1.slice(i), ...arr2.slice(j)];
}


// time complexity- nLog(n);  merge ki n h deicide ki logn h 
// space time complexity-O(n)
