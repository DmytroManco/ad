import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { InputModule } from '../input';
import { ButtonModule } from '../button';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule
  ],
  declarations: [
    LoginFormComponent
  ],
  exports: [LoginFormComponent],
})
export class LoginFormModule {
}
