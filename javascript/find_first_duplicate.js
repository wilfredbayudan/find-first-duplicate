function findFirstDuplicate(arr) {
  
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    
    if (number in seen) {
      return number;
    }

    seen[number] = true;
    
  }

  return -1;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: 4");
  console.log("=>", findFirstDuplicate([0,1,2,3,4,4,5,6,7,8]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
Rewrite the problem in your own words
Given an array, return the first duplicate found. If no duplicates are found, return -1.

Validate that you understand the problem
For example:
[0,1,2,3,4,4,5,6,7,8]
           ^
Code will stop here and return 4, as it has already seen this number before.


Write your own test cases


Pseudocode

create an empty object called "seen"

iterate over each number in the array
  if the number is a key in "seen"
    return the number
  else
    add number as a key to seen object

return -1

Code!


*/