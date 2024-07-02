// takes a string and returns it with the first character capitalized
function capitalize(string) {
  const str = string;
  /* charAt(0) returns the first character of the string
  str.slice(1) extracts the substring starting from index 1 to the end of the string */
  const upperFirstChar = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(upperFirstChar);
  return upperFirstChar;
}

capitalize("hello world");

// takes a string and returns it reversed
function reverseString(string) {
  const str = string;
  /* str.split('') - converts the string to an array of characters
    reverse() reverses the array of characters
    join('') joins the reserved array back */
  const reversedString = str.split("").reverse().join("");
  console.log(reversedString);
  return reversedString;
}

reverseString("hello world");

/* calculator object that contains functions for the basic operations, each function
takes two numbers and returns the correct calculation */
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

console.log(calculator.add(1, 1));
console.log(calculator.subtract(3, 2));
console.log(calculator.divide(6, 2));
console.log(calculator.multiply(4, 5));

function draftCaesarCipher(string, shift) {
  // Defines the alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  /* Splits the string into characters and map over each character 
    .split('') converts the string to an array
    .map() iterates through each element in the array and applies arrow function to each char */
  return (
    string
      .split("")
      .map((char) => {
        /* Checks if the character is uppercase 
        compares the original character to its uppercase form
        if character is already uppercase, this comparison will return true 
        if not, it returns false */
        const isUpperCase = char === char.toUpperCase();

        // Converts the character to lowercase
        const lowerChar = char.toLowerCase();

        /* Finds the character's index in the alphabet
        index is assigned the position of lowerChar in the alphabet string 
        if lowerChar is not found, index will be -1 
        indexOf() returns the first index at which a given element can be found in an array or string */
        const index = alphabet.indexOf(lowerChar);

        /* Handles non-alphabetic characters
        if index is -1, char is a non-alphabetic character and it is returned unchanged */
        if (index === -1) {
          return char;
        }

        /* Calculates the new index 
        newIndex is assigned the new position of the character after applying the shift 
        % ensures the index wraps around if it exceeds 25 */
        let newIndex = (index + shift) % 26;

        /* Handles negative indices (happens with the shift factor is negative)
       if newIndex is negative, adjusts newIndex by adding 26 to wrap it around to a positive index 
       *test wraps from z to a, correctly handle the scenario where the end of the alphabet is reached
       and wraps around the beginning */
        if (newIndex < 0) {
          newIndex += 26;
        }

        // Gets the new character
        const newChar = alphabet[newIndex];

        /* Preserves case and returns the new character 
       if isUpperCase is true, converts newChar to uppercase, otherwise, returns newChar as is */
        return isUpperCase ? newChar.toUpperCase() : newChar;
      })

      // joins the characters back into a string
      .join("")
  );
}

/* takes a string and a shift factor and returns it with each character "shifted"
main function is split into two smaller functions */
function caesarCipher(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // helper function to determine if a character is uppercase
  function isUpperCase(char) {
    return char === char.toUpperCase();
  }

  // helper function to shift a character
  function shiftChar(char, shift) {
    const lowerChar = char.toLowerCase();
    const index = alphabet.indexOf(lowerChar);
    if (index === -1) {
      return char;
    }
    let newIndex = (index + shift) % 26;
    if (newIndex < 0) {
      newIndex += 26;
    }
    const newChar = alphabet[newIndex];
    return isUpperCase(char) ? newChar.toUpperCase() : newChar;
  }
  // main function logic
  return string
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

console.log(caesarCipher("xyz", 3));
console.log(caesarCipher("HeLLo", 3));
console.log(caesarCipher("Hello, World!", 3));

// takes an array of numbers and returns an object
function analyzeArray(arr) {
  function average(arr) {
    if (arr.length === 0) return 0;

    /* reduce method returns the sum of all the elements
    reducer method is the arrow function
    accumulator accumulates the total as the reducer function iterates over each each element
    accumulator is initialized with the first element of the array
    current value represents the current element of the array being processed by the reducer function
    */
    const sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return sum / arr.length;
  }
  function min(arr) {
    if (arr.length === 0) return 0;
    return Math.min(...arr);
  }
  function max(arr) {
    if (arr.length === 0) return 0;
    return Math.max(...arr);
  }
  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length,
  };
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
