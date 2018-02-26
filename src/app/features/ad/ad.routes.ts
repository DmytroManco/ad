import { Routes } from '@angular/router';
import { AdComponent } from './ad.component';

export const AdRouters: Routes = [
    {path: ':id', component: AdComponent}
];
