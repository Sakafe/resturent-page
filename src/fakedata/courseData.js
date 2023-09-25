import menuImage1 from '../assets/images/menuItem1.jpg';
import menuImage2 from '../assets/images/menuItem2.jpg';
import menuImage3 from '../assets/images/menuItem3.jpg';
import menuImage4 from '../assets/images/menuItem4.jpg';
import productsImage1 from '../assets/images/productItem1.jpg';
import productsImage2 from '../assets/images/productItem2.jpg';
import productsImage3 from '../assets/images/productItem3.jpg';
import reviewsImage1 from '../assets/images/mann.png';
import reviewsImage2 from '../assets/images/man2.jpg';
import reviewsImage3 from '../assets/images/man3.jpg';
import blogsImage1 from '../assets/images/blog1.jpeg';
import blogsImage2 from '../assets/images/blog2.jpeg';
import blogsImage3 from '../assets/images/blog3.jpeg';
var menu = [
    {
        img : menuImage1
    },
    {
        img : menuImage2
    }, {
        img : menuImage3
    }, {
        img : menuImage4
    },

];
var products = [
    {
        title: 'Fresh Coffe',
        img : productsImage1,
        price : '$15.99',
        oldPrice : 17.99,
    },
    {
        title : 'Milk Shake',
        img : productsImage2,
        price : '$10.99',
        oldPrice : 14.99,
    },
    {
        title : 'Ice Creame',
        img : productsImage3,
        price : '$10.99',
        oldPrice : 16.99,
    }
];
var reviews = [
    {
        name : 'Jhon DEniel',
        img :  reviewsImage1,
    },
    {
        name : 'michel',
        img : reviewsImage2,
    },
    {
        name : 'Imdadul',
        img : reviewsImage3,
    }
];
var blogs = [
    {
        name : 'Pasta',
        img :  blogsImage1,
    },
    {
        name : 'Oreange juice',
        img : blogsImage2,
    },
    {
        name : 'Sandwich',
        img : blogsImage3,
    }
];

export {menu,products, reviews,blogs};