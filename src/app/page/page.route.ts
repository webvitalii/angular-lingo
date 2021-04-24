import { Routes } from '@angular/router';

import { HOME_ROUTE } from './home/home.route';
import { ABOUT_US_ROUTE } from './about-us/about-us.route';


export const ACCOUNT_ROUTE: Routes = [
  /* {
    path: '',
    redirectTo: 'about-us',
    pathMatch: 'full'
  }, */
  ...HOME_ROUTE,
  ...ABOUT_US_ROUTE
];
