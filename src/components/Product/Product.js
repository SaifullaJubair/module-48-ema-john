import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
      const {product , handleAddToCart} = props
      const { name, img, seller, ratings, price } =product;
      return (
            <div className='product'>
                  <img src={img} alt="Shoes Images" />
                  <div className="product-info">
                        <p className='product-name'>{name}</p>
                        <p>Price: ${price}  </p>
                        <p><small>Seller: {seller} </small></p>
                        <p><small>Ratings: {ratings} </small></p>
                  </div>

                  {/* <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'> */}
                  <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                        <p>Add to Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart}>
                              
                        </FontAwesomeIcon>
                  </button>
            </div>
      );
};

export default Product;