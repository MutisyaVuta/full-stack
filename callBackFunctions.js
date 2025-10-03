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
function iInvokeThings(thing){
return thing()
}
resultsNumber = iInvokeThings(function(){return 4+5});
resultsStrting = iInvokeThings(function(){ return 'Hello' + 'World'});
 console.log(resultsNumber)
 console.log(resultsStrting)