import { NgModule } from '@angular/core';
import { HomeModule } from './home';
import { AdService } from './services';
import { AdModule } from './ad';
import { AddAdModule } from './add-ad';
import { EditAdModule } from './edit-ad';

@NgModule({
  imports: [
    HomeModule,
    AdModule,
    AddAdModule,
    EditAdModule
  ],
  exports: [
    HomeModule,
    AdModule,
    AddAdModule,
    EditAdModule
  ],
  providers: [AdService]
})
export class FeaturesModule {
}
