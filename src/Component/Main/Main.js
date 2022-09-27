import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/lsfakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Main.css'


const Main = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []);

  const handleItemInCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  }

  return (
    <div className="main-shop">
      <div className="shop-container">
        {
          products.map(product => <Product handleItemInCart={handleItemInCart} key={product.id} product={product}></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Main;