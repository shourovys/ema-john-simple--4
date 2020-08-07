import React from 'react';
import Auth, { useAuth } from './UseAuth';
import './Login.css'

const Login = () => {
    const auth = Auth()

    // tihs function will handel is user properly log in -- then user will return in the previce Page
    const handelSineIn = () => {
        auth.signInWithGoogle()
            .then(res => {
                window.location.pathname = "/OrderReview"
            })
    }



    return (
        <div className="sineIn">
            <h3>join with us</h3>
            {
                auth.user ? <button onClick={auth.sineOut} className="add-to-cart">Sine Out</button> : <button onClick={handelSineIn} className="add-to-cart">sine in with google</button>
            }

        </div>
    );
};

export default Login;