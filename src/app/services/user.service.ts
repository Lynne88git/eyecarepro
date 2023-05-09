import { Injectable } from '@angular/core';
import { IUser } from '../models/models';
import { USERS } from 'mock-data';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = USERS;
  private _selectedUser: IUser | null = null;
  private _selectedUserChanged = new BehaviorSubject<IUser | null>(this._selectedUser);

  getUsers(): Observable<IUser[]> {
    return of(this.users);
  }  

  get selectedUser(): IUser | null {
    return this._selectedUser;
  }

  set selectedUser(user: IUser | null) {
    this._selectedUser = user;
    this._selectedUserChanged.next(user);
  }

  get selectedUserChanged(): Observable<IUser | null> {
    return this._selectedUserChanged.asObservable();
  }
}