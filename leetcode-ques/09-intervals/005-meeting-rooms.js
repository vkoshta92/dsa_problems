/*
 * Problem: Meeting Rooms
 * Difficulty: Easy
 * Companies: Amazon, Google, Microsoft, Meta, Apple
 *
 * Problem Statement:
 * Given an array of meeting time intervals consisting of start and end times
 * [[s1,e1],[s2,e2],...], determine if a person could attend all meetings.
 *
 * Note: A person cannot attend two meetings at the same time. That means,
 * the end time of one meeting must be strictly less than the start time
 * of the next meeting.
 *
 * Example 1:
 *   Input: intervals = [[0,30],[5,10],[15,20]]
 *   Output: false
 *   Explanation: [0,30] overlaps with both [5,10] and [15,20].
 *
 * Example 2:
 *   Input: intervals = [[5,8],[9,15]]
 *   Output: true
 *   Explanation: No meetings overlap.
 *
 * Example 3:
 *   Input: intervals = []
 *   Output: true
 *   Explanation: No meetings, so can attend all (vacuously true).
 */

/*
 * ======================== HINGLISH LOGIC EXPLANATION ========================
 *
 * Bhai, yeh simple problem hai. Humein check karna hai kya sab meetings attend
 * ho sakti hain ek insaan se. Matlab koi bhi do meetings overlap nahi honi chahiye.
 *
 * Step 1: Intervals ko start time ke basis pe sort karo.
 *   - Agar sorted hain toh hume pata hoga ki kaunsi meeting pehle shuru hoti hai.
 *
 * Step 2: Ab consecutive intervals check karo:
 *   - Agar kisi bhi jagah previous meeting ka end time > current meeting ka start time
 *     ho gaya, toh overlap hai aur person dono attend nahi kar sakta.
 *   - Return false.
 *
 * Step 3: Agar poora loop bina kisi overlap ke chala gaya, toh return true.
 *
 * KEY POINT: end < start hona chahiye strict (end !== start bhi overlap hoga).
 * Agar ek meeting 5 pe khatam ho rahi hai aur agla 5 pe shuru ho raha hai,
 * toh person dono attend nahi kar sakta (need strict < ).
 *
 * Example walkthrough: intervals = [[0,30],[5,10],[15,20]]
 *   - Sort by start: [[0,30],[5,10],[15,20]]
 *   - [0,30] vs [5,10]: 30 > 5? Haan! Overlap! Return false.
 *
 * Example walkthrough: intervals = [[5,8],[9,15]]
 *   - Sort by start: [[5,8],[9,15]]
 *   - [5,8] vs [9,15]: 8 > 9? Nahi! Koi overlap nahi.
 *   - Return true.
 *
 * ======================== TIME & SPACE COMPLEXITY ========================
 * Time Complexity:  O(n log n) - sorting ke liye
 * Space Complexity: O(1) - constant extra space
 * ======================== TIME & SPACE COMPLEXITY ========================
 */

function canAttendAllMeetings(intervals) {
    // Edge case: 0 ya 1 meeting ho toh hamesha attend kar sakta hai
    if (intervals.length <= 1) return true;

    // Start time ke basis pe sort karo
    intervals.sort((a, b) => a[0] - b[0]);

    // Consecutive meetings check karo for overlap
    for (let i = 1; i < intervals.length; i++) {
        // Agar previous meeting abhi khatam nahi hui jab current shuru ho rahi hai
        if (intervals[i - 1][1] > intervals[i][0]) {
            return false;
        }
    }

    return true;
}

/*
 * ======================== TEST CASES ========================
 */

// Test Case 1: Overlapping meetings
// Input: [[0,30],[5,10],[15,20]]
// Expected Output: false
console.log("Test 1 - [[0,30],[5,10],[15,20]]:", canAttendAllMeetings([[0, 30], [5, 10], [15, 20]]));
// Expected: false

// Test Case 2: Non-overlapping meetings
// Input: [[5,8],[9,15]]
// Expected Output: true
console.log("Test 2 - [[5,8],[9,15]]:", canAttendAllMeetings([[5, 8], [9, 15]]));
// Expected: true

// Test Case 3: Empty array
// Input: []
// Expected Output: true
console.log("Test 3 - []:", canAttendAllMeetings([]));
// Expected: true

// Test Case 4: Single meeting
// Input: [[1,5]]
// Expected Output: true
console.log("Test 4 - [[1,5]]:", canAttendAllMeetings([[1, 5]]));
// Expected: true

// Test Case 5: Adjacent meetings (end == start, no gap)
// Input: [[1,2],[2,3]]
// Expected Output: true (since end < start check mein 2 > 2 nahi hai)
console.log("Test 5 - [[1,2],[2,3]]:", canAttendAllMeetings([[1, 2], [2, 3]]));
// Expected: true

// Test Case 6: All overlapping
// Input: [[1,4],[2,3],[3,6]]
// Expected Output: false
console.log("Test 6 - [[1,4],[2,3],[3,6]]:", canAttendAllMeetings([[1, 4], [2, 3], [3, 6]]));
// Expected: false

module.exports = canAttendAllMeetings;
