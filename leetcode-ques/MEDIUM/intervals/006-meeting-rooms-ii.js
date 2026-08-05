/*
 * Problem: Meeting Rooms II
 * Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 *
 * Problem Statement:
 * Given an array of meeting time intervals intervals where
 * intervals[i] = [starti, endi], return the minimum number of conference
 * rooms required.
 *
 * In other words, find the maximum number of meetings happening at any
 * given point in time.
 *
 * Example 1:
 *   Input: intervals = [[0,30],[5,10],[15,20]]
 *   Output: 2
 *   Explanation: At time 5-10, meetings [0,30] and [5,10] overlap.
 *                At time 15-20, meetings [0,30] and [15,20] overlap.
 *                Maximum overlap = 2 rooms needed.
 *
 * Example 2:
 *   Input: intervals = [[7,10],[2,4]]
 *   Output: 1
 *   Explanation: No overlap, only 1 room needed.
 *
 * Example 3:
 *   Input: intervals = [[1,3],[2,4],[3,5]]
 *   Output: 2
 *   Explanation: At time 3, both [1,3] and [2,4] are active. Max overlap = 2.
 */

/*
 * ======================== HINGLISH LOGIC EXPLANATION ========================
 *
 * Bhai, yeh Meeting Rooms I se thoda advance hai. Yahan humein kitni rooms
 * chahiyein pata karna hai. Matlab ek hi time pe kitni meetings ho rahi hain,
 * woh max count = minimum rooms.
 *
 * APPROACH: Sweep Line Technique
 *
 * Step 1: Har interval ke liye do events create karo:
 *   - Start event: (time, +1)  -> meeting shuru ho rahi hai, room chahiye
 *   - End event:   (time, -1)  -> meeting khatam ho rahi hai, room khali
 *
 * Step 2: Saare events ko time ke basis pe sort karo.
 *   - Agar same time pe start aur end dono ho, toh pehle end aaye
 *     (kyunki ek room khali hoga pehle, phir naya use ho sakta hai).
 *     Isliye end events ko (-1) aur start ko (+1) diya, toh sorting mein
 *     -1 pehle aayega.
 *
 * Step 3: Sweep line chalao:
 *   - Active meetings = 0, max meetings = 0
 *   - Har event pe active meetings mein delta add karo
 *   - Max meetings update karo agar active > max
 *
 * Step 4: Max meetings = minimum rooms required.
 *
 * Example walkthrough: intervals = [[0,30],[5,10],[15,20]]
 *   - Events: (0,+1), (30,-1), (5,+1), (10,-1), (15,+1), (20,-1)
 *   - Sort: (0,+1), (5,+1), (10,-1), (15,+1), (20,-1), (30,-1)
 *   - Sweep:
 *     * (0,+1): active=1, max=1
 *     * (5,+1): active=2, max=2
 *     * (10,-1): active=1
 *     * (15,+1): active=2, max=2
 *     * (20,-1): active=1
 *     * (30,-1): active=0
 *   - Result: 2
 *
 * ======================== TIME & SPACE COMPLEXITY ========================
 * Time Complexity:  O(n log n) - sorting events ke liye
 * Space Complexity: O(n) - events array ke liye (2n events)
 * ======================== TIME & SPACE COMPLEXITY ========================
 */

function minMeetingRooms(intervals) {
    // Edge case: empty or single interval
    if (intervals.length === 0) return 0;
    if (intervals.length === 1) return 1;

    // Events create karo: [time, delta]
    const events = [];
    for (const [start, end] of intervals) {
        events.push([start, +1]);  // Meeting shuru
        events.push([end, -1]);    // Meeting khatam
    }

    // Events ko time ke basis pe sort karo
    // Agar time same hai toh pehle end event aaye (-1 < +1)
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let activeMeetings = 0;
    let maxMeetings = 0;

    // Sweep line: har event pe active count update karo
    for (const [, delta] of events) {
        activeMeetings += delta;
        maxMeetings = Math.max(maxMeetings, activeMeetings);
    }

    return maxMeetings;
}

/*
 * ======================== TEST CASES ========================
 */

// Test Case 1: Two rooms needed
// Input: [[0,30],[5,10],[15,20]]
// Expected Output: 2
console.log("Test 1 - [[0,30],[5,10],[15,20]]:", minMeetingRooms([[0, 30], [5, 10], [15, 20]]));
// Expected: 2

// Test Case 2: One room enough
// Input: [[7,10],[2,4]]
// Expected Output: 1
console.log("Test 2 - [[7,10],[2,4]]:", minMeetingRooms([[7, 10], [2, 4]]));
// Expected: 1

// Test Case 3: Two rooms with three intervals
// Input: [[1,3],[2,4],[3,5]]
// Expected Output: 2
console.log("Test 3 - [[1,3],[2,4],[3,5]]:", minMeetingRooms([[1, 3], [2, 4], [3, 5]]));
// Expected: 2

// Test Case 4: Empty input
// Input: []
// Expected Output: 0
console.log("Test 4 - []:", minMeetingRooms([]));
// Expected: 0

// Test Case 5: All overlapping (3 rooms needed)
// Input: [[1,5],[2,6],[3,7]]
// Expected Output: 3
console.log("Test 5 - [[1,5],[2,6],[3,7]]:", minMeetingRooms([[1, 5], [2, 6], [3, 7]]));
// Expected: 3

// Test Case 6: Single meeting
// Input: [[1,10]]
// Expected Output: 1
console.log("Test 6 - [[1,10]]:", minMeetingRooms([[1, 10]]));
// Expected: 1

// Test Case 7: Touching intervals (end == start)
// Input: [[1,2],[2,3],[3,4]]
// Expected Output: 1
console.log("Test 7 - [[1,2],[2,3],[3,4]]:", minMeetingRooms([[1, 2], [2, 3], [3, 4]]));
// Expected: 1

module.exports = minMeetingRooms;
