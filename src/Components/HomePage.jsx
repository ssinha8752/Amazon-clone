import React from 'react'
import Product from './Product'
import './HomePage.css'
import productsData from './data.json';

function HomePage(){
  return (
    <div>
        <div className='home'>
            <div className='home_container'>
                <img src='https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='home_img'/>
                <div className='home_row_container'>
                    <div className='home_row'>
                    {productsData.products.map((product, index) => (
                    <Product 
                        key={index} 
                        item_name={product.item_name} 
                        price={product.price} 
                        source_image={product.source_image} 
                    />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage
