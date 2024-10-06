import React, { createContext, useState, useEffect } from 'react';
import WomenClothingItems, { MenClothingItems } from '../components/Popular/Data';


export const Context = createContext(null);

const Usecontext = ({ children }) => {
  const [addproduct, setproduct] = useState(WomenClothingItems);
  const [cart, setCart] = useState([]); 
  const [count, setCount] = useState(0);  
  const [menu, setmenu] = useState('shop');
  const [mens,setmens] = useState(MenClothingItems)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const storedCount = localStorage.getItem("count");

    if (storedCart && storedCart.length > 0) {
      setCart(storedCart);
    }
    if (storedCount) {
      setCount(parseInt(storedCount, 10));  
    }
  }, []);

  
  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, count]);  
  
  const addtocart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  
    setCount((prevCount) => prevCount + 1);

  };
  

  const remove= (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null;
        }
        return item;
      }).filter(Boolean);
      
      setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
      
      return updatedCart;
    });
  };
  

  return (
    <Context.Provider value={{ addproduct, cart, count, addtocart ,count, setCount,remove ,menu, setmenu,mens,setmens}}>
      {children}
    </Context.Provider>
  );
};
export default Usecontext;
