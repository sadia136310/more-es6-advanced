// const numbers = [2, 8, 4, 6, 3];


function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = number * 2
        output.push(doubled);
    }
    return output;
}

// console.log(getDoubles(numbers));



/* 
purpose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/
const numbers = [2, 8, 4, 6, 3];
const array = numbers.map(num => num * 2);
console.log(array);

const makeDoubleArray = numbers.map(x => x * 2);
console.log(makeDoubleArray);

const makeTrippleArray = [2, 5, 4, 9, 20].map(x => x * 3);
console.log(makeTrippleArray);