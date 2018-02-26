import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home.component';
import { LoginFormModule } from '../../shared/login-form';
import { ButtonModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    ButtonModule,
    LoginFormModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent],
})
export class HomeModule {
}
