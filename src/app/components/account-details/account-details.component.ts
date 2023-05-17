import { Component, Input } from '@angular/core';
import { IAccount } from 'src/app/models/models';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  @Input() selectedAccount: IAccount | null = null;

  constructor() {
  }

  ngOnInit(): void {
    console.log('Selected Account:', this.selectedAccount);
  }
}






