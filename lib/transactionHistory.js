class TransactionHistory {
  constructor() {
    this.transactions = [];
  }

  addTransaction(amount, balance) {
    const transaction = {
      date: new Date(),
      amount: amount,
      current_balance: balance
    };
    this.transactions.push(transaction);
  }
}

  
module.exports = TransactionHistory;