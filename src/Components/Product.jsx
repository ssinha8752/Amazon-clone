import React from 'react'
import './Product.css'

function Product ({ item_name, price, source_image }){
  return (
    <div className='product'>
        <div className='product_info'>
          <h3>{item_name}</h3>
          <p>${price.toFixed(2)}</p>
          <img src={source_image} alt={item_name} className="product_image" />
          <button>Add to Basket</button>
        </div>
    </div>
  )
}

export default Product
