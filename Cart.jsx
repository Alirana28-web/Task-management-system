import React, { useContext, useEffect } from 'react';
import { Context } from '../ContextAPI/Usecontext';
import { Button } from 'antd';

const Cart = () => {
  const { cart,remove } = useContext(Context);

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Your Cart</h1>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div className='card' key={index} style={{width:"20%",margin:"20px"}}>
            <p>{item.name}</p>
            <p>New Price: {item.newprice}$</p>
            <p>Old Price: {item.oldprice}$</p>
           <Button onClick={() => remove(item)}>Remove</Button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
