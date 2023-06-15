const BankStatement = require('./bankStatement');
const TransactionHistory = require('./transactionHistory');
const Transaction = require('./transaction');

function BankAccount(balance = 0, statement = new BankStatement()) {
  this.balance = balance;
  this.statement = statement;
}

BankAccount.prototype = {
  deposit: function(amount){
    this.balance += amount;
    this.statement.addTransaction(amount, this.balance);
    console.log(`Your deposit of ${amount} has been processed successfully. Current balance: ${this.balance}`);
  },

  withdraw: function(amount){
    if (amount > this.balance) {
      console.log('Insufficient funds. Withdrawal canceled.');
      return;
    }

    this.balance -= amount;
    this.statement.addTransaction(-amount, this.balance);
    console.log(`Your withdrawal of ${amount} has been processed successfully. Current balance: ${this.balance}`);
  },

  viewStatement: function(){
    return this.statement.display();
  }
};

exports.BankAccount = BankAccount;



// const TransactionHistory = require('./transactionHistory');
// const Transaction = require('./transaction');
// const BankStatement = require('./bankStatement');

// function BankAccount(balance = 0, statement = new BankStatement) {
//   this.balance = balance;
//   this.date = new Date();
//   this.statement = [];
// }

// BankAccount.prototype = {
//   deposit: function(amount) {
//     this.balance += amount;
//     this.statement.push({ transaction: amount, balance: this.balance });
//     console.log(`Your deposit of ${amount} has been processed successfully. Current balance: ${this.balance}`);
//   },

//   withdraw: function(amount) {
//     if (amount > this.balance) {
//       console.log('Insufficient funds. Withdrawal canceled.');
//       return;
//     }

//     this.balance -= amount;
//     this.statement.push({ transaction: -amount, balance: this.balance });
//     console.log(`Your withdrawal of ${amount} has been processed successfully. Current balance: ${this.balance}`);
//   },

//   viewStatement: function() {
//     this.statement
//     .slice()
//     .reverse()
//     .forEach(function (amount, index) {
//       if (index === 0) {
//         console.log('date       ||  credit  ||  debit  ||  balance \n ');
//       }
//       console.log(amount);
//     });
//   }
// };

// module.exports = TransactionHistory;
// module.exports = Transaction;
// module.exports = BankStatement;
// module.exports = BankAccount;


