import React from 'react'
import '../assets/css/Product_Details.css'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

function Product_Details() {
  return (
    <>
    <div>
        
        <Header></Header>
        
        <div className='product_details_sitemap'>
            <p><a>Home</a>-<a>Shoes</a>-<a>Adidas Shoes</a></p>
        </div>
        <div className='product_details_content'>
            <div className='product_details_left'>
                <div className='product_image_top'></div>
                <div className='product_image_bot'>
                    <div className='product_image_bot_1'></div>
                    <div className='product_image_bot_2'></div>
                    <div className='product_image_bot_3'></div>
                    <div className='product_image_bot_4'></div>
                    <div className='product_image_bot_5'></div>
                </div>
            </div>
            <div className='product_details_right'>
                <div className='product_name'>
                    <p>Shoes adidas utralboost 21</p>
                </div>
                <div className='product_reviews'>
                    <div className='product_reviews_stars'>
                        <img src="/images/star-fill.png" alt="" />
                        <img src="/images/star-fill.png" alt="" />
                        <img src="/images/star-fill.png" alt="" />
                        <img src="/images/star-fill.png" alt="" />
                        <img src="/images/star-fill.png" alt="" />
                    </div>
                    <p>|</p>
                    <p className='product_reviews_total'>150 Reviews</p>
                    <p>|</p>
                    <p className='product_reviews_total_sold'>3k Sold</p>
                </div>
                <div className='product_description'>
                    <p className='product_description_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi</p>
                    <hr></hr>
                    <div className='product_description_status'>
                        <p className='product_description_status_availability'>Availability: In Stock</p>
                        <p className='product_description_status_brand'>Brand: Adiddas</p>
                        <p>SKU: 83690/32</p>
                    </div>
                    <div className='product_description_price'>
                        <p>$120</p>
                        <div>
                            <h4>50% OFF</h4>
                        </div>
                    </div>
                    <div className='product_description_color'>
                        <p>Select Color:</p>
                        <div className='product_description_color_item'>
                            <div className='product_description_color_item_1'></div>
                            <div className='product_description_color_item_2'></div>
                            <div className='product_description_color_item_3'></div>
                            <div className='product_description_color_item_4'></div>
                        </div>
                    </div>
                    <div className='product_description_quanity'>
                        <p>Quanity:</p>
                        <div className='product_description_add_cart'>
                            <div className='product_description_add_cart_number'>
                                <p>-</p>
                                <p>2</p>
                                <p>+</p>
                            </div>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='product_details_bars'>
            <div className='product_details_bars_item_1'>
                <p>Description</p>  
            </div>
            <div className='product_details_bars_item_2'>
                <p>Scpecification</p>
            </div>
            <div className='product_details_bars_item_3'>
                <p>Reviews</p>
            </div>
        </div>
        <div className='product_details_customer_reviews'>
            <h3>Customer Reviews</h3>
            <div className='product_details_customer_reviews_item'>
                <div className='customer_avatar'>
                    <img src="/images/Ellipse.png" alt="" />
                </div>
                <div className='customer_details'>
                    <h5>Samantha Smith</h5>
                    <div></div>
                    <p>Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.</p>
                    <p>27 May, 2018</p>
                </div>
            </div>
            <div className='product_details_customer_reviews_item'>
                <div className='customer_avatar'>
                    <img src="/images/Ellipse.png" alt="" />
                </div>
                <div className='customer_details'>
                    <h5>Samantha Smith</h5>
                    <div></div>
                    <p>Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.</p>
                    <p>27 May, 2018</p>
                </div>
            </div>
            <div className='product_details_customer_reviews_item'>
                <div className='customer_avatar'>
                    <img src="/images/Ellipse.png" alt="" />
                </div>
                <div className='customer_details'>
                    <h5>Samantha Smith</h5>
                    <div></div>
                    <p>Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.</p>
                    <p>27 May, 2018</p>
                </div>
            </div>
            <div className='product_details_customer_reviews_item_pagination'>
                <button>a</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>b</button>
            </div>
        </div>
        <div className='product_details_write_review'>
            <h4>Write Review</h4>
            <div className='rate_star'>
                <img src="/images/star-fill.png" alt="" />
                <img src="/images/star-fill.png" alt="" />
                <img src="/images/star-fill.png" alt="" />
                <img src="/images/star-fill.png" alt="" />
                <img src="/images/star-fill.png" alt="" />
            </div>
            <textarea placeholder='Write Your Review'></textarea>
            <button>Post Your Review</button> 
        </div>
        <div className='related_products'>
            <h4>Related Product</h4>
            <div className='related_products_list'>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Product_Details