import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StyleGuideModule } from '@app/style-guide/style-guide.module';



const routes: Routes = [
  {
    path: 'style-guide',
    loadChildren: () => StyleGuideModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
