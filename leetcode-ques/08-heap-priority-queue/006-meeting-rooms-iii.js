/*
 * Problem: Meeting Rooms III
 * Difficulty: Hard
 * Companies: Amazon, Google, Meta, Microsoft
 *
 * Problem Statement:
 * You are given an integer n representing the number of rooms numbered
 * from 0 to n - 1. You are also given a 2D integer array meetings where
 * meetings[i] = [starti, endi] indicates that a meeting will be held
 * during the half-closed time interval [starti, endi). All the values of
 * starti are unique.
 *
 * Meetings are allocated to rooms in the following manner:
 * 1. Each meeting will take place in an unused room with the lowest number.
 * 2. If there are no available rooms, the meeting will be delayed until a
 *    room becomes free. The delayed meeting should have the same duration
 *    as the original meeting.
 * 3. Rooms are used non-overlappingly (a room can't be used for two
 *    meetings at the same time).
 *
 * Return the number of the room that held the most meetings. If there are
 * multiple answers, return the room with the lowest number.
 *
 * Example 1:
 * Input: n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]
 * Output: 0
 * Explanation:
 *   - Meeting [0,10] uses room 0. Room 0 is busy until time 10.
 *   - Meeting [1,5] is delayed to time 10, uses room 0. (reuse)
 *   - Meeting [2,7] uses room 1. Room 1 is busy until time 7.
 *   - Meeting [3,4] is delayed to time 7, uses room 1.
 *   Room 0 had 2 meetings, Room 1 had 2 meetings. Answer = 0 (lower index).
 *
 * Example 2:
 * Input: n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]
 * Output: 1
 * Explanation:
 *   - Meeting [1,20] uses room 0. Busy until 20.
 *   - Meeting [2,10] uses room 1. Busy until 10.
 *   - Meeting [3,5] uses room 2. Busy until 5.
 *   - Meeting [4,9] delayed to 10, uses room 1. Busy until 15.
 *   - Meeting [6,8] delayed to 15, uses room 1. Busy until 20.
 *   Room 0: 1 meeting, Room 1: 3 meetings, Room 2: 1 meeting. Answer = 1.
 *
 * Example 3:
 * Input: n = 3, meetings = [[12,16],[5,10],[4,7],[8,12],[3,6],[10,14]]
 * Output: 0
 */

/*
 * Hinglish Logic Explanation:
 * ----------------------------
 * Approach: Sort + Available List + Busy Min-Heap
 *
 * Step 1: Meetings ko start time ke according sort karo.
 *
 * Step 2: Do data structures maintain karo:
 *   - available: Sorted list of free room indices (smallest index first)
 *   - busy: Min-heap of [endTime, roomIndex] — jo sabse jaldi free
 *           hoga woh top par
 *
 * Step 3: Har meeting ke liye:
 *   a) Pehle check karo ki koi busy room free ho gaya hai kya
 *      (endTime <= current start time). Agar haan toh us room ko
 *      available list mein wapas daal do.
 *   b) Agar available list mein room hai → smallest index wala room
 *      do (available.shift()). Agar available nahi hai → sabse jaldi
 *      free hone wala room reuse karo (busy[0] se endTime update karo
 *      meeting duration add karke).
 *   c) Room ko busy heap mein daalo with updated end time.
 *   d) Us room ki meeting count increment karo.
 *
 * Step 4: Sabse zyada meetings wala room return karo (lowest index tiebreak).
 *
 * Yeh greedy approach hai — hamesha smallest index room assign karte hain
 * jab availability ho, aur nahi ho toh earliest free room reuse karte hain.
 */

function mostBooked(n, meetings) {
  // Sort meetings by start time
  meetings.sort((a, b) => a[0] - b[0]);

  // Track meeting count for each room
  const count = new Array(n).fill(0);

  // Available rooms sorted by index (smallest first)
  const available = [];
  for (let i = 0; i < n; i++) {
    available.push(i);
  }
  available.sort((a, b) => a - b);

  // Busy rooms: min-heap of [endTime, roomIndex]
  const busy = [];

  for (const [start, end] of meetings) {
    // Sort busy heap to ensure earliest end time is at front
    busy.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // Free up rooms that have finished before or at current start time
    while (busy.length > 0 && busy[0][0] <= start) {
      available.push(busy[0][1]);
      available.sort((a, b) => a - b);
      busy.shift();
    }

    // Assign room: either available (smallest index) or reuse busiest
    if (available.length > 0) {
      const roomIdx = available.shift();
      busy.push([end, roomIdx]);
      count[roomIdx]++;
    } else {
      // No room free — delay meeting and reuse earliest finishing room
      const [earliestEnd, roomIdx] = busy[0];
      const newEnd = earliestEnd + (end - start); // Original duration
      busy[0] = [newEnd, roomIdx];
      busy.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
      count[roomIdx]++;
    }
  }

  // Find room with maximum meetings (lowest index on tie)
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (count[i] > count[answer]) {
      answer = i;
    }
  }
  return answer;
}

/*
 * Time Complexity: O(m log m + m * n)
 * - Sorting meetings: O(m log m) where m = number of meetings.
 * - For each meeting, freeing rooms from busy heap: O(m * n) worst case.
 * - With proper heap: O(m log n).
 *
 * Space Complexity: O(n + m)
 * - Available list: O(n), Busy heap: O(n), Count array: O(n).
 * - Meetings sorted in place: O(1) extra.
 */

// ======================== TEST CASES ========================

// Test Case 1: Basic example from LeetCode
// Input: n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]
// Expected Output: 0
console.log("Test 1:", mostBooked(2, [[0, 10], [1, 5], [2, 7], [3, 4]]));
// Expected: 0

// Test Case 2: Three rooms, multiple meetings
// Input: n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]
// Expected Output: 1
console.log("Test 2:", mostBooked(3, [[1, 20], [2, 10], [3, 5], [4, 9], [6, 8]]));
// Expected: 1

// Test Case 3: All meetings fit mostly without delay, but last overlaps
// Input: n = 4, meetings = [[0,5],[1,3],[2,4],[3,7]]
// Expected Output: 1
// Explanation: [0,5]→room0, [1,3]→room1, [2,4]→room2, [3,7]→room1 (room0 busy till5)
//              Room0: 1, Room1: 2, Room2: 1, Room3: 0. Answer = 1
console.log("Test 3:", mostBooked(4, [[0, 5], [1, 3], [2, 4], [3, 7]]));
// Expected: 1

// Test Case 4: Single room
// Input: n = 1, meetings = [[0,5],[1,3],[2,4]]
// Expected Output: 0
console.log("Test 4:", mostBooked(1, [[0, 5], [1, 3], [2, 4]]));
// Expected: 0

// Test Case 5: Many meetings, heavy reuse
// Input: n = 2, meetings = [[0,10],[1,5],[2,7],[3,4],[5,9]]
// Expected Output: 0
console.log("Test 5:", mostBooked(2, [[0, 10], [1, 5], [2, 7], [3, 4], [5, 9]]));
// Expected: 0

module.exports = { mostBooked };
