import { HasFormatter } from "../interfaces/HasFormatter";

//classes
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  //format(): string; implemented in the code below, format() method returns a string
  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
