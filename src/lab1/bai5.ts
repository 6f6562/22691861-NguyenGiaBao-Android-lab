export class BankAccount {
  balance: number;
  constructor(balance: number) {
    this.balance = balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    this.balance -= amount;
  }
  getBalance(): number {
    return this.balance;
  }
}
