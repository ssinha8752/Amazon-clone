import React from 'react'
import './Product.css'

function Product (){
  return (
    <div className='product'>
        <div className='product_info'>
            <strong> Title</strong>
            <p> $200</p>
            <div className='product_rating'>
                ****
            </div>
            <img src='https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='product_image' />
            <button>Add to Basket</button>
        </div>
    </div>
  )
}

export default Product
