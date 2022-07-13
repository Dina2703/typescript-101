//classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    //format(): string; implemented in the code below, format() method returns a string
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
