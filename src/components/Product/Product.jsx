
import './Product.css'
import {products} from '../../fakedata/courseData'
const Product = () => {
    return (
        <section className="products" id="products">
            <h1 className="heading">
                Our <span>products</span>
            </h1>
            <div className="box-container">
            { products.map((item,index)=>
              <div className='box' key={index}>
                 <div className='icons'>
                  <a href="" className='fas fa-shopping-cart'></a>
                  <a href="" className='fas fa-heart'></a>
                  <a href="" className='fas fa-eye'></a>
                 </div>
                 <div className='image'>
                 <img src={item.img} alt="" />
                 </div>
                 <div className="content">
                    <h3>{item.title}</h3>
                    <div className='stars'>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star-half-alt'></i>
                    </div>
                    <div className="price">
                        {item.price} <span>{item.oldPrice}</span>
                    </div>
                 </div>
              </div>
                
                
               )}
            </div>
        </section>
    );
};

export default Product;