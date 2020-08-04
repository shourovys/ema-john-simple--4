import React, { useState, useEffect } from 'react';
import './Product.css'
import fakeData from '../../fakeData';
import ShowProduct from '../ShowProduct/ShowProduct';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Product = () => {
    // take data form fakeData and store in useState
    const fast10 = fakeData.slice(0, 10)
    const [productsData, setProductsData] = useState(fast10)

    // in this state ue set all add-to-cart product data
    const [cartProducts, setCartProducts] = useState([])
    // this function handel add-to-cart button even and update State
    let handelAddToCart = (cartProduct) => {
        let cartPdKey = cartProduct.key;
        const newProduct = productsData.filter(product => product.key === cartPdKey)
        const newCartProducts = [...cartProducts, newProduct]
        setCartProducts(newCartProducts)
    }


    // useEffect(() => {
    //     // take data form localStorage by getDatabaseCart() 
    //     const products = getDatabaseCart()
    //     let productKey = Object.keys(products);
    //     let orderProduct = productKey.map(key => {
    //         let product = fakeData.find(pd => pd.key === key);
    //         product.quantity = products[key] // add count value in every OrderReview Products
    //         return product
    //     })
    //     setCartProducts(orderProduct);

    // }, [])

    return (
        <div className="container">
            <div className="left">
                {/* passing 10 productsData one by one (by product) in ShowProduct && also passing a function for add-to-cart button */}
                {
                    productsData.map(product =>
                        <ShowProduct
                            key={product.key}
                            product={product}
                            handelAddToCart={handelAddToCart}
                            showAddToCartBtn='true'
                            nameLink="true"
                        ></ShowProduct>)
                }
            </div>
            <div className="cart">
                <Cart cartProducts={cartProducts}>
                    {/* <Link style={{
                        margin: 'auto',
                        display: 'block',
                        width: '55%'
                    }}
                        to="/OrderReview"> */}
                    <button className="add-to-cart">Order Review</button>
                    {/* </Link> */}
                </Cart>

            </div>
        </div>
    );
};
export default Product;