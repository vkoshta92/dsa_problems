function containsDuplicate(nums) {
  // Set stores unique values
  const set = new Set();

  // Traverse array
  for (let num of nums) {

    // If number already exists → duplicate
    if (set.has(num)) return true;

    // Add number to set
    set.add(num);
  }

  // No duplicates found
  return false;
}

// Test
console.log(containsDuplicate([1,2,3,1])); // true
