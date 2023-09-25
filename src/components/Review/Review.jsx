import './Review.css'
import { reviews } from '../../fakedata/courseData';
import quoteImage from '../../assets/images/quotation-marks.png'
const Review = () => {
    return (
        <section className="reviews" id="reviews">
           <h1 className="heading">
                Customers  <span>Reviews</span>
            </h1>
            <div className="box-container">
                {
                 reviews.map((item,index)=>
                 <div className="box" key={index}>
                 <img src={quoteImage} alt="" className='quote'/>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis optio enim atque error ipsam facere?</p>
                 <img src={item.img} alt="" className='user'/>
                 <h3>{item.name}</h3>
                 <div className='stars'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half-alt'></i>
                 </div>

              </div>
             
                
                 )
                }
            </div>
        </section>
    );
};

export default Review;