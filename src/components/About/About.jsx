import './About.css';
import aboutimage from '../../assets/images/item1.jpg'
const About = () => {
    return (
        <div>
            <section className='about' id='about'>
               <h1 className='heading'>
                <span>About</span> us
               </h1>
               <div className='row mt-5'>
                  <div className='image'>
                     <img src={aboutimage} alt="" />
                  </div>
                  <div className='content m-10 p-10'>
                    <h3>What makes our food special?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illo iste provident libero. Sint cumque sequi, at nesciunt laudantium architecto!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis adipisci iste amet quod cupiditate commodi repellendus error dolore tempora molestias.</p>
                    <a href="" className='btn'>Learn More</a>
                  </div>
               </div>
            </section>
        </div>
    );
};

export default About;