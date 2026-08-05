# Intervals - Basics

## Interval Kya Hai?
[start, end] pair jisse range represent hota hai.
Example: [1, 3] matlab 1 se 3 tak ka interval.

```javascript
// Meeting = [start, end]
const meeting = [9, 10.5]; // 9 AM to 10:30 AM
```

## Key Operations

### 1. Merge Overlapping Intervals
```javascript
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
}
```

### 2. Check Overlap
```javascript
function overlaps(a, b) {
  return a[0] < b[1] && b[0] < a[1];
}
```

### 3. Insert Interval
```javascript
function insert(intervals, newInterval) {
  const result = [];
  let i = 0;
  // Add intervals before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i++]);
  }
  // Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);
  // Add remaining intervals
  while (i < intervals.length) result.push(intervals[i++]);
  return result;
}
```

## Common Patterns

### Sort by Start Time
```javascript
intervals.sort((a, b) => a[0] - b[0]);
// Use: merging, inserting, checking overlaps
```

### Sort by End Time
```javascript
intervals.sort((a, b) => a[1] - b[1]);
// Use: non-overlapping intervals (greedy)
```

### Sweep Line
```javascript
// Convert intervals to events
const events = [];
for (const [start, end] of intervals) {
  events.push([start, 1]);   // start event
  events.push([end, -1]);    // end event
}
events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
let active = 0, maxActive = 0;
for (const [, type] of events) {
  active += type;
  maxActive = Math.max(maxActive, active);
}
```

## When to Use?
- Meetings, schedules, time ranges
- "Merge" intervals
- "Non-overlapping" count
- "Minimum rooms needed" (sweep line)
- "Insert into sorted intervals"

## Interview Tips
- Sort by start time for merging
- Sort by end time for non-overlapping (greedy)
- Sweep line for concurrent count problems
- Edge cases: empty intervals, single interval, fully overlapping
- Always ask: inclusive or exclusive boundaries?
