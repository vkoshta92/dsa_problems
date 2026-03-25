/**
 * ============================================================================
 * PROBLEM: Meeting Rooms
 * ============================================================================
 * Given an array of meeting time intervals, determine if a person could
 * attend all meetings (no overlapping meetings).
 * 
 * ============================================================================
 * APPROACH: Sort and Check Adjacent
 * ============================================================================
 * Logic:
 * 1. Sort meetings by start time
 * 2. Check if any meeting starts before previous meeting ends
 * 3. If yes, overlap exists → cannot attend all
 * 4. If no overlaps found → can attend all
 * 
 * Why This Works:
 * - After sorting, only need to compare adjacent meetings
 * - If meeting i+1 starts before meeting i ends, there's overlap
 * - A person can only be in one meeting at a time
 * 
 * Example (CANNOT attend all):
 * [[0,30], [5,10], [15,20]]
 * Sorted: [[0,30], [5,10], [15,20]]
 * - Meeting [5,10] starts at 5 < 30 → overlap with [0,30]
 * - Return false
 * 
 * Example (CAN attend all):
 * [[0,5], [5,10], [10,15]]
 * - [5,10] starts at 5 >= 5 → no overlap
 * - [10,15] starts at 10 >= 10 → no overlap
 * - Return true
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n log n)
 * - Sorting: O(n log n)
 * - Linear scan: O(n)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using constant extra space
 * - Sorting may use O(log n) for recursion stack
 * ============================================================================
 */

function canAttendMeetings(intervals) {
  // Sort meetings by start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Check adjacent meetings for overlap
  for (let i = 1; i < intervals.length; i++) {
    // If current meeting starts before previous ends
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
}

// Test
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // false
