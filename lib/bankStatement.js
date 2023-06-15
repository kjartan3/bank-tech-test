class BankStatement {
  constructor(history = new TransactionHistory()) {
    this.history = history;
  }

  addTransaction(amount, balance) {
    this.history.addTransaction(amount, balance);
  }

  static formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  display() {
    const HEADERS = 'date       ||  credit  ||  debit  ||  balance';
    let display = HEADERS + '\n';
    this.history.transactions.forEach(function(element) {
      display += BankStatement.formatDate(element.date);
      display += '  || ';
      if (element.amount > 0) {
        display += element.amount.toFixed(2);
        display += ' || ';
        display += '      ';
        display += ' || ';
      }
      if (element.amount < 0) {
        display += '       ';
        display += ' || ';
        display += Math.abs(element.amount).toFixed(2);
        display += ' || ';
      }
      display += element.current_balance.toFixed(2);
      display += '\n';
    });
    return display;
  }
}

module.exports = BankStatement;



