import { useRef } from 'react';
import logo from '../../assets/images/res.jpeg'
import './Navbar.css'
const Navbar = () => {
    const searchRef = useRef();
    const barRef = useRef();
    const searchHandler = () =>{
        searchRef.current.classList.toggle('active');
        barRef.current.classList.remove('active');
    }
    const barHandler = () =>{
        barRef.current.classList.toggle('active');
        searchRef.current.classList.remove('active');
    }
    return (
        <div className="nav-bar">
          <header className="header flex">
          <a href="" className="logo">
             <img className='logo-image pl-10' src={logo} alt="" />
             </a>
           <nav className="navbar flex gap-4" ref={barRef}>
             <a href="">Home</a>
             <a href="">About</a>
             <a href="">Menu</a>
             <a href="">Product</a>
             <a href="">contact</a>
           </nav>
           <div className='icons flex gap-4'>
             <div className='fas fa-search' onClick={searchHandler}></div>
             <div className='fas fa-shopping-cart'></div>
             <div className='fas fa-bars'id='menu-btn' onClick={barHandler}></div>
           </div>
           <div className='search-form' ref={searchRef}>
            <input type="search" placeholder='Search Here...' id="search-box" />
            <label htmlFor="search-box" className='fas fa-search'></label>
           </div>
          </header>
        </div>
    );
};

export default Navbar;