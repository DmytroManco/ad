import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { HomeRouters } from './features/home';
import { AdRouters } from './features/ad';
import { AddAdRouters } from './features/add-ad';
import { EditAd } from './features/edit-ad';

export const ROUTES: Routes = [
  ...AddAdRouters,
  ...AdRouters,
  ...EditAd,
  ...HomeRouters,
  { path: '**',    component: NoContentComponent },
];
