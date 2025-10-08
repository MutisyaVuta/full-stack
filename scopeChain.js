// const globalVar = 1;
// function firstFunc(){
//     const firstVar = 2;
//     return firstVar + globalVar;
// }
// firstFunc();

// console.log(firstFunc())

//all variables and functions declared in the outer scope are accessible to the inner scope via scope chain
const globalVar = 1;

function firstFunc() {
  const firstVar = 2;

  function secondFunc() {
    const secondVar = 3;

    return secondVar + firstVar + globalVar;
  }

  const resultFromSecondFunc = secondFunc();

  return resultFromSecondFunc;
}

firstFunc();  


//an outer scope cannot access the inner scope
// const fruit = "Apple";

// function first() {
//   const vegetable = "Broccoli";

//   console.log("fruit:", fruit);
//   console.log("vegetable:", vegetable);
//   console.log("legume:", legume);
// }

// function second() {
//   const legume = "Peanut";

//   console.log("fruit:", fruit);
//   console.log("legume:", legume);
//   // console.log("vegetable:", vegetable);
// }
// // first();
// second();