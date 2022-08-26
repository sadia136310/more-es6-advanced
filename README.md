# more-es6-advanced

1. What’s the difference between map, foreach, filter?
Ans: .forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined.

Example:
In the example below we would use .forEach() to iterate over an array of food and log that we would want to eat each of them.

let food = ['mango','rice','pepper','pear'];
food.forEach(function(foodItem){ console.log('I want to eat '+foodItem);
});

.map() executes the same code on every element in an array and returns a new array with the updated elements.

Example:
In the example below we would use .map to iterate over the elements of the cost array and divide each element by 10, then assign our new array containing the new cost to the variable newCost.

let cost = [100,400,300,700];
let newCost = cost.map(function(costItem){ return costItem / 10;
});
console.log(newCost);
Running this on your console;

map result

.filter():
.filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

Example:
In the example below we would use .filter to return values that are less than 200.

let cost = [100,400,50,40,700];
let smallCost = cost.filter(function(costItem){ return costItem < 200
});
console.log(smallCost);
