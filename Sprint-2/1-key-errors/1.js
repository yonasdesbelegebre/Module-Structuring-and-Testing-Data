// Predict and explain first...

// Why will an error occur when this program runs?
//const decimalNumber is already declared in the function convertToPercentage.
//the function is not called in the code. 

// function convertToPercentage(decimalNumber) {
//   const decimalNumber= 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// The error is 'decimalNumber' is already been declared. Java script does not allow declaration variables more than once.
// this is synax error.To fix the error.
// The program is expected to take input from the user and decalring inside the function is not correct.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
const decimalNumber = 0.5;
console.log(convertToPercentage(decimalNumber));