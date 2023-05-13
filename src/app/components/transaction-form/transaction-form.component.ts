import { Component } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { ITransaction } from 'src/app/models/models';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})

export class TransactionFormComponent {

  transactionType: string = '';
  transactionAmount: number = 0;
  transactionFromAccount: number | undefined;
  transactionToAccount: number | undefined;
  lastTransactionId: number = 0;

  constructor(private transactionService: TransactionService) {
     // Retrieve the last transaction ID from the transaction service
     this.transactionService.getTransactions().subscribe(transactions => {
      if (transactions.length > 0) {
        const lastTransaction = transactions[transactions.length - 1];
        this.lastTransactionId = lastTransaction.id;
      }
    });
  }

  createTransaction(): void {
    // Generate a unique ID for the transaction
    const newTransactionId: number = this.lastTransactionId + 1;
    this.lastTransactionId = newTransactionId;
    // Create a new transaction
    const newTransaction: ITransaction = {
      id: newTransactionId, // Generate a unique ID for the transaction
      type: this.transactionType, 
      date: new Date(), 
      amount: this.transactionAmount, 
      fromAccount: this.transactionFromAccount, 
      toAccount: this.transactionToAccount 
    };
  
   // Add the new transaction using the TransactionService
    this.transactionService.addTransaction(newTransaction);
    console.log(newTransaction);
  
    // Clear the input fields after creating the transaction
    this.transactionType = '';
    this.transactionAmount = 0;
    this.transactionFromAccount = undefined;
    this.transactionToAccount = undefined;
  }


  }

