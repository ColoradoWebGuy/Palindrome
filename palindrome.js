/* 
***** Documentation by Steven Schulte *****
permutation is a rearrangement of letters
palindorme is a word / string is the same forwards and backwards

–– Tact Coa
Description: "Tact Coa" is a permutation of a palindrome which should
return True, but is not a palindrome itself
–– Tacocat
Description: Tacocat is a palindrome
*/

let permutationString = "Tact Coa";
let palindromeString = "tacocat";

// A function to see if it is a Palindrome
const isPalindrome = function (str) {
  let arrayOfString = str.split("");
  let reverseString = arrayOfString.reverse().join(""); // back to string for comparison
  if (str == reverseString) {
      console.log(str + " is a palindrome");
      return true;
  } else {
      console.log(str + " is not a palindrome");
      return false;
  }
};

// A function to convert strings into an obj with a count of each letters
const objectLetterCounts = function (str) {
  const strArray = str.toLowerCase().replace(/\s/g, '').split("");
  const obj = {}; 
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] in obj) {
        obj[strArray[i]] = obj[strArray[i]] + 1; // add to existing count of letters
    } else {
        obj[strArray[i]] = 1; // 1 for one letter
    }
  }
  console.log(obj);
  return obj;
};

// A function to see if a work is a permutation of a palindrome
const isPermutation = function (palindromeWord, stringToCompare) {
    const palindromeWordObj = objectLetterCounts(palindromeWord);
    const stringToCompareObj = objectLetterCounts(stringToCompare);
    let isPermutation = true;
    for (const key in palindromeWordObj) {
        if (palindromeWordObj[key] != stringToCompareObj[key]) {
            isPermutation = false;
        }
    }
    // check if the first word is a palindrome first
    if (isPalindrome(palindromeWord)) {
        if (isPermutation) {
          console.log("'" + stringToCompare + "' is a permutation of the palindrome: " + palindromeWord);
          return true;
        } else {
          console.log("'" + stringToCompare + "' is not a permutation of the palindrome: " + palindromeWord);
          return false;
        }
    } else {
        console.log(palindromeWord + " is not a palindrome");
        return false;
    }
};

// check permutations to "Tact Coa"
isPermutation(palindromeString, permutationString);

// change permutations to "tacocat"
permutationString = "tacocat";
isPermutation(palindromeString, permutationString);

// change permutations to "acoctta"
permutationString = "acoctta";
isPermutation(palindromeString, permutationString);