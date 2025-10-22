// //for...of
// const names = ['Alice', 'Bob', 'Charlie'];
// for (const item of names) {
//     // console.log(i);
//     console.log(`Hello, ${item}!`);     
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

//for...in
const address = {
    street1: '6143 Ruiru',
    street2: 'P.O. Box 12345',
    city: 'Nairobi',
    state: 'Kenya',
    zip: '00100'
}
for (const key in address) {
    console.log(address[key])
}