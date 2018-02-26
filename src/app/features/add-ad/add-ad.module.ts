import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdComponent } from './add-ad.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../../shared/input';
import { ButtonModule } from '../../shared/button';

@NgModule({
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddAdComponent
  ],
  exports: [AddAdComponent],
})
export class AddAdModule {
}
