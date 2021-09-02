/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestWordLength = 0) {
  if (words.length === 0) return longestWordLength;
  if (words[0].length > longestWordLength) longestWordLength = words[0].length;
  return longest(words.slice(1), longestWordLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx === str.length) return newStr;
  if (idx % 2 === 0) {
    newStr += str[idx];
  }
  return everyOther(str, idx + 1, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;
  if (str[str.length - 1] === str[0]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (val === arr[idx]) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, len = 0) {
  if (str.length === len) return;

  revString();
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
