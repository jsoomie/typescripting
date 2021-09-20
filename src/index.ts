// use 'tsc index' to compile to js
// use 'tsc --watch index' to compile dyanmically

// Set up config file: 'tsc --init'
// Change to ES6 compiled code in tsconfig.json // Default is ES5

// Type is inferred once set
// Basic primivites
let id: number = 5;
let company: string = "My Name is Jonathan";
let isPublished: boolean = true;

// Any Types
let x: any = "Hello"

// Array TYPE[ARRAY] // Must conform to type
let ids: number[] = [1, 2, 3, 4, 5];

// Tuples // Types must be in the order stated
let doggy: [number, string, boolean] = [1, "Dog", true];
// Tuple Array
let employee: [number, string] [];
// Must be in the order stated once again
employee = [
  [1, "Jon"],
  [2, "Mae"],
  [3, "Joey"]
]