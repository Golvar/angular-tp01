import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';

const routes: Routes = [
  { path: 'catalogue', loadChildren: './catalogue/catalogue.module#CatalogueModule' },
  { path: 'compte',      component: CompteComponent },
  { path: '',
    redirectTo: '/catalogue',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
