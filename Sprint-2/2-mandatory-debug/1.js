// Predict and explain first...
//  =============> write your prediction
// the is the error in the code the return statement is not returning the sum of a and b. 
// function sum(a, b) {
//   return;
//   a + b;
// }

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// the program doesn't have any syntax error,the return statment before the the expression is not returing nothing.
// to fix the error we can remove the return statement before the expression and return the expression directly.
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}