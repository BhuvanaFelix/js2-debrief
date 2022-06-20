// The following code takes a given name, runs a function to create a string and logs the name.
// The output should be "My name is Zara Williams !" when run.
// The code has 7 errors, find them and fix them and use node to check it is working.
// Hint: check particularly for incorrect marks/syntax, mispelled functions, and that information is returned from a function if needed.

function concatenate(first, last) {
    let full; //changed to let
    full = `My name is ${first} ${last} !`;//changed "  to `
    return full; // added return to return function.
   
  }
  
  getName = (firstName, lastName)=> { //same parameter name firstName
    let result; // changed to let
    result = concatenate(firstName, lastName);//It is concatenate not concat.
    console.log(result);
  }
  getName("Zara", "Williams");//both should have same quotes ".
  