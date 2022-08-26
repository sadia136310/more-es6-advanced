// 1. var,let,const
// breakup with var
const numbers = [23, 73, 20, 54, 63];
let salary = 450;
salary = 500;

// 2.default perameters
function calculateSalary(slary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// 3.template String
const elementHtml = `
<div> 
<h3>Name: </h3>
<p>Address: </p>
<p>Salary: ${calculateSalary(10000, 0, 0)} </p>
<p>Others: ${numbers[2]} </p>
</div>

`
// 4. Arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5.spread operator
const ages = [12, 15, 18, 17, 23, 26, 30];
const newAges = [...ages, 43, 82, 34];

// 6.destructuring
const { x, y, z, ...c } = { x: 45, y: 12, z: 32, name: 'Sakib Al Hasan', salary: 5347628 }

const [a, b, ...r] = [6, 36, 74, 73, 23]

