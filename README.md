# Bank Tech Test

This is a JavaScript project that simulates a simple bank account. It allows users to perform basic banking operations such as depositing money, withdrawing money, and viewing their account statement. The project is implemented using JavaScript, Node.js, and JSON.

## Installation

1. Clone the repository to your local machine.
2. Make sure you have Node.js installed.
3. Open a terminal and navigate to the project's root directory.
4. Install the project dependencies by running the following command:
   ```
   npm install
   ```

## Usage

To use the bank account functionality, follow these steps:

1. Open a terminal and navigate to the `lib` directory of the project.

2. Launch the Node.js REPL (Read-Eval-Print Loop) by running the following command:
   ```
   node -i -e "$(< bankAccount.js)"
   ```

3. Once inside the Node.js REPL, you can create a new bank account by executing the following command:
   ```
   acc = new BankAccount;
   ```

4. You can now interact with the bank account by executing various methods:

   - To deposit money into the account, use the `deposit(amount)` method, where `amount` is the desired deposit amount. For example:
     ```
     acc.deposit(1200);
     ```

   - To withdraw money from the account, use the `withdraw(amount)` method, where `amount` is the desired withdrawal amount. For example:
     ```
     acc.withdraw(400);
     ```

   - To view the account statement, use the `viewStatement()` method. This will display a formatted statement with transaction details. For example:
     ```
     acc.viewStatement();
     ```

5. The console will log the results of your actions, such as successful deposits, withdrawals, and the current account balance.

## Project Structure

The project consists of the following JavaScript files:

- `bankAccount.js`: This file defines the `BankAccount` constructor function and its associated methods for depositing, withdrawing, and viewing the account statement.

- `bankStatement.js`: This file defines the `BankStatement` class, which handles the formatting and display of the account statement. It uses the `TransactionHistory` class to store and manage transaction data.

- `transaction.js`: This file defines the `Transaction` class, which represents an individual transaction and holds information such as the amount, balance, and date of the transaction.

- `transactionHistory.js`: This file defines the `TransactionHistory` class, which manages a collection of transactions and provides methods to add new transactions.

## Contributing

Contributions to the project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
