const isPalindrome = word => {    
    // Algorithm
    // 1. Create function called isPalindrome with a parameter called word.
    // 2. Give the function a single parameter.
    // 3. Inside the function, convert the string parameter(argument) to an array and assign it to a variable 'strArr'.
    // 4. reverse the order of elements in strArr and assign the resulting array to a variable strArrReverse
    // 5. Convert strArrReverse back to a string.
    // 6. Compare 'word' with 'strArrReverse' and return true if 'word' is a palindrome or else false.


  const strArr = word.split('')
  const strArrReverse = strArr.reverse()
  strReverse = strArrReverse.join('')
  return strReverse === word
}

/* Pseudocode

  // creat function with parameter 'word'  
  // convert string parameter to array (strArr)  
  // create variable strArrReverse and assign it the value of strArr.reverse()
  // Convert strArrReverse to a string using join() method
  // return strArrReverse === word which returns either true or false
  
*/
 
 /*
 Add written explanation of your solution here
 
  The function takes an argument, say 'mother', which is a string. It then rearranges the string characters starting from the right to the left. After this it compares the original string and the newly formed string. if the two strings are identical, It returns true, otherwise it returns false.
 */

// You can run `node index.js` to view these console logs


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log();

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

console.log();

  console.log(("Expecting: true"));
  console.log("=>", isPalindrome("mum"))
}

module.exports = isPalindrome;
