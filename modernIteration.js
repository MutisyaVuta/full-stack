// // //for...of
// const names = ['Alice', 'Bob', 'Charlie'];
// for (const item of names) {
//     // console.log(i);
//     console.log(`Hello, ${item}!`);     
// }

//for ...of limitations with arrays
// const colours = ['red', 'green', 'blue'];
// for (const [index, color] of colours.entries()) {
//     console.log(`Colour at index ${index} is: ${color}`);
// }

//string iteration
// const greeting = "Hello!";
// for (const char of greeting) {
//     // console.log(c);
//     console.log(char);
// }

// const myName = 'Nicholas Mutisya';
// for(const char of myName){
//     console.log(char);
// }

// for...in
const address = {
    street1: '6143 Ruiru',
    street2: 'P.O. Box 12345',
    city: 'Nairobi',
    state: 'Kenya',
    zip: '00100'
}
for (const key in address) {
    if(address.hasOwnProperty(key))
        console.log(`${key}: ${address[key]}`);
    // console.log(address[key])
}

const user = { name: "Jen", role: "Developer" };

for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`${key}: ${user[key]}`);
  }
}

