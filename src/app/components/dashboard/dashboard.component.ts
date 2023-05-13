import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser, IAccount } from 'src/app/models/models';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedUser: IUser | null = null;
  selectedUserAccounts: IAccount[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.selectedUserChanged.subscribe((user) => {
      this.selectedUser = user;
      // Update user details shown on the dashboard
      if (user) {
        this.selectedUserAccounts = user.accounts;
      }
    });

    // Set the default user
    this.userService.selectedUser = this.userService.users[0];
  }
}