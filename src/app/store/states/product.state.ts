import { AddProduct, DelProduct } from '../actions/product.action';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from 'src/app/models/product';

export interface ProductStateModel {
    panier: Product[];
    products: Product[];
}

@State<ProductStateModel>({
    name: 'product',
    defaults: {
      panier: [],
      products: []
    }
  })

  export class ProductState {

    @Selector()
      static getPanier(state: ProductStateModel) {
          return state.panier;
      }
  
  @Action(AddProduct)
      add({getState, patchState }: StateContext<ProductStateModel>, { product }: AddProduct) {
          const state = getState();
          patchState({
              panier: [...state.panier, product]
          });
      }

  
   @Action(DelProduct)
      del ({getState, patchState }: StateContext<ProductStateModel>, { product }: DelProduct) {
          const state = getState();
          
          patchState({
              panier: [...(state.panier.slice(0,-1))]
          });
      }   
  }
  