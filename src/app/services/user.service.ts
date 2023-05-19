import { Injectable } from '@angular/core';
import { IUser, IAccount } from '../models/models';
import { USERS } from 'mock-data';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[] = USERS;
  private selectedUser: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return of(this.users);
  }

  getSelectedUser(): IUser | null {
    return this.selectedUser.getValue();
  }

  setSelectedUser(user: IUser | null): void {
    this.selectedUser.next(user);
  }

  getSelectedUserObservable(): Observable<IUser | null> {
    return this.selectedUser.asObservable();
  }

  getAllAccounts(): IAccount[] {
    // Concatenate all accounts from all users
    return this.users.reduce((accounts: IAccount[], user: IUser) => {
      if (user.accounts) {
        accounts.push(...user.accounts);
      }
      return accounts;
    }, []);
  }

  updateUserAccounts(accounts: IAccount[]): void {
    console.log('Updating user accounts:', accounts);
    const selectedUser = this.getSelectedUser();
    if (selectedUser) {
      selectedUser.accounts = accounts;
      this.selectedUser.next(selectedUser);

      // Emit a copy of the selected user to trigger an update in AccountDetailsComponent
      this.selectedUser.next({ ...selectedUser });
    }
  }
  
  updateBalance(account: IAccount, transactionAmount: number, transactionType: string): void {
    console.log('Transaction type from userService:', transactionType);
    const currentBalance = account.balance || 0;
  
    console.log('Before update - Current balance:', currentBalance);
  
    let updatedBalance: number;
  
    if (transactionType === 'Withdrawal' || transactionType === 'Transfer') {
      updatedBalance = currentBalance - transactionAmount;
      console.log('Updated balance:', updatedBalance);
      account.balance = updatedBalance;
      console.log('Updated account:', account);
    } else if (transactionType === 'Deposit') {
      updatedBalance = currentBalance + transactionAmount;
      console.log('Updated balance:', updatedBalance);
      account.balance = updatedBalance;
    }
  
    console.log('After update - Updated balance:', account.balance);
  }
  
  
  
}
