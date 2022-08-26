const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNum = numbers.filter(n => n > 20);
const tinyNum = numbers.filter(n => n < 20);

// console.log(tinyNum);

const odd = numbers.filter(n => n % 2 !== 0);
// console.log(odd);



const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];


// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 100);
const expensive = products.filter(product => product.price < 100);

console.log(expensive);


