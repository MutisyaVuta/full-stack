// //global scope
// function myFunc (){
//     return 42;

// }
// const myVar = myFunc()*2

// console.log(myVar)

//function scope
// function myFunc2(){
//     const myVar2 = 42;
//     return myVar2*2;
// }
// myFunc2();


function myFunc(){
    const myVar = 42;
}
myVar*2

//Uncaught ReferenceError: myVar is not defined
//Variables defined with `var` do not have block scope.
if (true) {
    var myVar = 42;
}
console.log(myVar)

//However, variables defined with `let` or `const` do have block scope.
// if (true) {
//     const myVar2 = 42;
//     let myOtherVar = 100;
// }
// myVar2;
// myOtherVar;

//variables created without `let`, `const`, or `var` are always global
// if (true) {
//     firstName = 'Nicholas';
// }
// firstName;
// console.log(firstName)

//if you still create it inside a function, it will still be global
function bankAccount(){
    secretPassword = 'iLove1234';

return 'bankAccount() function invoked!';
}
bankAccount();
console.log(bankAccount())

secretPassword;
console.log(secretPassword)
