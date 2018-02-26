import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import { HeaderModule } from '../header';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  declarations: [
    BaseLayoutComponent
  ],
  exports: [BaseLayoutComponent],
})
export class BaseLayoutModule {
}
