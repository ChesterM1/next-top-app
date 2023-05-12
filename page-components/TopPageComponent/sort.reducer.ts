import { Sort } from '../../components/Sort/Sort.interface';
import { ProductModel } from '../../interfaces/product.interface';

export type SortAction = { type: Sort };

export interface SortReducerState {
  sort: Sort;
  products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortAction): SortReducerState => {
  switch (action.type) {
    case 'rating':
      return {
        sort: 'rating',
        products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
      };
    case 'price':
      return {
        sort: 'price',
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    default:
      throw new Error('Invalid sort type');
  }
};
