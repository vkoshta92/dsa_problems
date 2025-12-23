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
