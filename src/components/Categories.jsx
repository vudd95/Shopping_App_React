import React from 'react'
import '../assets/css/Categories.css'

function Categories() {
  return (
    <div className='categories'>
        <div className='categories-title'>
            <img src="/images/menu.png" alt="" />
            <p>Categories</p>
        </div>
        <div className='categories-list'>
            <ul>
                <li className='active'>
                    <a href="#">Computer</a>
                    <img src="/images/Vector.png"/>
                </li>
                <li>
                    <a href="#">Hand Tools</a>
                    <img src="/images/Vector.png"/>
                </li>
                <li>
                    <a href="#">Machine Tools</a>
                    <img src="/images/Vector.png"/>
                </li>
                <li>
                    <a href="#">Power Tools</a>
                    <img src="/images/Vector.png"/>
                </li>
                <li>
                    <a href="#">Storage Tools</a>
                    <img src="/images/Vector.png"/>
                </li>
                <li>
                    <a href="#">Clothes & PPE</a>
                    <img src="/images/Vector.png"/>
                </li>
                <li>
                    <a href="#">Electrical</a>
                    <img src="/images/Vector.png"/>
                </li>
                <li>
                    <a href="#">Building Tools</a>
                    <img src="/images/Vector.png"/>
                </li>
                <li>
                    <a href="#">Foods</a>
                    <img src="/images/Vector.png"/>
                </li>
                <li>
                    <a href="#">Drinks</a>
                    <img src="/images/Vector.png"/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Categories