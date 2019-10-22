import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Product } from '../models/product'


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  products : Observable<Product[]>;
  searchProduct:string;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.products = this.apiService.getProducts();
  }

}
