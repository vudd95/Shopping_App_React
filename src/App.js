import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Banner from './components/Banner';
import Benefit from './components/Benefit';
import CategoriesName from './components/CategoriesName';
import ProductCard from './components/ProductCard';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const addMore = () =>{
    
    setCount(count+1)
  }
  return (
   <>
   <div className='body'>
      <Header count={count}></Header>
      <div className='banner'>
        <Categories></Categories>
        <Banner ></Banner>
      </div>
      <div className='benefitMain'>
      <Benefit></Benefit>
      </div>
      <div className='categoriesNameMain'>
        <CategoriesName setCount={addMore}></CategoriesName>
      </div>
      <div className='product-card-list'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <div className='product-card-list'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <div className='product-card-list'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      
   </div>
   </>
  );
}

export default App;
