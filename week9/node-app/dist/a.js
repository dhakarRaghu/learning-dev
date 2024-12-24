"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(firstName, lastName) {
    console.log("hello " + firstName + " " + lastName);
}
greet('John', '1');
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
function runAt(fn) {
    setTimeout(fn, 1000);
}
runAt(() => console.log('hello'));
function islegalUser(user) {
    return user.age >= 18;
}
function greetUser(user) {
    console.log("Hello " + user.firstName + " " + user.lastName);
}
