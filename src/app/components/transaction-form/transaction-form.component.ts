import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { ITransaction, IUser, IAccount } from 'src/app/models/models';
import { USERS } from 'mock-data';
import { UserService } from 'src/app/services/user.service';
import { AccountDetailsComponent } from '../account-details/account-details.component';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],
  entryComponents: [AccountDetailsComponent],
})
export class TransactionFormComponent implements OnInit {
  transactionType: string = '';
  transactionAmount: number = 0;
  transactionFromAccountId: number | undefined = -1;
  transactionToAccount: number | undefined;
  lastTransactionId: number = 0;
  selectedUser: IUser | null = null;
  selectedAccount: IAccount | null = null;
  existingUsers: IUser[] = USERS;
  ownAccountOnly: boolean = false;


  constructor(private transactionService: TransactionService, private userService: UserService) {}

  ngOnInit(): void {
    // Subscribe to selectedUserChanged in UserService
    this.userService.getSelectedUserObservable().subscribe((user) => {
      if (user) {
        this.selectedUser = user;
        this.updateSelectedAccount(); // Update the selected account when the user changes
      }
    });

    // Retrieve the last transaction ID from the transaction service
    this.transactionService.getTransactions().subscribe((transactions) => {
      if (transactions.length > 0) {
        const lastTransaction = transactions[transactions.length - 1];
        this.lastTransactionId = lastTransaction.id;
      }
    });
  }

  createTransaction(): void {
    // Retrieve the selected user
    const selectedUser = this.selectedUser;
  
    if (!selectedUser) {
      console.log('No selected user');
      return;
    }
  
    // Check if the selectedUser has accounts
    if (!selectedUser.accounts || selectedUser.accounts.length === 0) {
      console.log('Selected user does not have accounts');
      return;
    }
  
    // Find the fromAccount using the transactionFromAccountId
    const fromAccount = selectedUser.accounts.find((account) => account.id === this.transactionFromAccountId);
  
    if (!fromAccount) {
      console.log('Invalid selected account');
      return;
    }
  
    // Get the current balance
    const currentBalance = fromAccount.balance || 0;
    console.log('Current balance:', currentBalance);
  
    // Check if the transaction amount is valid
    if (this.transactionAmount <= 0 || this.transactionAmount > currentBalance) {
      console.log('Invalid transaction amount');
      return;
    }
  
    // Generate a unique ID for the transaction
    const newTransactionId: number = this.lastTransactionId + 1;
    this.lastTransactionId = newTransactionId;
  
    // Create a new transaction
    const newTransaction: ITransaction = {
      id: newTransactionId,
      type: this.transactionType,
      date: new Date(),
      amount: this.transactionAmount,
      fromAccount: fromAccount.id,
      toAccount: this.transactionToAccount,
    };
    console.log('Transaction type in createTransaction:', this.transactionType);

    if (this.transactionType === 'Deposit') {
      this.ownAccountOnly = true;
    
      // Retrieve the selected user's own account
    const ownAccount = selectedUser.accounts.find((account) => account.user === selectedUser.name);
    if (ownAccount) {
      this.transactionToAccount = ownAccount.id;
    } else {
      console.log('Selected user does not have an own account');
      return;
    }
  } else {
    this.ownAccountOnly = false;
  }

  // Check if the transaction type is "Deposit"
if (this.transactionType === 'Deposit') {
  this.ownAccountOnly = true;
} else {
  this.ownAccountOnly = false;
}
    
    // Update the balance using UserService's updateBalance function
    this.userService.updateBalance(fromAccount, this.transactionAmount, this.transactionType);
  
    // Update the selected user's accounts in the UserService
    this.userService.updateUserAccounts([...selectedUser.accounts]);
    console.log('Updated user accounts:', this.userService.getSelectedUser());

    // Add the new transaction using the TransactionService
    this.transactionService.addTransaction(newTransaction);
  
    // Clear the input fields after creating the transaction
    this.transactionType = '';
    this.transactionAmount = 0;
    this.transactionFromAccountId = undefined;
    this.transactionToAccount = undefined;
  }
  
  getRecipientAccountOptions(): IAccount[] {
    if (this.ownAccountOnly) {
      // Return only the user's own account
      return [this.selectedUser?.accounts.find((account) => account.id === this.transactionToAccount)!].filter(Boolean);
    } else {
      // Return all available recipient accounts
      return this.userService.getAllAccounts()?.filter(
        (account: IAccount) => account.id !== this.transactionFromAccountId
      ) ?? [];
    }
  }
  
  updateSelectedAccount(): void {
    if (!this.selectedUser || !this.transactionFromAccountId) {
      this.selectedAccount = null;
      return;
    }

    const selectedAccount = this.selectedUser.accounts.find(
      (account) => account.id === this.transactionFromAccountId
    );

    if (selectedAccount) {
      this.selectedAccount = selectedAccount;
    } else {
      this.selectedAccount = null;
    }
  }
}
