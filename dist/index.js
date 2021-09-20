"use strict";
let companyID = 5;
let company = "My Name is Jonathan";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let doggy = [1, "Dog", true];
let employees;
employees = [
    [1, "Jon"],
    [2, "Mae"],
    [3, "Joey"],
];
let id;
id = 22;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2["Right"] = "down";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
const user = {
    id: 1,
    name: "Alice",
};
const users = {
    id: 1,
    name: "Lacie"
};
let cid = 1;
let customerID = cid;
let cid2 = 1;
let customerID2 = cid2;
const addnumbers = (x, y) => {
    return x + y;
};
console.log(addnumbers(1, 2));
const log = (msg) => {
    console.log(msg);
};
log(`Hello ${1}`);
const employee = {
    id: 2,
    name: "Lacie"
};
const add = (x, y, z) => x + y + z;
const sub = (x, y, z) => x - y - z;
const multiply = (x, y, z) => x * y * z;
class Person {
    constructor(id, name, age, free) {
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
console.log(jill.register());
class OtherPerson {
    constructor(id, name, age, free) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.free = free;
    }
    register() {
        return `${this.name} is registered!`;
    }
}
const hailey = new OtherPerson(1, "Hailey", 20, true);
console.log(hailey);
class Employee extends OtherPerson {
    constructor(id, name, age, free, position) {
        super(id, name, age, free);
        this.position = position;
    }
}
const james = new Employee(3, "James", 27, true, "Developer");
console.log(james.register());
