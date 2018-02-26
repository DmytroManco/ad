import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { HomeRouters } from './features/home';
import { AdRouters } from './features/ad';
import { AddAdRouters } from './features/add-ad';

export const ROUTES: Routes = [
  ...AddAdRouters,
  ...AdRouters,
  ...HomeRouters,
  { path: '**',    component: NoContentComponent },
];
