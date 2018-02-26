import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  public users: User[] = [];
  public userName: string;
  public user: User;

  private subject: Subject<User> = new Subject<User>();

  constructor() {
  }

  public checkUsersExist(): void {
    if (!localStorage.getItem('users')) {
      this.initializeUsers();
    }

    this.users = JSON.parse(localStorage.getItem('users'));
  }

  public addNewUser(user: User): void {
    this.users.push(user);
    this.user = user;
    this.subject.next(user);
    this.setUsers(this.users);
  }

  public logout(): void {
    this.user = null;
    this.subject.next(null);
  }

  public setUser(user: User = null): void {
    this.user = user;
    this.userName = user.name;
    this.subject.next(user);
  }

  public getUser(): Observable<User> {
    return this.subject.asObservable();
  }

  public getUserName(): string {
    return this.userName;
  }

  private initializeUsers(): void {
    this.users = [this.makeUser('Test', '123')];
    this.setUsers(this.users);
  }

  private makeUser(userName: string, userPassword: string): User {
    return {
      name: userName,
      password: userPassword
    };
  }

  private setUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }
}
