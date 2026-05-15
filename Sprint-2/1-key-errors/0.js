// Predict and explain first...
//  function takes input string and return back in capital letter.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str1 = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str1;
}

// The error is 'str' is already been declared. Java script does not allow declaration variables more than once.
//It is synax error.To fix the error, we can change the variable name inside the function to something else, like 'capitalizedStr'.

// =============> write your new code here
function capitaliseN(str) {
  let capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalizedStr;
}
let str2="yonas";
console.log(capitalise(str2))