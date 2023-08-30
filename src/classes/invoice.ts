export class Invoice {
  readonly client: string; // can be accessed both outside and inside the class but the value can't be changed even in the class.
  private details: string; // can't access it DIRECTLY from outside the class
  public amount: number;
  // all properties are public by default, we don't need to say it

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}
