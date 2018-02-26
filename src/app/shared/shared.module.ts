import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { ButtonModule } from './button';
import { BaseLayoutModule } from './base-layout/';
import { LoginFormModule } from './login-form';
import { InputModule } from './input';

@NgModule({
  imports: [
    HeaderModule,
    ButtonModule,
    BaseLayoutModule,
    LoginFormModule,
    InputModule
  ],
  exports: [
    HeaderModule,
    ButtonModule,
    BaseLayoutModule,
    LoginFormModule,
    InputModule
  ]
})
export class SharedModule {
}
