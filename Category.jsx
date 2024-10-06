import React from 'react';
import Mens from '../categories/Mens';
import Womens from '../categories/Womens';
import Childrens from '../categories/Childrens';
import './category.css';
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
  console.log("Category prop received:", category); // Debugging log
  return (
    <div className="category">
      <div className="cats">
        <ul className="category-list">
          <Link to='tshirts'  className='links'><li>T-shirts</li></Link>
          <Link to='carousel' className='links'><li>Carousel</li></Link>
          <Link to='coats'    className='links'><li>Coats</li></Link>
          <Link to='pants'    className='links'><li>Pants</li></Link>
        </ul>
      </div>
      <div className="category-content">
        {category === 'mens' && <Mens />}
        {category === 'women' && <Womens />}
        {category === 'kids' && <Childrens />}
      </div>
    </div>
  );
};

export default Category;
