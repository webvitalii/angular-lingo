import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'style-guide',
    // lazy loading of the module
    loadChildren: () => import('./style-guide/style-guide.module').then(m => m.StyleGuideModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
