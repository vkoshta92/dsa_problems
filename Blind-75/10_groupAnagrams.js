/**
 * ============================================================================
 * PROBLEM: Group Anagrams
 * ============================================================================
 * Given an array of strings strs, group the anagrams together. You can 
 * return the answer in any order.
 * An anagram is a word formed by rearranging letters of another word.
 * 
 * ============================================================================
 * APPROACH: Sorted String as Key
 * ============================================================================
 * Logic:
 * 1. Two strings are anagrams if they have the same characters
 * 2. If we sort both strings, anagrams become identical
 * 3. Use sorted string as key in a hash map
 * 4. Group all strings with same sorted key together
 * 
 * Why This Works:
 * - "eat", "tea", "ate" all sort to "aet"
 * - Same sorted string = same key = same group
 * - Map: key → array of original strings
 * 
 * Example:
 * - "eat" → sorted: "aet" → group with key "aet"
 * - "tea" → sorted: "aet" → same group
 * - "tan" → sorted: "ant" → different group
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n * k log k)
 * - n = number of strings
 * - k = maximum length of a string
 * - For each string, sorting takes O(k log k)
 * - Total: n * k log k
 * 
 * SPACE COMPLEXITY: O(n * k)
 * - Map stores all strings
 * - Each string is stored once in its group
 * ============================================================================
 */

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
