const BankAccount = require('../lib/transaction');

describe('Transaction', () => {
    let transaction;

    beforeEach(() => {
        transaction = new transaction(1000, 1000, today);
    });

    it('should have an instance of a transaction', () => {
        expect(transaction).toBeInstanceOf(Transaction);
    });

    it('should have a value property', () => {
        expect(transaction.value).toBeDefined();
    });
    
    it('should have the correct value property', () => {
        expect(transaction.value).toBe(1000);
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