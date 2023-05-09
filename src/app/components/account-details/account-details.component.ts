import { Component, Input } from '@angular/core';
import { IAccount } from 'src/app/models/models';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  @Input() selectedAccount: IAccount | undefined;

  constructor() {
  }

  ngOnInit(): void {
  
  }
}






