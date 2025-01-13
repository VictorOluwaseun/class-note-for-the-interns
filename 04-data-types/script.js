/**
 * Primitive data types
 *  - immutable and stored directly in the stack memory
 *  - String: represents textual data - 'Hello', 'World'
 *    -Examples:
 *      Usernames, passwords, and email addresses
 *      Storing messages or logs in a chat application
 *      Formatting and displaying content in web pages
 *  
 * - Number represents numberic values both integers and floating-point. 42, 3.14
 * useage: Calculations, counters, measurements.
 * 
 * - Boolean represent logical values, either true or false.
 * Examples: true, false
 * Usage: Conditional statements, toggles
 * 
 * - Null represents an intentional absence of a value.
 * example: let x = null;
 * Usage: Resetting, clearing variables. It represents an entity
 * 
 * - Undefined: Represents a variable that has been declared but not assigned a value
 *  Example: let y;
 * 
 * Symbol: Represents a unique identifier
 * Example: Symbol('id')
 * Usage: Creating unique keys for objects
 * 
 * BigInt: Represents large integers beyond the Number type's safe range.
 * Example: 4389483948934737477n
 * Usage: Cryptography, large-scale compulations
 * 
 * Reference Data Types
 *  - These are complex data structures. They are mutable (can be changed) and stored as references in the heap memory
 *  - Object: A collection of key-value pairs
 *  - Array: An ordered collection of elements
 *  - Function: A block of reusable code
 *  - Date: Used for handling dates and times.
 *  - RegExp: Represents a regular expression for pattern matching
 */

// String 
const firstName = 'Sarah'

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id')

//BigInt
const n = 4893849384938493484983498498394983483489n + 2n;


//Reference Types

//               0    1   2  3   4
const numbers = [20, 12, 50, 90, 10] // Array
const firstEl = numbers[0]
const a = numbers[3]

const strArr = ["Precious", "John", "Joy"]

numbers.length // To length of array

const person = {
  name: 'John',
  username: 'johnbonvita'
}

const newCar = {
  model: "BMW",
  manufacturer: "BMW",
  year: 2025
}

class Person {

  constructor(name, username) {
    this.name = name,
    this.username = username    
  }
}

const newPerson = new Person("John", "johnbonvita") // instance
const personA = new Person("John", "johnbonvita") // instance
const personB = new Person("Matthew", "matt") // another instance

function sayHello() {
  console.log("Hello");
}

function sayHello(name) {
  console.log("Hello", name);
}

sayHello(newPerson.username)

console.log();