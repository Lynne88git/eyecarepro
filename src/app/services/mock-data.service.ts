import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IUser, IAccount, ITransaction } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {

  createDb() {
    const USERS: IUser[] = [
      {
        id: 1,
        name: 'John',
        accounts: [
          {
            id: 1,
            user: 'John',
            balance: 1000,
            transactions: [
              {
                id: 1,
                type: 'Deposit',
                date: new Date(2022, 3, 1),
                amount: 500,
                fromAccount: undefined,
                toAccount: 1
              },
              {
                id: 2,
                type: 'Withdrawal',
                date: new Date(2022, 4, 15),
                amount: 200,
                fromAccount: 1,
                toAccount: undefined
              },
              {
                id: 3,
                type: 'Transfer',
                date: new Date(2022, 5, 30),
                amount: 300,
                fromAccount: 1,
                toAccount: 2
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Mary',
        accounts: [
          {
            id: 1,
            user: 'Mary',
            balance: 2000,
            transactions: [
              {
                id: 1,
                type: 'Deposit',
                date: new Date(2022, 3, 1),
                amount: 1000,
                fromAccount: undefined,
                toAccount: 1
              },
              {
                id: 2,
                type: 'Transfer',
                date: new Date(2022, 4, 15),
                amount: 500,
                fromAccount: 1,
                toAccount: 2
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'Bob',
        accounts: [
          {
            id: 1,
            user: 'Bob',
            balance: 3000,
            transactions: [
              {
                id: 1,
                type: 'Deposit',
                date: new Date(2022, 3, 1),
                amount: 1500,
                fromAccount: undefined,
                toAccount: 1
              },
              {
                id: 2,
                type: 'Withdrawal',
                date: new Date(2022, 4, 15),
                amount: 500,
                fromAccount: 1,
                toAccount: undefined
              }
            ]
          }
        ]
      }
    ];
    

    return { USERS };
  }

  genId<T extends IUser | IAccount | ITransaction>(collection: T[], collectionName: string): number {
    return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
  }
}
