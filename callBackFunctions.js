//Understand that we can pass functions as arguments in Js
//functions are objects
//this is how we pass an object into  a function

// function iReturnThings(thing){
//     return thing()
// }
// // const resultsObjects = iReturnThings({firstName: ' Bredan', lastName: 'Eich'})

// //how we pass a function into  a function
// const resultsFunction = iReturnThings(function(){ return 4 + 5})
// // console.log(resultsObjects)

// console.log(resultsFunction)



//function to return values inside a function
// function iInvokeThings(thing){
// return thing()
// }
// resultsNumber = iInvokeThings(function(){return 4+5});
// resultsStrting = iInvokeThings(function(){ return 'Hello' + 'World'});
//  console.log(resultsNumber)
//  console.log(resultsStrting)

//  //call back function

//  function main (cb){
//     console.log(cb());
//  }
 //main(function(){return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"})

 //parameter defined for outer functions are available anywhere inside the function
 //As a result, we can pass them as arguments to the callback function.

 function greet (name,cb){
    return cb(name);
 }
 output = greet('Ada Lovelace', function(name){return 'Hello there,' + name});

 console.log(output)

 function doMath(num1,num2, cb){
    return cb(num1,num2);
 }
 answer = doMath(6,8, function(num1,num2){return num1 * num2})
 console.log(answer)

