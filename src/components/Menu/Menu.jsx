import './Menu.css'
import { menu} from '../../fakedata/courseData';
const Menu = () => {
    return (
        <div>
            <section className="menu" id="menu">
               <h1 className='text-center heading'>Our <span>Menu</span></h1>
               <div className='box-container'>
                 {
                   
                   menu.map((item,index)=>
                   <div className='box' key={index}>
                   <img src={item.img} alt="" />
                   <h3>Tasty and Healthy</h3>
                   <div className='price'>
                          $15.99 <span>20.99</span>
                   </div>
                   <a href="" className='btn'>Add to cart</a>
                   </div>
                   )
                 
                 }  
               </div>
            </section>
        </div>
    );
};

export default Menu;