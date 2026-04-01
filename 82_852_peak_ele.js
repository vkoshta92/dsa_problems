/**
 * ============================================================================
 * PROBLEM: Peak Index in a Mountain Array
 * ============================================================================
 * Ek "mountain array" diya hai jisme:
 * - Pehle strictly increasing hota hai
 * - Phir strictly decreasing hota hai
 * 
 * Hume peak element ka index return karna hai.
 * 
 * ============================================================================
 * APPROACH: Binary Search (Slope Based)
 * ============================================================================
 * Logic:
 * 1. Mid element find karo
 * 2. Compare arr[m] with arr[m+1]
 * 3. Agar arr[m+1] > arr[m] → increasing slope → peak right side me hai
 * 4. Else → decreasing slope → peak left side me hai (including m)
 * 5. Loop tab tak chalao jab tak l == r
 * 
 * Why this works:
 * - Mountain array me ek hi peak hota hai
 * - Increasing slope me hum peak ki taraf ja rahe hote hain
 * - Decreasing slope me hum peak cross kar chuke hote hain
 * - Har step me half search space eliminate hota hai
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(log n)
 * - Har iteration me search space half ho raha hai
 * 
 * SPACE COMPLEXITY: O(1)
 * - Extra space use nahi ho raha
 * ============================================================================
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
/**
 * Peak Index in a Mountain Array (with console)
 */

var peakIndexInMountainArray = function(arr) {

    let l = 0;
    let r = arr.length - 1;

    console.log("🚀 Input Array:", arr);

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        console.log("\n--- Iteration ---");
        console.log("l:", l, "arr[l]:", arr[l]);
        console.log("m:", m, "arr[m]:", arr[m]);
        console.log("r:", r, "arr[r]:", arr[r]);

        if (arr[m + 1] > arr[m]) {
            console.log("👉 Increasing slope → move right");
            l = m + 1;
        }
        else {
            console.log("👉 Decreasing slope → move left (including m)");
            r = m;
        }
    }

    console.log("\n✅ Peak found at index:", l, "value:", arr[l]);
    return l;
};


// 🔥 Test
peakIndexInMountainArray([0,2,5,7,6,3,1]);