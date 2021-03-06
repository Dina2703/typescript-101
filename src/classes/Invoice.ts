import { HasFormatter } from "../interfaces/HasFormatter";

//classes
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  //format(): string; implemented in the code below, format() method returns a string
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
