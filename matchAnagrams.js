// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

var groupAnagrams = function(strs) {
  let hash = {};

  strs.forEach(str => {
    let letters = str.split('').sort();
  
    hash[letters] ? hash[letters].push(str) : hash[letters] = [str]
  })
// return the keys of the object in an array 

let allValues = Object.values(hash)
return allValues;

};

arrOfSt = ["eat", "tan", "tea", "ate", "nat", "bat"];
groupAnagrams(arrOfSt);