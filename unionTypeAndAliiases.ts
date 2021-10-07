console.log('app.ts logs');
console.log ( 'union type examples')
 // number, string, boolean ...are customs Types. Cystom types vs uniontype & alliases

// function addCombine(input_1: number | string, input_2: number | String){
//     const result = input_1 + input_2; // TS is doubting if he can concatanate a string with a number
//     return result;
// }

// // in this case we suppose that inputs will have simultanously teh sane tyupe or 2 numbers or 2 strings

// so instead of version 1 we can write
//  1 :using  literal type
 function addCombine1(input_1: number | string, input_2: number | string, resultConversion: string) {
    let resultConcat;
    if(typeof input_1 === 'number' && typeof input_2 === 'number') {
        
        resultConcat = input_1 + input_2
    } else {
        resultConcat = input_1.toString() + input_2.toString();
    }
    // here we use the value of resultConversion to force strings to become numbers
    if (resultConversion === 'asNumber') {
        // which is
        // return +resultConcat
        return +input_1 + +input_2
        // can also be written 
        // return parseFloat(input_1) + parseFloat(input_2);
    } else {
        return resultConcat.toString();
    }
    return resultConcat;
 }

//  2:using union type together with a literal type and new types declaration

type CombinedType = number | string;
type LiteralAndUnionType = 'asNumber' | 'asStringText'

function addCombine2(
    input_1: CombinedType, 
    input_2: number | string, 
    resultConversion: LiteralAndUnionType // Here it can only be one of the 2 string values as value for resultConversion
    ) {
    let resultConcat;
    if(typeof input_1 === 'number' && typeof input_2 === 'number') {
        
        resultConcat = input_1 + input_2
    } else {
        resultConcat = input_1.toString() + input_2.toString();
    }
    // here we use the value of resultConversion to force strings to become numbers
    if (resultConversion === 'asNumber') {
        // which is
        // return +resultConcat
        return +input_1 + +input_2
        // can also be written 
        // return parseFloat(input_1) + parseFloat(input_2);
    } else {
        return resultConcat.toString();
    }
    return resultConcat;
 };


 const combineAges1 = console.log(addCombine1(18,26, 'asNumber'));
 console.log(combineAges1)
 const combineNames1 = console.log(addCombine1('Yann', 'Dorys', 'asStringText'));
 console.log(combineNames1);
 const combineStringAges1 = console.log(addCombine1('18', '32', 'asNumber'));
 console.log(combineStringAges1);

 const combineAges2 = console.log(addCombine2(18,26, 'asNumber'));
 console.log(combineAges2)
 const combineNames2 = console.log(addCombine2('Yann', 'Dorys', 'asStringText'));
 console.log(combineNames2);
 const combineStringAges2 = console.log(addCombine2('18', '32', 'asNumber'));
 console.log(combineStringAges2);


 console.log(parseFloat('24abecdre')); // returns 24
 console.log(parseFloat('24abe5tsccdre')); // returns 24
 console.log(parseFloat('24abecdre56')); // returns 24
 console.log(parseFloat('abe53cdre56')); // returns 24

 



