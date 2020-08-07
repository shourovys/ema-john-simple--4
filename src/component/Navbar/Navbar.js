import React from 'react';
import './Navbar.css'
import logo from '../../images/logo.png'
import { useAuth } from '../Login/UseAuth';

// creating navbar by this function
const Navbar = () => {
    const auth = useAuth();

    return (
        <div>
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="navbar">
                <div className="nav">
                    <ul className="nav-item-container">
                        <li className="nav-item"><a href="/product">Product</a></li>
                        <li className="nav-item"><a href="/OrderReview">Order Review</a></li>
                        <li className="nav-item"><a href="/UpComing">Up coming</a></li>
                    </ul>
                </div >
                {
                    auth.user ? <div className="user">
                        <img className='img' src={auth.user.img} />

                        <a href="/login"><h4>{auth.user.name}</h4></a>
                    </div> :
                        <div className="user">
                            <a className="add-to-cart login" href="/login">LogIn</a>
                        </div>

                }
            </div>

        </div>
    );
};

export default Navbar;