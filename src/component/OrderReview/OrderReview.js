import React, { useState, useEffect } from 'react';
import './OrderReview.css'
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/UseAuth';

const OrderReview = () => {
    // in this useState i store OrderProduct those take form localStorage by useEffect
    const [orderProducts, setOrderProducts] = useState([]);
    //     // when user place order i use this state for show gif
    //     const [OrderPlace, setOrderPlace] = useState(false)

    useEffect(() => {
        // take data form localStorage by getDatabaseCart() 
        const products = getDatabaseCart()
        let productKey = Object.keys(products);
        fetch('http://localhost:3000/getProductByKey', {
            method: "POST",
            body: JSON.stringify(productKey),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {

                let orderProduct = productKey.map(key => {
                    let product = data.find(pd => pd.key === key);
                    product.quantity = products[key] // add count value in every OrderReview Products as a property
                    return product
                })
                setOrderProducts(orderProduct);
            })
    }, [])

    // this function handel remove product form ReviewItem
    function removeItemFormReview(key) {
        const newOrderProduct = orderProducts.filter(pd => pd.key !== key)//filter will return a array where key product is not present
        setOrderProducts(newOrderProduct);//add update value after remove OrderProduct
        removeFromDatabaseCart(key)//this remove product key for localStorage
    }


    // let happy;
    // if (OrderPlace) {
    //     happy = <img src={happyImage} />
    // }
    const auth = useAuth()



    return (
        <div className="container">
            <div className="left">

                {/* pass data in ReviewItem component and  */}
                {orderProducts.map(product => <ReviewItem
                    key={product.key}
                    product={product}
                    //  passing event handler 
                    removeItemFormReview={removeItemFormReview}
                ></ReviewItem>)}
                {/* {happy} */}
                {orderProducts.length == 0 && <h2>Your cart is empty</h2>}
            </div>

            <div className="cart">
                <Cart cartProducts={orderProducts}>
                    {/* <button
                        style={{
                            margin: 'auto',
                            display: 'block',
                            width: '55%'
                        }}
                        onClick={handelOrderPlace} className="add-to-cart">Order Place</button> */}

                    <Link to="/shipment">{auth.user ?
                        <button style={{
                            margin: 'auto',
                            display: 'block',
                            width: '55%'
                        }}
                            className="add-to-cart">Proceed chalkOut</button> :
                        <button
                            style={{
                                margin: 'auto',
                                display: 'block',
                                width: '55%'
                            }}
                            className="add-to-cart">Login to chockOut</button>}</Link>
                </Cart>

            </div >
        </div >

    );
};

export default OrderReview;