//version #2 short version
export class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  //define methods of the Invoice obj.
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
