//for loops
//Iterating through an array using an index

// const fruits = ['apple', 'banana', 'cherry'];
// for(let i=0; i<fruits.length; i++) {
//     console.log(`Fruit at index ${[i]} : ${fruits[i]}`); 
// }

// //counting up
// for(let i=1; i<=10; i++) {
//     console.log(`Count up: ${i}`);
// }

// counting down and skipping by 2
for(let i=10; i>=0; i -=2) {
    console.log(`Count down by 2: ${i}`);
}

// count up even numbers only
for(let i=0; i<=20; i +=2) {
    console.log(`Even number: ${i}`);
}

//count down odd numbers only
// for(let i=19; i>=1; i -=2) {
//     console.log(`Odd number: ${i}`);
// }


//while loops
// let count = 1;
// while(count <= 10) {
//     console.log(`While loop count: ${count}`);
//     count++;
// }

// let energy = 10;
// while(energy > 0) {
//     console.log(`Current Energy level: ${energy}`);
//     energy --;
// }

//do...while loops
//ensure the loop runs at least once
//example:
let score = 0;
do {
    console.log(`Current Score: ${score}`);
    score += 10;
} while(score < 50);    


//random number guessing game
// let guess = 0; 
// const secret = 42;

// do {
//   guess = Math.floor(Math.random() * 100);
//   console.log(`Trying guess: ${guess}`);
// } while (guess !== secret);

// console.log(`The secret number was found! (${secret})`);

//loop control statements
//break statement
// for(let i=1; i<=10; i++) {
//     if(i === 6) {
//         // console.log('Breaking the loop at 6');
//         break;
//     }
//     console.log(`Current number: ${i}`);
// }

//continue statement
// for(let i=1; i<=10; i++) {
//     if(i % 2 === 0) {
//         // console.log('Skipping even number');
//         continue;
//     }
//     console.log(`Odd number: ${i}`);
// }