import React from 'react';
import './Navbar.css'
import logo from '../../images/logo.png'
import { useAuth } from '../Login/UseAuth';
import { Link } from 'react-router-dom';


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
                        <li className="nav-item"><Link to="/product">Product</Link></li>
                        <li className="nav-item"><Link to="/OrderReview">Order Review</Link></li>
                        <li className="nav-item"><Link to="/UpComing">Up coming</Link></li>
                        {/* <li className="nav-item"><a href="/OrderReview">Order Review</a></li>
                        <li className="nav-item"><a href="/UpComing">Up coming</a></li> */}
                    </ul>
                </div >

                {
                    auth.user ? <div className="user">
                        <img className='img' src={auth.user.img} />

                        <Link to="/login"><h4>{auth.user.name}</h4></Link>

                        <button className="add-to-cart login" onClick={auth.sineOut}>LogOut</button>

                    </div> :
                        <div className="user">
                            <Link className="add-to-cart login" to="/login">LogIn</Link>
                        </div>

                }
            </div>


        </div>
    );
};

export default Navbar;