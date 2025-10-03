// const add = (parameter1,parameter2) => parameter1 + parameter2

// add(2,3)

// const results = add(2,3)

// console.log(results)

//situations where arrow functions are used 
//used in Js iterator methods- An iterator is a method that allows you to deal with a set of data on at a time.
const nums = [1,2,3];

const squares = nums.map(x => x**2)

console.log(squares);

console.log(nums);
