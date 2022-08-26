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

2. What’s the difference between filter and find?
Ans: 
The find() method is used to find all the descendant elements of the selected element. It finds the element in the DOM tree by traversing through the root to leaf.

The filter() method is used to filters all the elements and returns the element that matches and the element that do not match are removed.

3. What is the difference between for..of and for..in?
Ans: 
Difference for..in and for..of:
Both for..in and for..of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over:

for..in iterates over all enumerable property keys of an object
for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.
Example:
let arr = ['el1', 'el2', 'el3'];

arr.addedProp = 'arrProp';

// elKey are the property keys
for (let elKey in arr) {
  console.log(elKey);
}

// elValue are the property values
for (let elValue of arr) {
  console.log(elValue)
}

4. How do you empty an array?
Ans::
Suppose you have the following array and want to remove all of its elements:

let a = [1,2,3];
Code language: JavaScript (javascript)
The following shows you several methods to make an array empty.

1) Assigning it to a new empty array
This is the fastest way to empty an array:

a = [];
This code assigned the array a to a new empty array. It works perfectly if you do not have any references to the original array.

See the following example:

let b = a;
a = [];
console.log(b); // [1,2,3]
Code language: JavaScript (javascript)
In this example, first, the b variable references the array a. Then, the a is assigned to an empty array. The original array still remains unchanged.

2) Setting its length to zero
The second way to empty an array is to set its length to zero:

a.length = 0;
The length property is read/write property of an Array object. When the length property is set to zero, all elements of the array are automatically deleted.

3) Using splice() method
The third way to empty an array is to remove all of its elements using the splice() method as shown in the following example:

a.splice(0,a.length);
Code language: CSS (css)
In this solution, the splice() method removed all the elements of the a array and returned the removed elements as an array.

4) Using pop() method
The fourth way to empty an array is to remove each element of the array one by one using the while loop and pop() method:

while(a.length > 0) {
    a.pop();
}

5. Difference between class and object.?
Ans":::Class is used as a template for declaring and creating the objects.	

An object is an instance of a class.

A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class.
