import React from 'react'
import Product from './Product'
import './HomePage.css'

function HomePage(){
  return (
    <div>
        <div className='home'>
            <div className='home_container'>
                <img src='https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='home_img'/>
                <div className='home_row'>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className='home_row'>
                    <Product/>
                    <Product/>
                </div>
                <div className='home_row'>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage
