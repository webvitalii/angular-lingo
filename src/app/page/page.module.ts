import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from '@app/page/about-us/about-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PageModule { }
