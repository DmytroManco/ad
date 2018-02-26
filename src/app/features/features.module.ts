import { NgModule } from '@angular/core';
import { HomeModule } from './home';
import { AdService } from './services';
import { AdModule } from './ad';
import { AddAdModule } from './add-ad';

@NgModule({
  imports: [
    HomeModule,
    AdModule,
    AddAdModule
  ],
  exports: [
    HomeModule,
    AdModule,
    AddAdModule
  ],
  providers: [AdService]
})
export class FeaturesModule {
}
