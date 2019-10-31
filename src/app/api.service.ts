import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Product } from './models/product';
import { environment } from '../environments/environment';

import { tap,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
    public getProducts () : Observable<Product[]> {
        return this.http.get<Product[]>(environment.backendProduct);
    }

    getProduct () : Observable<Product[]> {
      return this.http.get<Product[]> ( environment.backendProduct).pipe (tap((value) => console.log(value)) );
    }
}

