import { set } from "zod";

function greet(firstName: string, lastName: string) {
   console.log("hello " + firstName + " "+ lastName);
}
greet('John', '1');

function sum(a : number , b:number) : number{
    return a+b;
}

console.log(sum(1,2));

function runAt(fn : () => void){
    setTimeout(fn, 1000);
}

runAt(() => console.log('hello')); 

interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // ? optional 
}

function islegalUser(user: User) {
    return user.age >= 18;
}

islegalUser(
    {firstName: 'John', 
    lastName: 'Doe', 
    age: 20
    });

function greetUser(user: User) {
    console.log("Hello " + user.firstName + " " + user.lastName);
}