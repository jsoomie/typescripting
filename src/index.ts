// use 'tsc index' to compile to js
// use 'tsc --watch index' to compile dyanmically

// Set up config file: 'tsc --init'
// Change to ES6 compiled code in tsconfig.json // Default is ES5

// Type is inferred once set
// BASIC PRIMIVITIVES /////////////////////////////////////////////////////////////////////////////////
let companyID: number = 5;
let company: string = "My Name is Jonathan";
let isPublished: boolean = true;

// ANY TYPES /////////////////////////////////////////////////////////////////////////////////////////
let x: any = "Hello";

// Array TYPE[ARRAY] // Must conform to type /////////////////////////////////////////////////////////
let ids: number[] = [1, 2, 3, 4, 5];

// TUPLES // Types must be in the order stated  /////////////////////////////////////////////////////////
let doggy: [number, string, boolean] = [1, "Dog", true];
// Tuple Array
let employees: [number, string][];
// Must be in the order stated once again
employees = [
  [1, "Jon"],
  [2, "Mae"],
  [3, "Joey"],
];

// UNION - Combining different types to one /////////////////////////////////////////////////////////////
let id: string | number;

id = 22;

// Enum //////////////////////////////////////////////////////////////////////////////////////////////////
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

// OBJECTS /////////////////////////////////////////////////////////////////////////////////////////////
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

// TYPE ASSERTION //////////////////////////////////////////////////////////////////////////////////////////////////
// Explicitly tells the compiler that we want to treat an entity as a different type
// Two ways to achieve this.
// 1.
let cid: any = 1; // Any type
let customerID = <number>cid; // Changing to numbers only

// 2.
let cid2: any = 1;
let customerID2 = cid2 as number;


// FUNCTIONS wtih return //////////////////////////////////////////////////////////////////////////////////////////
// const FUNCTION_NAME = (PARAM 1: TYPE, PARAM 2: TYPE): RETURN TYPE 
const addnumbers = (x: number, y: number): number => {
  return x + y;
}
console.log(addnumbers(1, 2));


// Functions without return
// use VOID in return type
const log = (msg: string | number): void => {
  console.log(msg)
}
log(`Hello ${1}`);

// INTERFACES //////////////////////////////////////////////////////////////////////////////////////////////////////
// Just like using types lines 67 - 75
// However, interfaces CANNOT be set to a union
interface EmployeeInterface {
  readonly id: number, // Readonly: cannot be changed down the line
  name: string,
  age?: number, // ? Means that it is optional to the variable
}

const employee: EmployeeInterface = {
  id: 2,
  name: "Lacie"
}

// Interfaces with functions
// add interface at function variable
interface MathFunctions {
  (x: number, y: number, z: number): number
}

const add: MathFunctions = (x: number, y: number, z: number): number => x + y + z;
const sub: MathFunctions = (x: number, y: number, z: number): number => x - y - z;
const multiply: MathFunctions = (x, y, z) => x * y * z;



// CLASSES /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Data modifiers = Public / Private / Protected
class Person {
  protected id: number
  name: string
  private age: number
  free: boolean
  // Private: Only accessible within the class
  // Protected: Only accessible from within the class and any extending classes

  // Contstrutors runs as soon as object is instantiated
  constructor(id: number, name: string, age: number, free: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.free = free;
    console.log("Constructor ran");
  }

  register() {
    return `${this.name} is now registered!`;
  }
}

const jill = new Person(1, "Jill", 24, true);
const jack = new Person(2, "Jack", 22, false);

console.log(jill, jack);
console.log(jill.register())


// Interfaces with classes
interface PersonInterface {
  id: number,
  name: string,
  age: number,
  free: boolean,
  register(): string
}
class OtherPerson implements PersonInterface {
  constructor(id: number, name: string, age: number, free: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.free = free;
  }

  id
  name
  age
  free

  register() {
    return `${this.name} is registered!`;
  }
}

const hailey = new OtherPerson(1, "Hailey", 20, true);
console.log(hailey);

// Extending Classes 
// Employee is a subclass of OtherPerson
class Employee extends OtherPerson {
  constructor(id: number, name: string, age: number, free: boolean, position: string) {
    super(id, name, age, free) // Used for extending from parent class
    this.position = position; // must instantiate 
  }
  position: string
}

const james = new Employee(3, "James", 27, true, "Developer");
console.log(james.register());