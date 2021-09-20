// use 'tsc index' to compile to js
// use 'tsc --watch index' to compile dyanmically

// Set up config file: 'tsc --init'
// Change to ES6 compiled code in tsconfig.json // Default is ES5

// Type is inferred once set
// Basic primivites
let companyID: number = 5;
let company: string = "My Name is Jonathan";
let isPublished: boolean = true;

// Any Types
let x: any = "Hello";

// Array TYPE[ARRAY] // Must conform to type
let ids: number[] = [1, 2, 3, 4, 5];

// Tuples // Types must be in the order stated
let doggy: [number, string, boolean] = [1, "Dog", true];
// Tuple Array
let employee: [number, string][];
// Must be in the order stated once again
employee = [
  [1, "Jon"],
  [2, "Mae"],
  [3, "Joey"],
];

// Union
let id: string | number;

id = 22;

// Enum
// By default, each value starts at 0 and enumerates from there
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction1);

// When given an explicit number, will enumerate from the given number.
// enumerates from beginning until it hits another given item.
enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right = "down",
}
console.log(Direction2);

// Objects
// Messy way
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Alice",
};

// Cleaner objects
// Create type first, then just set the variable to that set types
type Users = {
  id: number;
  name: string;
};

const users: Users = {
  id: 1,
  name: "Lacie"
}
