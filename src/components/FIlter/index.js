import React from 'react'
import {connect} from 'react-redux'

const ProductList = ({products, productFilterByColor, productFilterByPrice}) =>
<div className="row mt-3">
<p>
Filter By Color:&nbsp;&nbsp;<select id="colorFilter" onChange={(e) => productFilterByColor(products, e.target.value)}>
                      <option value="">All</option>
                      <option value="blue">blue</option>
                      <option value="red">red</option>
                      <option value="green">green</option>
                    </select>
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>
Filter By Price:&nbsp;&nbsp;<select id="priceFilter" onChange={(e) => productFilterByPrice(products, e.target.value)}>
                    <option value="">All</option>
                    <option value="1">less than $1</option>
                    <option value="2">less than $2</option>
                    <option value="2">less than $3</option>
                  </select>
</p>
</div>;

export default connect(
  state => ({
    products: state.product.products
  })
)(ProductList)

//export default ProductList
