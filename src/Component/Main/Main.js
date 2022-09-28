import React, { useEffect, useState } from 'react';
import { addToDb, storedCart } from '../../utilities/lsfakedb';
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

  useEffect(() => {
    const getStoredCart = storedCart();
    let newStoredProduct = [];
    for(const id in getStoredCart){
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
        const quantity = getStoredCart[id];
        addedProduct.quantity = quantity;
        newStoredProduct.push(addedProduct);
      }
    }
    setCart(newStoredProduct);
  }, [products])

  const handleItemInCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if(!exists){
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct]
    }
    else{
      const rest = cart.filter(product => selectedProduct.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
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