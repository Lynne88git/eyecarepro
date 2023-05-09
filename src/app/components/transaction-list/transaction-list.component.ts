import { Component, Input } from '@angular/core';
import { ITransaction } from '../../models/models';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {
  @Input() transactions: ITransaction[];

  constructor() { 
    this.transactions = [];
  }
}
