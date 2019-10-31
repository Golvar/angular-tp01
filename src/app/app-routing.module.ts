import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'catalogue', loadChildren: './catalogue/catalogue.module#CatalogueModule' },
  { path: 'compte', loadChildren: './compte/compte.module#CompteModule' },
  { path: 'panier', loadChildren: './panier/panier.module#PanierModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailModule' },
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
