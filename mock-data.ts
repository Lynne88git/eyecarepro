import { IUser, IAccount, ITransaction } from "src/app/models/models";

export const USERS: IUser[] = [
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
            type: 'deposit',
            date: new Date(2022, 3, 1),
            amount: 500,
            fromAccount: undefined,
            toAccount: 1
          },
          {
            id: 2,
            type: 'withdraw',
            date: new Date(2022, 4, 15),
            amount: 200,
            fromAccount: 1,
            toAccount: undefined
          },
          {
            id: 3,
            type: 'transfer',
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
            type: 'deposit',
            date: new Date(2022, 3, 1),
            amount: 1000,
            fromAccount: undefined,
            toAccount: 1
          },
          {
            id: 2,
            type: 'transfer',
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
            type: 'deposit',
            date: new Date(2022, 3, 1),
            amount: 1500,
            fromAccount: undefined,
            toAccount: 1
          },
          {
            id: 2,
            type: 'withdraw',
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
