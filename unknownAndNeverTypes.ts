console.log('unknown and never Type');

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Sayann';
// Error example
// userName = userInput // BRING AN ERROR CAUSE HERE USERNAME IS NOT SURE TO RECEIVE A STRING CAUSE USERINPUT TYPE IS UNKNOWN
// devaring let userInput: any; would have avoid the ts error but unknow allos to be more specific 

// to assign a an unknown variable type to a variable with a specified  type like string
// we need to use a conditionning statement
if (typeof userInput === 'string') {
    userName = userInput; 
};

// We never as a type when we don t want the fucntion to ever return anything
function generateError(message: string, code: number):never {
    throw { message: message, errorCode: code}
};

console.log('An error occured', 500);

// The throw statement throws a user-defined exception. Execution of the current function will stop
//  (the statements after throw won't be executed), and control will be passed to the first catch 
// block in the call stack. If no catch block exists among caller functions, the program will terminate.
// Example
// function getRectArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//       throw 'One or both Parameter are not a number!';
//     }
//   }
//   try {
//     getRectArea(3, 'A');
//   } catch (e) {
//     console.error(e);
//     // expected output: "Parameter is not a number!"
//   };