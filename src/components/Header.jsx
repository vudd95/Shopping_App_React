import React from 'react'
import "../assets/css/Header.css"

function Header({count}) {
  return (
    <div className='header'>
        <div className='header-links'>
          <ul className='header-links-list'>
            <li className='header-links-list-item'><a href="#">About Us</a></li>
            <li className='header-links-list-item'><a href="#">Contacts</a></li>
            <li className='header-links-list-item'><a href="#">Store</a></li>
            <li className='header-links-list-item'><a href="#">Track Order</a></li>
          </ul>
        </div>
        <div className='header-contents'>
          <div className='header-logo'>
            <p>SHOP APP</p>
          </div>
          <div className='header-search'>
            <img src='/images/menu-1.png' className='header-categories-icon'></img>
            <p>Categories</p>
            <img src="/images/Line.png" alt="" />
            <input type="" placeholder='Search Item' />
            <img src="/images/SearchIcon.png" alt="" />
          </div>
          <img src="images/Cart-vector.png" alt="" className='cart-vector'/>
          <p>{count}</p>
          <img src="images/UserItem.png" alt="" className='user-vector'/>
        </div>
    </div>
  )
}

export default Header