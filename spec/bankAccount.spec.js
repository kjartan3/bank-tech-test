const BankAccount = require('../lib/bankAccount');

describe('BankAccount', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount(1000);
  });

  it('should correctly deposit desired funds', () => {
    account.deposit(500);
    expect(account.balance).toEqual(1500);
  });

  it('should correctly withdraw funds', () => {
    account.withdraw(700);
    expect(account.balance).toEqual(300);
  });
  
  it('should correctly display the statement', () => {
    account.deposit(1000);
    account.withdraw(500);
    account.deposit(200);
    const statement = account.viewStatement();
    expect(statement).toContain('Transaction: 1000, Balance: 2000');
    expect(statement).toContain('Transaction: -500, Balance: 1500');
    expect(statement).toContain('Transaction: 200, Balance: 1700');
  });
    
  // it('should create a new instance of an account', function() {
  //   expect(bankAccount instanceof(BankAccount)).toBe(true);
  // });

});