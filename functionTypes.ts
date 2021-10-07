console.log('Functions types');

function add(n1: number, n2: number) {
    return n1 + n2;
};

function printInConsole(num: number): void{ //void means that the function doesn t return anaything , it only execute
    console.log('Result is: ' + num);
};

printInConsole(add(5, 12));
console.log(printInConsole(add(5, 12))); // returns undefined ( which is a value) because it console log a function which retyurns a void type

// very rare Case
function printInConsoleUndefined(num2: number): undefined{ // we can only use undefined to type a function if it has a return statement even empty like here
    console.log('Result is: ' + num2);
    return;
};

console.log(printInConsoleUndefined(add(8, 12))); // returns undefined

// let combinedValues // by default is undefined
let combinedValues: Function // if we want let combinesValues = printInConsole to return an error caus ewe know print value takes only one argument :
let combinedValues2: (a: number, b: number) => number; // means we expect combinedValues2 to takes a function  takes 2 arguments from type number and returns a number

//let's savoid to make mistake like combinedValues = 5 only take function that return a number AND TYAKE 2 PARAMTERS who are from type number 


combinedValues = add;

// combinedValues = 5 //returns an error as soon as we devcare combinedValues to have the type function but doesnt retrun error if the type of combinedValues is any or undefined

console.log(combinedValues(8,8)); //returns 16

// typescript error notification fo rworng type of function assignigation
// combinedValues2 = printInConsole

combinedValues2 = add; // works fine

console.log(combinedValues2(28,8)); //returns 36

function addAndHandle( numb1: number, numb2: number, cb: (Sum: number) => void) {
    //using void implicate that even if we retun something inthe function addAndHandle
    const result = numb1 + numb2;
    cb(result);
};


console.log(addAndHandle(12, 45, (result4CllBck)=> {
    console.log(result4CllBck);
}));
