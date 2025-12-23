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
