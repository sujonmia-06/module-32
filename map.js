const numbers = [4, 5, 7, 10];


// function doubleOld(number) {
//     return number * 2;
// };

const doubleIt = number => number * 2;
// const output2 = [];
// for (const number of numbers) {
//     const result = doubleIt(number);
//     output2.push(result);
// };
// console.log(output2);

/////////////////////////////////////////////////////////

// const output = numbers.map(doubleIt);
// const output = output.map(number => number * 2);
const output = numbers.map(x => x * 2);
// console.log(output);

const square = numbers.map(x => x * x);
console.log(square);