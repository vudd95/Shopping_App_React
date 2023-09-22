import React from 'react'
import "../assets/css/Header.css"

function Header() {
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
          <div className='header-search'></div>
          <img src="images/Cart-vector.png" alt="" className='cart-vector'/>
          <img src="images/UserItem.png" alt="" className='user-vector'/>
        </div>
    </div>
  )
}

export default Header