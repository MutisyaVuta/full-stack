// console.log(foo());
// var foo = function() {
//   return "Function Expression";
// };
// function foo() {
//   return "Function Declaration";
// }

const age1 = 30;

let isAdult;

if (age1 >= 18) {
    isAdult = true;
}
// => true

console.log(isAdult)

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
// const age =20
// const ageMessage = age >=18? 'Congratulations, you are an adult' : 'Enjoy your CHILDHOOD while it last'

// console.log(ageMessage)

//demonstration of logical operators

// const logicOpe = false && 'Anything';
// console.log(logicOpe)

//4*0 returns falsey
// const demo2 = 4*0 && 'Anything'

// console.log(demo2)

//If the first expression is truthy, && then returns whatever the second expression evaluates to:
// true && false
//=> false

// 1+1 && 'Whatever'

// => Whatever

'The truest of truthy strings' && 9*9

//=>81

//If the first expression is truthy, that value is immediately returned and the second expression is never evaluated:

// const orDemo = true || "Whatever";
// console.log(orDemo)

// 1 + 1 || "Whatever";
// // => 2

// //If the first expression is falsey, || returns whatever the second expression evaluates to:
// false || "Whatever";
// // => "Whatever"

// 1 === 2 || 8 * 8;
// // => 64

// "" || "Not " + "an " + "empty " + "string";
// // => "Not an empty string"


// Check if at least one condition is true

let age = 16;
let hasGuardian = true;

// Logical OR checks if either condition is true
if(age>=18 || hasGuardian){
    console.log('Allowed')

}
else{
    console.log('Not allowed')
}
