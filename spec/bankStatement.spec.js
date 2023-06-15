const BankStatement = require('../lib/bankStatement');
const TransactionHistory = require('../lib/transactionHistory');
const Transaction = require('../lib/transaction');


describe('BankStatement', function() {
  let bankStatement;
  let transactionHistory;

  beforeEach(function() {
    transactionHistory = new TransactionHistory();
    bankStatement = new BankStatement(transactionHistory);
  });

  it('should be a defined object', function() {
    expect(bankStatement instanceof(BankStatement)).toBe(true);
  });

  it('should have a history property', function() {
    expect(bankStatement.history).toBeDefined();
  });

  it('should have the correct transactions property', function() {
    expect(bankStatement.history).toBe(transactionHistory);
  });

  describe('#addTransaction', function() {

    beforeEach(function() {
      spyOn(transactionHistory, 'addTransaction');
    });

    it('should add transaction to the history', function() {
      bankStatement.addTransaction(1000.00);
      expect(bankStatement.history.addTransaction).toHaveBeenCalled();
    });
  });

  describe('#display', function() {
    beforeEach(function() {
      bankStatement.addTransaction(1000.00, 1000.00);
    });

    it('should display the headers', function() {
      expect(bankStatement.display()).toContain('date       ||  credit  ||  debit  ||  balance');
    });

    it('should display the date in the correct format', function() {
      expect(bankStatement.display()).toContain('25/05/2023');
    });

    it('should display the correct transaction amount', function() {
      expect(bankStatement.display()).toContain('1000.00');
    });
  });
});


// describe('BankStatement', () => {
//   let BankStatement;
//   let transactionHistory;
//   beforeEach(() => {
//       transactionHistory = {
//           addTransaction: jest.spyOn(),
//       };
//       bankStatement = new BankStatement(transactionHistory);
//   });
  
//   it('should have an intance of a bank statement', () => {
//       expect(bankStatement instanceof BankStatement).toBe(true);
//   });
  
//   it('should have a history property', () => {
//       expect(bankStatement.history).toBeDefined();
//   });
  
//   it('should have the correct transactions property', () => {
//     expect(bankStatement.history).toBe(transactionHistory);
//   });

//   describe('#addTransaction', () => {
//     it('should add a transaction to the history', () => {
//       bankStatement.addTransaction(1000.00);
//       expect(transactionHistory.addTransaction).toHaveBeenCalledWith(1000.00);
//     });
//   });

//   describe('#display', () => {
//     beforeEach(() => {
//       bankStatement.addTransaction(1000.00, 1000.00);
//     });

//     it('should display the headers', () => {
//       expect(bankStatement.display()).toContain(
//         'date       ||  credit  ||  debit  ||  balance  ' 
//       );
//     });

//     it('should display the date in the correct format', () => {
//       expect(bankStatement.display()).toContain('25/05/2023');
//     });

//     it('should display the correct transaction amount', () => {
//       expect(bankStatement.display()).toContain('1000.00');
//     });
//   });
// });