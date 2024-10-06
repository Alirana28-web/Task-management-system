import React, { useContext } from 'react';
import './Popular.css';
import Items from '../Items/Items';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from '../../ContextAPI/Usecontext';

const Popular = () => {
  const { addproduct, mens } = useContext(Context);

  return (
    <div className='popular'>
      <h1 style={{ textAlign: 'center' }}>Popular in Women</h1>
      <hr />
      <div className="popular-item">
  
        {addproduct.map((v, i) => (
          <Items key={i} id={v.id} name={v.name} newprice={v.newPrice} oldprice={v.oldPrice} />
        ))}
        
      </div>
    </div>
  );
};

export default Popular;
