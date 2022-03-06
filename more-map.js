const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Tom'];

const fLength = friends.map(friend => friend.length);
// console.log(fLength);

const products = [
    { name: 'bottle', price: 100, color: 'black' },
    { name: 'mobile', price: 10000, color: 'midnightblue' },
    { name: 'watch', price: 2000, color: 'black' },
    { name: 'mouse', price: 400, color: 'black' },
    { name: 'keyboard', price: 500, color: 'black' },
];

const productNames = products.map(product => product.name);
const productPrice = products.map(product => product.price);
const productColor = products.map(product => product.color);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productNames);
// console.log(productPrice);
// console.log(productColor);
