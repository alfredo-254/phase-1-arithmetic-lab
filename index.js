
// Write your code here

// Assuming you have predefined values for num1 and num2
const num1 = 31;
const num2 = 2;

const result = num1 * num2;

// Now, the variable `multiply` holds the result of the multiplication
const multiply = result;

console.log(multiply); // Output will be 62

// Generate a random integer greater than 0
const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

console.log(random);

// Assuming you have predefined values for num3 and num4
const num3 = 14;
const num4 = 5;

// Calculate the remainder of dividing num3 by num4
const mod = (num3 % num4);

// Ensure the remainder is 4
if (mod === 4) {
  console.log(mod); // Output will be 4
} else {
  console.log("The remainder is not 4.");
}

const numbers = [10, 5, 20, 15, 8];

// Find the highest number in the set
const max = Math.max(...numbers);

// Ensure the highest number is 20
if (max === 20) {
  console.log(max); // Output will be 20
} else {
  console.log("The highest number is not 20.");
}