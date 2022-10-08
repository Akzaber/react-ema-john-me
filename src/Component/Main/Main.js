import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart } from '../../utilities/fakedb';
import { addToDb, storedCart } from '../../utilities/lsfakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Main.css'


const Main = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

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
  const handleDeleteOrders = () => {
    setCart([]);
    deleteShoppingCart();
  }


  return (
    <div className="main-shop">
      <div className="shop-container">
        {
          products.map(product => <Product handleItemInCart={handleItemInCart} key={product.id} product={product}></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart handleDeleteOrders={handleDeleteOrders} cart={cart}>
          <Link to='/order'>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Main;