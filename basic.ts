console.log('test log basic.ts');

function add(n1: number,n2: number, showResult: boolean, answer: string){
    console.log(typeof number_1);
    if(showResult) {
        console.log(`${answer}` + (n1+n2));
        console.log(`${answer}` + (n1+n2));
        // console.log(answer+n1+n2); wrong convert everythin back to a concatanation of string : Result is: 52.8
    } else {
        return n1+ n2;
    }; 
};

const number_1 = 5;
const number_2 = 2.8;
const printResult = true;
const resultPhrase = 'The Sum Result is: '

// const resultSum = add(number_1, number_2, printResult);
// add() return a function via console log so we can write:
add(number_1, number_2, printResult, resultPhrase)
// console.log(resultSum); 