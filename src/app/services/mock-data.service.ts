import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IUser, IAccount, ITransaction } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {

  createDb() {
    const users: IUser[] = [
      {
        id: 1,
        name: 'John Doe',
        accounts: [
          {
            id: 1,
            user: 'John Doe',
            balance: 5000,
            transactions: [
              {
                id: 1,
                type: 'deposit',
                date: new Date('2022-05-05'),
                amount: 2000,
                toAccount: 1,
              },
              {
                id: 2,
                type: 'withdrawal',
                date: new Date('2022-05-06'),
                amount: 1000,
                fromAccount: 1,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Jane Smith',
        accounts: [
          {
            id: 2,
            user: 'Jane Smith',
            balance: 10000,
            transactions: [
              {
                id: 3,
                type: 'deposit',
                date: new Date('2022-05-04'),
                amount: 5000,
                toAccount: 2,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: 'Bob Johnson',
        accounts: [
          {
            id: 3,
            user: 'Bob Johnson',
            balance: 7500,
            transactions: [
              {
                id: 4,
                type: 'deposit',
                date: new Date('2022-05-03'),
                amount: 2500,
                toAccount: 3,
              },
              {
                id: 5,
                type: 'transfer',
                date: new Date('2022-05-07'),
                amount: 500,
                fromAccount: 3,
                toAccount: 1,
              },
            ],
          },
        ],
      },
    ];

    return { users };
  }

  genId<T extends IUser | IAccount | ITransaction>(collection: T[], collectionName: string): number {
    return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
  }
}
