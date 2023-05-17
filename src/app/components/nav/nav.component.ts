import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { USERS } from 'mock-data';
import { IUser } from 'src/app/models/models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  users: IUser[] = [];
  selectedUser: IUser | null = null;
  
  isVisible = false;
  greeting = 'Hello'

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
      this.selectedUser = this.userService.getSelectedUser();
    });
  }

  selectUser(user: IUser): void {
    this.userService.setSelectedUser(user);
    //this.selectedUser = user;
  }

  toggleVisible(event: any) {
    this.isVisible = !this.isVisible;
    const userName = String(event.target.innerText);
    this.userService.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
      this.selectedUser = this.users.find(user => user.name === userName) || null;
    });
  }
}
