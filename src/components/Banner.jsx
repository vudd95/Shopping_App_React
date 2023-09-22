import React from 'react'
import '../assets/css/Banner.css'

function Banner() {
  return (
    <div >
        <div className='banner-top'>
            <img src="/images/Carousel.png" alt="" />
        </div>
        <div className='banner-bottom'>
            <img src="/images/banner-1.png" alt="" className='carousel-bottom-1 banner-1' />
            <img src="/images/banner-1.png" alt="" className='carousel-bottom-1 banner-2' />
            <img src="/images/banner-1.png" alt="" className='carousel-bottom-1 banner-3' />
        </div>
    </div>
  )
}

export default Banner