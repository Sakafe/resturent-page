import './Blogs.css'
import {blogs} from '../../fakedata/courseData'
const Blogs = () => {
    return (
        <section className='blogs' id='blogs'>
            <h1 className='heading'>our <span>blogs</span></h1>
            <div className="box-container">
               
                {
                    blogs.map((item,index)=>
                    <div className='box' key={index}>
                      <div className="image">
                      <img src={item.img} alt="" />
                      </div>
                      <div className="content">
                        <a href="" className="title">{item.name}</a><br/>
                        <span>By admin / 21 Oct, 2023</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, natus modi. Consequuntur eius amet esse sequi quibusdam corporis expedita exercitationem.</p>
                        <a href="" className='btn'>Read More</a>
                      </div>
                    </div>
                    )
                }
                
               
            </div>
        </section>
    );
};

export default Blogs;