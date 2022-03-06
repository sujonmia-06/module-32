const numbers = [5, 13, 3, 45, 29, 99, 1];

const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(bigNumbers);
// console.log(smallNumbers);

const products = [
    { name: 'bottle', price: 100, color: 'green' },
    { name: 'mobile', price: 10000, color: 'midnightblue' },
    { name: 'watch', price: 2000, color: 'white' },
    { name: 'mouse', price: 400, color: 'black' },
    { name: 'keyboard', price: 500, color: 'black' },
];

const expensive = products.filter(product => product.price > 1000);
console.log(expensive);

const midnightblue = products.filter(product => product.color == 'midnightblue');
console.log(midnightblue);

const black = products.filter(product => product.color == 'black');
console.log(black);

const blue = products.filter(product => product.color == 'blue');
console.log(blue);

const whiteItem = products.find((product) => product.color == 'white');
console.log(whiteItem);

const yellowItem = products.find((product) => product.color == 'yellow');
console.log(yellowItem);