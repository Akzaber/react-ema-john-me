import React from 'react';
import './Cart.css'

const Cart = ({cart, handleDeleteOrders, children}) => {
  let quantity = 0;
  let price = 0;
  let shippingCharge = 0;
  for(const product of cart){
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shippingCharge = shippingCharge + product.shipping;
  }
  const tax = parseFloat((price * 0.1).toFixed(2));
  const grandTotal = (price + shippingCharge + tax).toFixed(2);
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${price}</p>
      <p>Shipping Charge: ${shippingCharge}</p>
      <p>Tax: ${tax}</p>
      <p><strong>Grand Total: ${grandTotal}</strong></p>
      <button onClick={handleDeleteOrders}>Delete Cart</button>
      {children}
    </div>
  );
};

export default Cart;