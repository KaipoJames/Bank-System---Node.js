import { functions as Functions } from "./functions.js";

export class transaction {
  constructor(account, transactionID) {
    this.account = account;
    this.transactionID = transactionID;
  }
}

export class withdraw extends transaction {
  constructor(account, transactionID, amount) {
    super(account, transactionID);
    this.amount = amount;
  }

  withdraw() {
    let account = this.account;
    account.deleteFromBalance(this.amount);
    console.log("\nTransaction completed!");
    let accountHistory = this.account.accountHistory;
    accountHistory.push(this);
    console.log("Added to Account History!");
  }

  printTransactionInfo() {
    console.log("Transaction for Account Number " + this.account.accountNumber);
    console.log("Date Processed: " + Functions.getDateToday());
    console.log("Amount withdrawn: " + this.amount);
    console.log("TransactionID: " + this.transactionID);
  }
}

export class deposit extends transaction {
  constructor(account, transactionID, amount) {
    super(account, transactionID);
    this.amount = amount;
  }

  deposit() {
    let account = this.account;
    account.addToBalance(this.amount);
    console.log("\nTransaction completed!");
    let accountHistory = this.account.accountHistory;
    accountHistory.push(this);
    console.log("Added to Account History!");
  }

  printTransactionInfo() {
    console.log("Transaction for Account Number " + this.account.accountNumber);
    console.log("Date Processed: " + Functions.getDateToday());
    console.log("Amount Deposited: " + this.amount);
    console.log("TransactionID: " + this.transactionID);
  }
}
