import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './layout/main/main.component';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
