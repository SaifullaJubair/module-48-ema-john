import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
      const [products, setProducts] = useState([]);
      const [cart, setCart] = useState([]);
      useEffect(() => {
            fetch('products.json')
                  .then(res => res.json())
                  .then(data => setProducts(data));
      }, [])

      // handler perameter pathano hosse 
      const handleAddToCart = (product) => {
            // console.log(product);
            // do not do this: cart.prush(product)old js rules

            const newCart = [...cart, product];
            setCart(newCart);
      }
      return (
            <div className='shop-container'>
                  <div>
                        <h3>This is for Products</h3>
                        <div className='products-container'>
                              {
                                    products.map(product => <Product
                                          key={product.id}
                                          product={product}
                                          handleAddToCart={handleAddToCart}
                                    ></Product>)
                              }
                        </div>
                  </div>
                  {/* cart section  */}
                  <Cart cart={cart}></Cart>
            </div>
      );
};

export default Shop;