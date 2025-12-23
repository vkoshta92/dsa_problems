function groupAnagrams(strs) {
  // Map: sorted string -> list of anagrams
  const map = new Map();

  for (let str of strs) {
    // Sort string characters to form key
    const key = str.split("").sort().join("");

    // If key not present, initialize array
    if (!map.has(key)) {
      map.set(key, []);
    }

    // Push original string
    map.get(key).push(str);
  }

  // Return grouped anagrams
  return Array.from(map.values());
}

// Test
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
