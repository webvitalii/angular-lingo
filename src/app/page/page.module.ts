import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PAGE_ROUTE } from './page.route';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    RouterModule.forChild(PAGE_ROUTE),
    SharedModule
  ]
})
export class PageModule { }
