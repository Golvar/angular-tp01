import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue.component'

const routes: Routes = [
  { path: '', children: [
      { path: '', component: CatalogueComponent },
    ]  
  }
];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
 ]

})
export class CatalogueRoutingModule { }
