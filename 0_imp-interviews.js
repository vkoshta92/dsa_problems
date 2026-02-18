/**
 * This file contains various important interview questions with simple logic.
 * Isme bohot saare recruitment exams ke sawal hain jo aksar puche jaate hain.
 * Har function ke upar uska kaam Hinglish mein samjhaya gaya hai.
 */

// https://leetcode.com/problem-list/oizxjoit/
// 1. Reverse a String
// Ye function string ko ulta (reverse) karega
function reverseString(str) {
  // split -> array, reverse -> ulta, join -> wapas string
  return str.split("").reverse().join("");
}

console.log("1. Reverse String:", reverseString("hello")); // "olleh"


// 2. Check if a String is a Palindrome
// Palindrome matlab jo aage se aur peeche se same ho
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // spaces, symbols hata do
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log("2. Is Palindrome:", isPalindrome("Madam")); // true
console.log("2. Is Palindrome:", isPalindrome("Hello")); // false


// 3. Remove Duplicates from a String
// Repeated characters ko hata ke unique string return karega
function removeDuplicates(str) {
  // Set automatically duplicates hata deta hai
  return [...new Set(str)].join("");
}

console.log("3. Remove Duplicates:", removeDuplicates("aabbccddeeff")); // "abcdef"


// 4. Find the First Non-Repeating Character
// Pehla character jo repeat nahi ho raha use find karna hai
function firstNonRepeatingChar(str) {
  const freq = {};

  // pehle frequency map banao
  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // ab pehla char jiska count 1 ho use return karo
  for (const ch of str) {
    if (freq[ch] === 1) return ch;
  }

  return null; // agar sab repeat ho rahe ho
}

console.log("4. First Non-Repeating:", firstNonRepeatingChar("aabbccdeff")); // "d"


// 5. Count the Occurrences of Each Character
// Har character kitni baar aaya hai wo count karna
function charCount(str) {
  const freq = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}

console.log("5. Character Count:", charCount("banana"));
// { b: 1, a: 3, n: 2 }


// 6. Reverse Words in a Sentence
// Words ki position ulat deni hai, but word ke andar ke letters same rahenge
function reverseWords(sentence) {
  // multiple spaces handle karne ke liye regex split
  return sentence.trim().split(/\s+/).reverse().join(" ");
}

console.log("6. Reverse Words:", reverseWords("hello world from js"));
// "js from world hello"


// 7. Check if Two Strings are Anagrams
// Anagram matlab same letters different order
function areAnagrams(str1, str2) {
  const normalize = (s) =>
    s.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");

  return normalize(str1) === normalize(str2);
}

console.log("7. Are Anagrams:", areAnagrams("listen", "silent")); // true
console.log("7. Are Anagrams:", areAnagrams("hello", "world")); // false


// 8. Find the Longest Substring Without Repeating Characters
// Aisa longest part string ka jisme koi character repeat na ho
function longestUniqueSubstring(str) {
  let start = 0;
  let maxLen = 0;
  let maxSub = "";
  const indexMap = {}; // last seen index

  for (let end = 0; end < str.length; end++) {
    const ch = str[end];

    // agar char pehle dekha hai aur window ke andar hai to start aage badha do
    if (indexMap[ch] >= start) {
      start = indexMap[ch] + 1;
    }

    indexMap[ch] = end; // current index store karo

    const currentLen = end - start + 1;
    if (currentLen > maxLen) {
      maxLen = currentLen;
      maxSub = str.slice(start, end + 1);
    }
  }

  return maxSub;
}

console.log("8. Longest Unique Substring:", longestUniqueSubstring("abcabcbb")); // "abc" or "bca" etc


// 9. Convert a String to an Integer (atoi Implementation)
// String ko manually number me convert karna, Number() use nahi karenge
function myAtoi(str) {
  // leading spaces hatao
  let i = 0;
  const n = str.length;
  while (i < n && str[i] === " ") i++;

  // sign check karo
  let sign = 1;
  if (i < n && (str[i] === "+" || str[i] === "-")) {
    if (str[i] === "-") sign = -1;
    i++;
  }

  let result = 0;
  while (i < n && str[i] >= "0" && str[i] <= "9") {
    const digit = str.charCodeAt(i) - "0".charCodeAt(0);
    result = result * 10 + digit;
    i++;
  }

  return sign * result;
}

console.log("9. myAtoi:", myAtoi("   -1234abcd")); // -1234


// 10. Compress a String (Run-Length Encoding)
// Same char repeat ho rahe ho to unka count laga ke compress karo
function compressString(str) {
  if (str.length === 0) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      // previous char + count add karo
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

console.log("10. Compressed String:", compressString("aaabbccccd")); // "a3b2c4d1"


// 11. Find the Most Frequent Character
// Jo char sabse zyada baar aaya ho use find karna
function mostFrequentChar(str) {
  const freq = {};
  let maxChar = null;
  let maxCount = 0;

  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
    if (freq[ch] > maxCount) {
      maxCount = freq[ch];
      maxChar = ch;
    }
  }

  return { char: maxChar, count: maxCount };
}

console.log("11. Most Frequent Char:", mostFrequentChar("mississippi"));
// { char: 'i' or 's', count: 4 }


// 12. Find All Substrings of a Given String
// String ke saare possible substrings generate karna
function allSubstrings(str) {
  const subs = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subs.push(str.slice(i, j));
    }
  }
  return subs;
}

console.log("12. All Substrings:", allSubstrings("abc"));
// ["a","ab","abc","b","bc","c"]


// 13. Check if a String is a Rotation of Another String
// Example: "waterbottle" rotation "erbottlewat"
function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  // Trick: s1 + s1 me agar s2 mile to rotation hai
  return (s1 + s1).includes(s2);
}

console.log("13. Is Rotation:", isRotation("waterbottle", "erbottlewat")); // true
console.log("13. Is Rotation:", isRotation("abc", "acb")); // false


// 14. Remove All White Spaces from a String
// Saare spaces, tabs, new lines sab hata do
function removeWhitespaces(str) {
  return str.replace(/\s+/g, "");
}

console.log("14. Remove Whitespaces:", removeWhitespaces("  h e l l o  world \n"));
// "helloworld"


// 15. Check if a String is a Valid Shuffle of Two Strings
// yeh check karega ki s3 ke characters s1 + s2 ke mix hain ya nahi (order ignore kar rahe)
// NOTE: yahan simple char frequency check kar rahe hain
function isValidShuffle(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const freq = {};

  for (const ch of s1 + s2) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (const ch of s3) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }

  return true;
}

console.log("15. Is Valid Shuffle:", isValidShuffle("abc", "def", "dabecf")); // true
console.log("15. Is Valid Shuffle:", isValidShuffle("abc", "def", "dabecg")); // false


// 16. Convert a String to Title Case
// Har word ka first letter capital, baaki small
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
    .join(" ");
}

console.log("16. Title Case:", toTitleCase("hEllo woRLD from   javascript"));
// "Hello World From Javascript"


// 17. Find the Longest Common Prefix (Array of Strings)
// multiple strings me jo starting part same hai use find karna
function longestCommonPrefix(arr) {
  if (!arr.length) return "";

  // sort karne se first aur last string ka difference se hi pata chal jaega
  arr.sort();
  const first = arr[0];
  const last = arr[arr.length - 1];
  let i = 0;

  while (i < first.length && first[i] === last[i]) {
    i++;
  }

  return first.slice(0, i);
}

console.log(
  "17. Longest Common Prefix:",
  longestCommonPrefix(["flower", "flow", "flight"])
); // "fl"


// 18. Convert a String to a Character Array
// String ko array of chars me todna
function stringToCharArray(str) {
  return str.split("");
}

console.log("18. Char Array:", stringToCharArray("hello")); // ["h","e","l","l","o"]


// 19. Replace Spaces with %20 (URL Encoding style)
// Mainly URL me space ko %20 se replace karne ke liye
function urlEncodeSpaces(str) {
  return str.replace(/ /g, "%20");
}

console.log("19. URL Encoded:", urlEncodeSpaces("hello world js"));
// "hello%20world%20js"


// 20. Convert a Sentence into an Acronym
// Har word ka first letter leke uppercase acronym banao
function toAcronym(sentence) {
  return sentence
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase())
    .join("");
}

console.log("20. Acronym:", toAcronym("central processing unit")); // "CPU"


// 21. Check if a String Contains Only Digits
// Sirf 0-9 digits allowed, koi letter/space nahi
function isOnlyDigits(str) {
  return /^\d+$/.test(str);
}

console.log("21. Only Digits:", isOnlyDigits("123456")); // true
console.log("21. Only Digits:", isOnlyDigits("123a56")); // false


// 22. Find the Number of Words in a String
// Words ko space ke base pe count karenge (multiple spaces handle)
function wordCount(str) {
  const trimmed = str.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

console.log("22. Word Count:", wordCount("   hello   world  from js ")); // 4


// 23. Remove a Given Character from a String
// Jo char diya hai wo sab jagah se hata dena
function removeChar(str, charToRemove) {
  let result = "";
  for (const ch of str) {
    if (ch !== charToRemove) {
      result += ch;
    }
  }
  return result;
}

console.log("23. Remove Char:", removeChar("banana", "a")); // "bnn"


// 24. Find the Shortest Word in a String
// Sentence me sabse chhota word find karo
function shortestWord(sentence) {
  const words = sentence.trim().split(/\s+/);
  if (!words.length) return "";

  let shortest = words[0];

  for (const word of words) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }

  return shortest;
}

console.log("24. Shortest Word:", shortestWord("I love JavaScript a lot"));
// "I" or "a" (first smallest -> "I")


// 25. Find the Longest Palindromic Substring
// String ke andar jo sabse bada palindrome part hai use find karo
function longestPalindromicSubstring(str) {
  if (str.length < 2) return str;

  let start = 0;
  let maxLen = 1;

  // center se expand karne wala helper
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const currentLen = right - left + 1;
      if (currentLen > maxLen) {
        maxLen = currentLen;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    // odd length palindrome
    expandAroundCenter(i, i);
    // even length palindrome
    expandAroundCenter(i, i + 1);
  }

  return str.slice(start, start + maxLen);
}

console.log(
  "25. Longest Palindromic Substring:",
  longestPalindromicSubstring("babad")
); // "bab" or "aba"
