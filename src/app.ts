import { Invoice } from "./classes/Invoice.js";
const anchor = document.querySelector("a")!;
// if (anchor) {
//   console.log(anchor.href);
// }
// or we can add '!' mark at the end of the querySelector
console.log(anchor.href);
//TYPE CASTING
//when you grab tag itself, TS knows what what tag it is and all of the properties and methods are available for us. But when you grab class name better specify the tag name, by adding 'as', like '... as HTMLFormElement', in order to help TS recognize the tag and get access to all the props and method of it.
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//3 modifiers:
//PUBLIC which is default one - we can change and read the value outside of the class as well as inside of the class;
// PRIVATE allows us to read and only change inside the class(inside a method).
//READONLY allows us to read it both inside the calss and outside the class.

//CLASSES
//version #1
// class Invoice {
//   readonly client: string;
//   public details: string;
//   private amount: number;

//   //initialize the values like 'c: string', then assign them to the props above, like 'this.client = c';
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }

//   //define methods of the Invoice obj.
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }

const invOne = new Invoice("Bob", "work on the park", 200);
const invTwo = new Invoice("Sam", "work on the pool", 300);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

invoices.forEach((inv) => {
  console.log(inv.client, inv.format());
});
