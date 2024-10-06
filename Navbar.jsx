import React, { useContext, useEffect, useState } from 'react';
import { FaCartArrowDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Context } from '../ContextAPI/Usecontext';

const Navbar = () => {

  const {menu, setmenu }= useContext(Context);

  // getting from usecontext
  
  const { count,setCount } = useContext(Context);  
  if(count){
    localStorage.setItem("count",JSON.stringify(count));
  }
  useEffect(() => {
    const savedCount = JSON.parse(localStorage.getItem('count'));
    if (savedCount) {
      setCount(savedCount);
    }
  }, [setCount]);


  return (
    <div className='navbar'>
      <div className='logo'></div>
      <ul className='list'>
        <li onClick={() => setmenu('shop')} >
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
            Shop {menu === 'shop' ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setmenu('mens')}>
  <Link style={{ textDecoration: 'none', color: 'black' }} to='mens'>
    Men {menu === 'mens' ? <hr /> : <></>}
  </Link>
</li>

        <li onClick={() => setmenu('women')}>
          <Link style={{ textDecoration: 'none', color: 'black' }}  to='/women'>
            Women {menu === 'women' ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setmenu('kids')}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='kids'>
            Kids {menu === 'kids' ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className='btn'>
        <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>
          <button className='login'>Login</button>
        </Link>
      </div>
      <div style={{ position: 'absolute', right: '15%', top: '35%' }}>
        <Link to='/cart' style={{ color: 'black' }}>
          <FaCartArrowDown />
        </Link>
        <div className='count'>{count}</div>  {/* Display the cart count */}
      </div>
    </div>
  );
};

export default Navbar;
