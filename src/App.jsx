import './App.css'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'
import Review from './components/Review/Review'

function App() {
  return (
    <>
     <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    <Product/>
    <Review/>
    <Contact/>
    <Blogs/>
    <Footer/>
    </>
  )
}

export default App
