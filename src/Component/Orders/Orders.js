import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/lsfakedb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Orders = () => {
  const {initialCart} = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleDelete = (id) => {
    const remainingProduct = cart.filter(product => product.id !== id);
    if(remainingProduct){
      setCart(remainingProduct);
      removeFromDb(id);
    }
  }

  const handleDeleteOrders = () => {
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className='main-shop'>
      <div className='orders-container'>
        {
          cart.map(product => <OrderReview handleDelete={handleDelete} key={product.id} product={product}></OrderReview>)
        }
        {
          cart.length === 0 && <h1>Sorry You Have No Order To Review Please Order First <Link to='/'>Click Here</Link></h1>
        }
      </div>
      <div className='cart-container'>
      <Cart handleDeleteOrders={handleDeleteOrders} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;