import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
  const {handleItemInCart, product} = props
  const {img, name, price, seller, ratings} = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h2>{name}</h2>
        <p>Price: <strong>${price}</strong></p>
        <p><small>Manufracturer: {seller}</small></p>
        <p><small>Ratings: {ratings}</small></p>
      </div>
      <button onClick={() => handleItemInCart(product)}>
        Add To Cart
        <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faShoppingCart}></FontAwesomeIcon>
        </button>
    </div>
  );
};

export default Product;