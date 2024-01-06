var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 === str2 + str1) {
    return str1.substring(0, gcd(str1.length, str2.length));
  } else {
    return "";
  }

  function gcd(len1, len2) {
    while (len2 % len1 != 0) {
      let rem = len2 % len1;
      len2 = len1;
      len1 = rem;
    }
    return len1;
  }
};
var gcdOfStrings = function (str1, str2) {
  if (str2.length > str1.length) {
    return gcdOfStrings(str2, str1);
  }
  if (str2 === str1) {
    return str1;
  }
  if (str1.startsWith(str2)) {
    return gcdOfStrings(str1.substring(str2.length), str2);
  }

  return "";
};

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
