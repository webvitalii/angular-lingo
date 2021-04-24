import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageModule } from '@app/page/page.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => PageModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
