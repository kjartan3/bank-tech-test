const Transaction = require('../lib/transaction');

describe('Transaction', () => {
    let transaction;
    const today = new Date();

    beforeEach(() => {
        transaction = new Transaction(1000, 1000, today);
    });

    it('should have an instance of a transaction', () => {
        expect(transaction).toBeInstanceOf(Transaction);
    });

    it('should have a amount property', () => {
        expect(transaction.amount).toBeDefined();
    });
    
    it('should have the correct amount property', () => {
        expect(transaction.amount).toBe(1000);
    });
    
    it('should have a date property', () => {
        expect(transaction.date).toBeDefined();
    });
    
    it('should have a correct date property', () => {
        expect(transaction.date).toBe(today);
    });

    it('should have a balance property', () => {
      expect(transaction.balance).toBeDefined();
    });

    it('should have the correct balance property', () => {
      expect(transaction.balance).toBe(1000.00);
    });
});