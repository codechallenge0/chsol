import * as types from '../constants/types'

export const getProducts = () =>
  dispatch =>
    fetch(`products.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: response.products
        })
      })

export const compare = product => ({
    type: types.COMPARE_PRODUCT,
    product
  })

export const productFilterByColor = (products, color) =>
  dispatch =>
    dispatch({
      type: types.FILTER_PRODUCT_BY_COLOR,
      payload: color === '' ? products : products.filter(p => p.colors.includes(color)),
      color: color
  })

export const productFilterByPrice = (products, price) =>
  dispatch =>
    dispatch({
      type: types.FILTER_PRODUCT_BY_PRICE,
      payload: price === '' ? products : products.filter(p => p.price.replace("$", "") < price),
      price: price
  })