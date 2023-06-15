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
  
  it('should return a string', function() {
    expect(typeof bankAccount.viewStatement()).toBe('string');
  });
    
  // it('should create a new instance of an account', function() {
  //   expect(bankAccount instanceof(BankAccount)).toBe(true);
  // });

});