import './Contact.css';
const Contact = () => {
    return (
        <section className="contact" id="contact" >
            <h1 className="heading"><span>contact</span> us</h1>
            <div className="row">
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116968.15604923313!2d90.39960628977596!3d23.631041615370695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b0fb41e8c247%3A0xa02713a8af496e98!2sNarayanganj%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1695625058308!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
            <form action="">
                <h3>Get in touch</h3>
                <div className='inputBox'>
                  <span className='fas fa-user'></span>
                  <input type="text" name="name" placeholder='name'/>
                </div>
                <div className='inputBox'>
                  <span className='fas fa-envelope'></span>
                  <input type="email" name="email" placeholder='email'/>
                </div>
                <div className='inputBox'>
                  <span className='fas fa-phone'></span>
                  <input type="number" name="phone" placeholder='phone number'/>
                </div>
                <input type="submit" value="Contact Now" className='btn'/>
            </form>
            </div>
        </section>
    );
};

export default Contact;