export interface IUser {
    id: number;
    name: string;
    accounts: IAccount[];
  }

export interface IAccount {
    id: number;
    user: string;
    balance: number;
    transactions: ITransaction[];
  }
  
  export interface ITransaction {
    id: number;
    type: string;
    date: Date;
    amount: number;
    fromAccount?: number;
    toAccount?: number;
  }
  