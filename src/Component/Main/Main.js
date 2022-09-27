import React, { useEffect, useState } from 'react';
import { addToLs } from '../../utilities/lsfakedb';
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
  }, [])

  const handleCartData = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToLs(product.id);
  }

  return (
    <div className="main-shop">
      <div className="shop-container">
        {
          products.map(product => <Product key={product.id} product={product} handleCartData={handleCartData}></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Main;