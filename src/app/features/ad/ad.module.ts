import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent} from './ad.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
      AdComponent
    ],
    exports: [AdComponent],
})
export class AdModule {
}
