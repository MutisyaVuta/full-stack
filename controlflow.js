//Javascript if statement- excecutes a block of code only if a specified condtion is true 
//Example1
// let age = 19
// if (age > 18)
//     console.log('Congratulations,You are eligible to Drive')

//Example2
// let age = 18
// if (age >=18){
//     console.log('You are an Adult!')
// }


/* JavaScript if...else Statement
//The if...else statement provides an alternate block of code to execute if the condition is false.
//The if-else statement allows you to execute one block of code if the condition is true and another block if the condition is false. 
It's a way to handle two possible outcomes based on a condition.*/

let mark = 39;
if (mark >= 40) {
    console.log('You have passed')
}
else {
    console.log('You have failed')


// More example s
// let i = 10;
// if (i < 15)
//     console.log("i is less than 15");
// else
//     console.log("I am Not in if");

let age = 16;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


//JavaScript nested-if statement
// JavaScript lets you put an if statement inside another if statement. This is called a nested if, where one if or else is inside another.

// illustration
let i = 10;
if (i == 10){ //First if statement
    if(i < 15 ){
        console.log('i is smaller than 15 ')
        //Nested if statement
        //Will only be executed if statement above 
        //it is true
    }

    if (i < 12){
        console.log('i is smaller than 12')
    }
    else 
        console.log('i is greater than 15')

}


//JavaScript if-else-if statement
//Illustration to indicate  if else if

// let i = 20;
// if (i ==10)
//     console.log('i is 10')
// else if (i == 15)
//     console.log('i is 15')
// else if (i == 20)
//     console.log('i is 20')

// else 
//     console.log('i is not present')

// let temp = 9;

// if (temp >= 30) {
//     console.log("It's hot outside.");
// } else if (temp >= 20) {
//     console.log("It's warm outside.");
// } else if (temp >= 10) {
//     console.log("It's cool outside.");
// } else {
//     console.log("It's cold outside.");
// }

// let score = 88;

// if (score > 90) {
//   console.log("Grade: A");
// } else if (score > 80) {
//   console.log("Grade: B");
// } else if (score > 70) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: D");
// }