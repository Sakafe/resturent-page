import './Footer.css';

const Footer = () => {
    return (
        <section className='footer' id='footer'>
            <div className="share">
                <a href="" className='fab fa-facebook-f'></a>
                <a href="" className='fab fa-twitter'></a>
                <a href="" className='fab fa-linkedin'></a>
                <a href="" className='fab fa-instagram'></a>
            </div>
            <div className="credit">
                created by <span>Sakafe Hossain</span>
            </div>
        </section>
    );
};

export default Footer;