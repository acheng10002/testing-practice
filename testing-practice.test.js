// import the modules
const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./testing-practice");

test('capitalize first char of "hello world"', () => {
  expect(capitalize("hello world")).toMatch("Hello world");
});

test('reverse "hello world"', () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("four operations of calculator object", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.subtract(3, 2)).toBe(1);
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.multiply(4, 5)).toBe(20);
});

// describe creates a test suite that groups related tests together
describe("caesarCipher", () => {
  // defines a single test case with a description and arrow function contains the test case logic
  test("should take a string and shift factor and return shifted string", () => {
    // testCases array will multiple test cases for the caesarCipher function
    let testCases = [
      {
        // tests wrap from z to a
        string: "xyz",
        shift: 3,
        expected: "abc",
      },
      {
        // tests case preservation
        string: "HeLLo",
        shift: 3,
        expected: "KhOOr",
      },
      {
        // tests punctuation
        string: "Hello, World!",
        shift: 3,
        expected: "Khoor, Zruog!",
      },
    ];
    // loops over each test case in the array
    testCases.forEach(function (t) {
      // calls caesarCipher and stores result in actual
      let actual = caesarCipher(t.string, t.shift);
      // assertion checking if actual from caesarCipher matches the expected from the test case object
      expect(actual).toMatch(t.expected);
    });
  });
});

// use toEqual matcher when checking the value of an object
test("analyze the array [1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
