import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../core/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  public user: User = null;

  constructor(private loginService: LoginService,
              private fb: FormBuilder) {
  }

  public ngOnInit() {
    this.loginForm = this.makeFormGroup();

    if (this.loginService.user) {
      this.user = this.loginService.user;
    }

  }

  public login(login: User): void {
    if (!this.isUserExist(this.loginService.users, login)) {
      this.loginService.addNewUser(login);
      this.user = login;
      this.loginForm.reset();
      return;
    }

    const currentUser = this.loginService.users.find((user) => user.name === login.name);

    if (currentUser.password !== login.password) {
      this.loginForm.controls['password'].setErrors({error: 'invalid password'});
      return;
    }

    this.loginService.setUser(currentUser);
    this.user = currentUser;
    this.loginForm.reset();
  }

  public logout(): void {
    this.user = null;
    this.loginService.logout();
  }

  private makeFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private isUserExist(users: User[], login: User): boolean {
    return Boolean(users.find((user) => user.name === login.name));
  }
}
