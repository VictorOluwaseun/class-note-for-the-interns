// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore // snake case
// FirstName     PascalCase
// firstname     lowercase

let firstName = 'John'
const lastName = 'Doe'
let age = 30;

// We can re-assign `let` variables. If you change use `const`, you will get an error
age = 31;
console.log(age);

// With let, we can declare a variable without assigniong a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1
}

console.log(score);

const x = 100;

// We can not re-assign a const variable 
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4] // [] square bracket <> angle bracket
// arr = [1, 2, 3, 4, 10]
arr.push(10)
console.log(arr);

const person = {
  name: 'John'
}

person.name = 'Bornvita'
person.email = 'doe@gmail.com'

// person = {name: 'Pet', email: 'mark@gmail.com'}
console.log(person);

// Declare multiple values at once
let a = 5, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);

  