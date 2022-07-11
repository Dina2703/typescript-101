// let character = "mario";
// character = "hello";
// console.log(character);
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(15));
var names = ["Anna", "Sam", "John"];
names.push("Gabi");
names[1] = "Zhan";
console.log(names);
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
var characters;
var age;
var isLoggedIn;
characters = "hello";
//array
//below we say in the future 'ninja' should be an array of strings. we're not declaring a ninja as an empty array. So we can't do: ninja.push()
// let ninja: string[]
//now we initialized the variable, and we can add or remove items from or to it.
var ninja = [];
ninja.push("one");
console.log(ninja);
//union types - could be one of 2 or one of 3 types.
var mixed = [];
mixed.push("word");
mixed.push(2);
mixed.push(12);
console.log(mixed);
//put () only before [], for a normal variable don't need to.
var id;
id = 12;
//object
var ninjaOne;
ninjaOne = { name: "Sam", age: 12 };
var ninjaTwo;
ninjaTwo = {
    name: "Sony",
    age: 13,
    belt: "white"
};
console.log(ninjaOne, ninjaTwo);
//any type, with keyword 'any'
var person;
person = 12;
console.log(person);
person = "helllo";
console.log(person);
person = {
    name: "Sam",
    age: 12
};
console.log(person);
//we can use 'any' to array
var myArray = [];
myArray.push("hello");
myArray.push(12);
myArray.push(true);
console.log(myArray);
//use 'any' for an object
var myObj;
myObj = {
    name: 12,
    age: true
};
console.log(myObj);
