function BankAccount(balance = 0) {
  this.balance = balance;
  this.date = new Date();
  this.statement = [];
}

BankAccount.prototype = {
  deposit: function(value) {
    this.balance += value;
    this.statement.push({ transaction: value, balance: this.balance });
    console.log(`Your deposit of ${value} has been processed successfully. Current balance: ${this.balance}`);
  },

  withdraw: function(value) {
    if (value > this.balance) {
      console.log('Insufficient funds. Withdrawal canceled.');
      return;
    }

    this.balance -= value;
    this.statement.push({ transaction: -value, balance: this.balance });
    console.log(`Your withdrawal of ${value} has been processed successfully. Current balance: ${this.balance}`);
  },

  viewStatement: function() {
    let statement = '';
    for (let i = 0; i < this.statement.length; i++) {
      const { transaction, balance } = this.statement[i];
      statement += `Transaction: ${transaction}, Balance: ${balance}\n`;
    }
    return statement;
  }
};

module.exports = BankAccount;


