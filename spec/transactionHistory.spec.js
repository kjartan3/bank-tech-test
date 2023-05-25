const TransactionHistory = require('../lib/transactionHistory');

describe('TransactionHistory', () => {
    let transactionHistory;
    const transactions = ['transaction1', 'transaction2'];

    beforeEach(() => {
        transactionHistory = new TransactionHistory(transactions);
    });

    it('should have a defined instance of a transaction history', () => {
        expect(transactionHistory instanceof(TransactionHistory)).toBe(true);
    });

    it('should have a transaction list property', function () {
        expect(transactionHistory.transactions).toBeDefined();
    });
    
    it('should have a correct transaction list property', function () {
        expect(transactionHistory.transactions).toBe(transactions);
    });
});