"use strict";
//with colons we specify what type sould be the variable in the future.
// let test: string; or let test: string = 'Hello'
// test = "Hello";
// number|string to spceify one or more types, use '|'
// color?: number | string, ? tells that the props is optional
// let character = "mario";
// character = "hello";
// console.log(character);
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(15));
// let names = ["Anna", "Sam", "John"];
// names.push("Gabi");
// names[1] = "Zhan";
// console.log(names);
//when we want a mixed array
// let mixed = [1, "belt", 3, true, "top"];
// mixed.push("coat");
// mixed[0] = "first";
// let mixedUpdated = mixed.pop();
// console.log(mixed, mixedUpdated);
//object. you can't add or change a props of the initial object
// let hero1 = {
//   name: "Zemo",
//   power: "light",
//   score: 100,
// };
// hero1.name = "Banny";
// console.log(hero1);
//explicit types
// let characters: string;
// let age: number;
// let isLoggedIn: boolean;
// characters = "hello";
//array
//below we say in the future 'ninja' should be an array of strings. we're not declaring a ninja as an empty array. So we can't do: ninja.push()
// let ninja: string[]
//now we initialized the variable, and we can add or remove items from or to it.
// let ninja: string[] = [];
// ninja.push("one");
// console.log(ninja);
//union types - could be one of 2 or one of 3 types.
// let mixed: (string | number)[] = [];
// mixed.push("word");
// mixed.push(2);
// mixed.push(12);
// console.log(mixed);
//put () only before [], for a normal variable don't need to.
// let id: string | number;
// id = 12;
//object
// let ninjaOne: object;
// ninjaOne = { name: "Sam", age: 12 };
// let ninjaTwo: {
//   name: string;
//   age: number;
//   belt: string;
// };
// ninjaTwo = {
//   name: "Sony",
//   age: 13,
//   belt: "white",
// };
// console.log(ninjaOne, ninjaTwo);
//any type, with keyword 'any'
// let person: any;
// person = 12;
// console.log(person);
// person = "helllo";
// console.log(person);
// person = {
//   name: "Sam",
//   age: 12,
// };
// console.log(person);
//we can use 'any' to array
// let myArray: any[] = [];
// myArray.push("hello");
// myArray.push(12);
// myArray.push(true);
// console.log(myArray);
// //use 'any' for an object
// let myObj: { name: any; age: any };
// myObj = {
//   name: 12,
//   age: true,
// };
// console.log(myObj);
// console.log("test");
//Function basics
// let greet: Function = () => {
//   console.log("Hello");
// };
// greet();
//c?: number | string, in here ? tells the c property is optional, so we could skip it, and we won't get any error for that.
//c?: number | string when we don't pass any value it returns 'underfined'
// let add = (a: number, b: number, c?: number | string) => {
//   console.log(a + b);
// };
// //c: number | string = 2 , in this example we pass default value, so if we don't pass any value to 'c' property, it value will be '2'.
// let multiply = (a: number, b: number, c: number | string = 2) => {
//   console.log(a * b * +c);
// };
// add(2, 5);
// multiply(2, 5);
// const minus = (a: number, b: number) => {
//   return a - b;
// };
// let result = minus(10, 7);
// console.log(result);
//Type Aliases.
//Type aliases create a new name for a type. If the type name is too long you can introduce a different shorter name.
// type StringOrNum = string | number;
// type objWithName = {
//   name: string;
//   uid: StringOrNum;
// };
// const logDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// };
//Function Signatures
// let greet: Function;
//example 1
//define a signature of a function. Define how many parameters it will require, and their type, and the return type of a function. VOID means- you use the void type as the return type of functions that do not return a value.
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet("Bob", "Hi");
//example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
logDetails({
    name: "Bob",
    age: 12,
});
