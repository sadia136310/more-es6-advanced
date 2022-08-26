const numbers = [4, 2, 7, 9, 23];
const makeHalf = numbers.map(n => n / 2);
const third = numbers.map(x => x / 3)

console.log(makeHalf);

// console.log(third);


const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman'];

const firstLetters = friends.map(f => f[5]);
// console.log(firstLetters);

const friendsLength = friends.map(friends => friends.length);
// console.log(friendsLength);


const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];

const items = products.map(p => p.name);
// console.log(items);