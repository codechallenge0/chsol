import * as types from '../constants/types'

const INITIAL_STATE = {
  products: [],
  filteredProducts: [],
  color: '',
  price: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state, products: action.payload.map(product =>
          ({...product, compare: false})
        ), filteredProducts: action.payload.map(product =>
          ({...product, compare: false})
        )
      };
    case types.COMPARE_PRODUCT:
      return {
        ...state, products: state.products.map(product =>
          product.id === action.product.id ?
            ({...product, compare: !product.compare}) :
            product
        )
      };
    case types.FILTER_PRODUCT_BY_COLOR:
        return {
          ...state, color: action.color, products: action.payload.map(product =>
            ({...product, compare: false})
        )
      };
    case types.FILTER_PRODUCT_BY_PRICE:
        return {
          ...state, price: action.price, products: action.payload.map(product =>
            ({...product, compare: false})
        )
      };
    default:
      return state
  }
}
