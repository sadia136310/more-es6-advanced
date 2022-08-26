/* 1. You have an array[1, 9, 17, 22].Add the all elements
   of this array and give output.Do this using for loop &
    array.reduce() method.

    */

// const numbers = [1, 9, 17, 22];
// const total = numbers.reduce((previous, current) => {
//     console.log(previous, current);
//     return previous + current
// }, 0);
// console.log(total);

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 },
];


const total = people.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
}, 0);
console.log(total);
