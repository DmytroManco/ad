import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorService } from '../accessors';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    ValueAccessorService,
    {provide: NG_VALUE_ACCESSOR, useExisting: ValueAccessorService, multi: true}
  ]
})
export class InputComponent {
  @Input() public inputValue: string;
  @Input() public inputType: string = 'text';
  @Input() public inputName: string;
  @Input() public inputClass: string;
  @Input() public inputPlaceholder: string = '';
  @Input() public isRequired: boolean = true;
  @Input() public minVal: number;
  @Input() public maxVal: number;
  @Input() public maxLength: number;

  constructor(private inputAccessor: ValueAccessorService<string>) {
  }

  public inputHandler(): void {
    this.inputAccessor.onChanged(this.inputValue);
  }

  public blurHandler(): void {
    this.inputAccessor.onTouched(this.inputValue);
  }
}
