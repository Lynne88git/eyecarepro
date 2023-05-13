import { Injectable } from '@angular/core';
import { ITransaction, IUser } from '../models/models';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions: ITransaction[] = []; // Add your transaction data here

  private _selectedUser: IUser | null = null;
  private _selectedUserChanged = new BehaviorSubject<IUser | null>(this._selectedUser);

    constructor() {
    // Initialize the transactions data here
    this.transactions = [
      // Add your transaction objects here
    ];
  }
  
  getTransactions(): Observable<ITransaction[]> {
    return of(this.transactions);
  }

  addTransaction(transaction: ITransaction): void {
    // Add the transaction to the transactions array
    this.transactions.push(transaction);
  }

  get selectedUser(): IUser | null {
    return this._selectedUser;
  }

  set selectedUser(user: IUser | null) {
    this._selectedUser = user;
    this._selectedUserChanged.next(user);
  }

  get selectedUserChanged(): Observable<IUser | null> {
    return this._selectedUserChanged.asObservable();
  }
}
