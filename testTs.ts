const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const input_1 = document.getElementById('num1')! as HTMLInputElement; // ! certfying that this is gonna aleways be ab existing element 
const input_2 = document.getElementById('num2')! as HTMLInputElement;
// const input_3 = document.getElementById('num3');
// const input_4 = document.getElementById('num4');
const result = document.getElementById('result');
// const result2 = document.getElementById('result2');

function add(num1: number , num2: number) {
    
        return num1 + num2;
   
}; 

// function add2(num1, num2) {
//     if( typeof num1 === 'numbers' && typeof num2 === 'numbers') {
//         return num1 + num2;
//     }
//     return +num1 + +num2;
// };

button1.addEventListener('click', function(){
    console.log(add(+input_1.value, +input_2.value));
    // let additionResult = add(+input_1.value, +input_2.value)
    // result.innerHTML = additionResult;
    
});

// button2.addEventListener('click', function(){
//     console.log(add2(input_3.value, input_4.value));
//     let additionResult2 = add2(input_3.value, input_4.value)
//     result2.innerHTML = additionResult2
// });

