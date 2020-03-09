import React from 'react'
import {Product} from '../'
//import {connect} from 'react-redux'

const ProductList = ({products, compare}) =>
<div className="row mt-3">
      {products.map(product =>
        <Product key={product.id} product={product} compare={compare} />
      )}
</div>;

export default ProductList
