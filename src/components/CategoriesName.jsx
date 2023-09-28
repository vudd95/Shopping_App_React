import React from 'react'
import '../assets/css/CategoriesName.css'

function CategoriesName({setCount}) {


  return (
    <div className='categoriesName'>
        <p>Bestsellers</p>
        <button onClick={setCount}>Show more...</button>
    </div>
  )
}

export default CategoriesName