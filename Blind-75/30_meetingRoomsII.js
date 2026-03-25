/**
 * ============================================================================
 * PROBLEM: Meeting Rooms II
 * ============================================================================
 * Given an array of meeting time intervals, find the minimum number of
 * conference rooms required so that all meetings can be held.
 * 
 * ============================================================================
 * APPROACH: Two Pointers with Sorted Start/End Times
 * ============================================================================
 * Logic:
 * 1. Separate start times and end times, sort both
 * 2. Use two pointers to track current start and end
 * 3. If a meeting starts before earliest ending meeting → need new room
 * 4. If a meeting starts after/on earliest ending → reuse that room
 * 
 * Key Insight:
 * - We don't need to track WHICH room, just count rooms
 * - When a meeting starts, either:
 *   - We reuse a freed room (meeting ended)
 *   - We need a new room (all rooms occupied)
 * 
 * Example:
 * Meetings: [[0,30], [5,10], [15,20]]
 * Starts: [0, 5, 15]
 * Ends: [10, 20, 30]
 * 
 * - Start 0: no ended meeting → rooms = 1
 * - Start 5: 5 < 10 (earliest end) → need new room → rooms = 2
 * - Start 15: 15 >= 10 → reuse room, endPtr++
 * 
 * Max rooms needed: 2
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n log n)
 * - Sorting start times: O(n log n)
 * - Sorting end times: O(n log n)
 * - Linear scan: O(n)
 * 
 * SPACE COMPLEXITY: O(n)
 * - Separate arrays for starts and ends
 * ============================================================================
 */

function minMeetingRooms(intervals) {
  // If no meetings, no rooms needed
  if (intervals.length === 0) return 0;

  // Separate start and end times
  const starts = intervals.map(i => i[0]).sort((a, b) => a - b);
  const ends = intervals.map(i => i[1]).sort((a, b) => a - b);

  let rooms = 0;
  let endPtr = 0;

  // Traverse all meetings
  for (let i = 0; i < starts.length; i++) {
    // If meeting starts before earliest ending meeting ends
    if (starts[i] < ends[endPtr]) {
      rooms++; // need new room
    } else {
      // Reuse room
      endPtr++;
    }
  }

  return rooms;
}

// Test
console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
