console.log('test log app.ts: Object types / key value pairs');
var WRITE = 0;
var READ_ONLY = 1;
var READ_AND_WRITE = 2;
// // 1- types: string, number, array of ... , tuple
// const person : {
//     name: string;
//     age: number;
//     hobbies: string[]; // it s an array of strings values
//     role: [number, string]; // this a type tuple : when each key of the array can only be 1 specicific type
// } = {
//     name: 'Sayann',
//     age: 40,
//     hobbies: ['sports', 'Coaching'],
//     role: [2, 'author'], // fixed lenght Array : tuple
// };
// enum allow to assign labels to numbers
// instead of 
//     const WRITE = 0;
//     const READ_ONLY = 1;
//     const READ_AND_WRITE = 2;
// we can writte using enum
var Rights;
(function (Rights) {
    Rights[Rights["WRITE"] = 0] = "WRITE";
    Rights[Rights["READ_ONLY"] = 1] = "READ_ONLY";
    Rights[Rights["READ_AND_WRITE"] = 2] = "READ_AND_WRITE";
})(Rights || (Rights = {}));
;
// can decide to notstart with 0 but 5 for ex:
// enum Right { WRITE = 5, READ_ONLY, READ_AND_WRITE }
// // can decide to have specific numbers affecticted to each value
// enum Rights { WRITE = 5, READ_ONLY = 50, READ_AND_WRITE = 70}
// // can also decide to affect a mix of string and numbers to each value:
// enum Rights { WRITE = 'ADMIN', READ_ONLY = 'USER', READ_AND_WRITE = 100}
// NB: enum is great when you need identifiers that are readable and that have map() potential
var person = {
    name: 'Sayann',
    age: 40,
    hobbies: ['sports', 'Coaching'],
    role: [2, 'author'],
    rights: Rights.WRITE
};
person.role.push('actor');
console.log(person.role); // never use push with an array with tuple type cause it add a value to the normally restricted lenght initial array
for (var _i = 0, _a = person.role; _i < _a.length; _i++) {
    var job = _a[_i];
    console.log(job[1]);
}
;
// if( person.rights === READ_AND_WRITE) {
//     console.log('is a supaAdmin');
// } console.log('the client is not a supaAdmin')
// ;
// es6 conditioning 
person.rights === READ_AND_WRITE ?
    console.log('is a supaAdmin') :
    console.log('the client is not a supaAdmin');
