import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        ButtonComponent
    ],
    exports: [ButtonComponent],
})
export class ButtonModule {
}
