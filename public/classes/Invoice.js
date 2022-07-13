//version #2 short version
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //define methods of the Invoice obj.
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
