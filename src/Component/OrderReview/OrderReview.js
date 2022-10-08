import React from 'react';
import './OrderReview.css'

const OrderReview = ({product, handleDelete}) => {
  const {id, name, price, img, shipping} = product
  return (
    <div className='order-review-container'>
      <div>
        <img src={img} alt="" />
      </div>
      <div className='order-review-detail'>
        <div className='order-detail'>
          <p>{name}</p>
          <p><small>Price: {price}</small></p>
          <p><small>Shipping-Charge: {shipping}</small></p>
        </div>
        <div className='order-delete'>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;