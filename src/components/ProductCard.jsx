import React from 'react'
import '../assets/css/ProductCard.css'

function ProductCard() {
  return (
    <div className='product-card'>
        <div className='product-card-image'>
            <img src="/images/Product.png" alt="" />
        </div>
        <div className='product-card-detail'>
            <h3>Adidas Shoes</h3>
            <p>ID: 123</p>
            <div className='product-ratting'>
                <div>
                    <img src="/images/star-fill.png" alt="" />
                    <img src="/images/star-fill.png" alt="" />
                    <img src="/images/star-fill.png" alt="" />
                    <img src="/images/star-fill.png" alt="" />
                    <img src="/images/star-fill.png" alt="" />
                </div>
                <h4>50% OFF</h4>
            </div>
        </div>
    </div>
  )
}

export default ProductCard