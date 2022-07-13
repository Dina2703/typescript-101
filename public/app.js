// //Interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: "sam",
//   age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log(`I spend ${amount}`);
//     return amount;
//   },
// };
// console.log(me);
import { Payment } from "./classes/Payments.js";
import { Invoice } from "./classes/Invoice.js";
// const anchor = document.querySelector("a")!;
//usage of a interface
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Sami", "web work", 250);
// docTwo = new Payment("Mario", "data-analitic", 300);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// if (anchor) {
//   console.log(anchor.href);
// }
// or we can add '!' mark at the end of the querySelector
// console.log(anchor.href);
//TYPE CASTING
//when you grab tag itself, TS knows what what tag it is and all of the properties and methods are available for us. But when you grab class name better specify the tag name, by adding 'as', like '... as HTMLFormElement', in order to help TS recognize the tag and get access to all the props and method of it.
const form = document.querySelector(".new-item-form");
// console.log(form.children);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
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
// const invOne = new Invoice("Bob", "work on the park", 200);
// const invTwo = new Invoice("Sam", "work on the pool", 300);
// console.log(invOne, invTwo);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.format());
// });
