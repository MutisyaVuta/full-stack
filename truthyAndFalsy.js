// console.log(foo());
// var foo = function() {
//   return "Function Expression";
// };
// function foo() {
//   return "Function Declaration";
// }

// const age = 30;

// let isAdult;

// if (age >= 18) {
//     isAdult = true;
// }
// // => true

// console.log(isAdult)

//Returns undefined
// const age = 14;

// let isAdult;

// if (age >= 18) {
//     isAdult = true;
// }

// // isAdult;
// // => undefined
// console.log(isAdult)

//Returns Falsy
// const age = 14;

// let isAdult;

// if (age >= 18) {
//     isAdult = true;
// } else {
//     isAdult = false;
// }
// // => false

// console.log(isAdult);
// // => false

//ternary expression
// const age =26;
// let isAdult;

// age >= 18? (isAdult = true) : (isAdult =false);

// console.log(isAdult) //true

//Just write is this was if the return value is boolean
// const age = 6;
// const isAdult = age >= 18;

// console.log(isAdult)
//=> false

//Better use of ternary operator
const age =17
const ageMessage = age >=18? 'Congratulations, you are an adult' : 'Enjoy your CHILDHOOD while it last'

console.log(ageMessage)