//classes
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //format(): string; implemented in the code below, format() method returns a string
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
