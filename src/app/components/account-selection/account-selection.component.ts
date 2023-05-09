import { Component, Input, OnInit } from '@angular/core';
import { IUser, IAccount } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-selection',
  templateUrl: './account-selection.component.html',
  styleUrls: ['./account-selection.component.scss']
})
export class AccountSelectionComponent implements OnInit {
  @Input() accounts: IAccount[] = [];
  selectedAccount: IAccount | undefined;
  selectedUser: IUser | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.selectedUserChanged.subscribe(user => {
      this.selectedUser = user;
    });
  }
}
