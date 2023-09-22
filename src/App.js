import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Banner from './components/Banner';
import Benefit from './components/Benefit';
import CategoriesName from './components/CategoriesName';
import ProductCard from './components/ProductCard';

function App() {
  return (
   <>
   <div className='body'>
      <Header></Header>
      <div className='banner'>
        <Categories></Categories>
        <Banner></Banner>
      </div>
      <div className='benefitMain'>
      <Benefit></Benefit>
      </div>
      <div className='categoriesNameMain'>
        <CategoriesName></CategoriesName>
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
