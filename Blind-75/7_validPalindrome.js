function isPalindrome(s) {
  // Convert to lowercase and remove non-alphanumeric chars
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = s.length - 1;

  // Two pointer check
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

// Test
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
