import React, { useState, useEffect } from 'react';
import './Product.css'
import fakeData from '../../fakeData';
import ShowProduct from '../ShowProduct/ShowProduct';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Product = () => {
    const [productsData, setProductsData] = useState([])
    //take data form database
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => setProductsData(data))
    }, [])

    // take data form fakeData and store in useState
    // const fast10 = fakeData.slice(0, 10)

    // in this state ue set all add-to-cart product data
    const [cartProducts, setCartProducts] = useState([])
    // this function handel add-to-cart button even and update State && update local storage with key & quantity
    let handelAddToCart = (cartProduct) => {
        let cartPdKey = cartProduct.key;
        const ifProduct = cartProducts.find(pd => pd.key === cartPdKey)//find will return -> is this product already present in cartProduct state
        let count = 0
        if (ifProduct) {//if product is present -- then i incrise the value of count and quantity
            count = cartProduct.quantity + 1;
            cartProduct.quantity = count;
            const otherProduct = cartProducts.filter(pd => pd.key !== cartPdKey)//get other products where is cartProduct is not present
            setCartProducts([...otherProduct, cartProduct])
        }
        else {////if product is not present
            count = 1;
            cartProduct.quantity = count;
            setCartProducts([...cartProducts, cartProduct])
        }
        addToDatabaseCart(cartPdKey, cartProduct.quantity)

    }


    useEffect(() => {
        // take data form localStorage by getDatabaseCart() 
        const products = getDatabaseCart()
        let productKey = Object.keys(products);
        if (productsData.length) {
            let orderProduct = productKey.map(key => {
                let product = productsData.find(pd => pd.key === key);
                product.quantity = products[key] // add count value in every OrderReview Products
                return product
            })
            setCartProducts(orderProduct);
        }

    }, [productsData])

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
                    <Link style={{
                        margin: 'auto',
                        display: 'block',
                        width: '55%'
                    }}
                        to="/OrderReview">
                        <button className="add-to-cart">Order Review</button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};
export default Product;