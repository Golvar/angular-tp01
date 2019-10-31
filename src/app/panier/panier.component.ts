import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { DelProduct } from '../store/actions/product.action';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  catalogue: Observable<Product[]>

  constructor(private store : Store) {
    this.catalogue = this.store.select(state => state.product.panier);
   }

  ngOnInit() {
  }

  onClick (product) {
    this.deletProduct (product);
  }

  deletProduct(product) { this.store.dispatch(new DelProduct(product)); }
}

