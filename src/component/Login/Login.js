import React from 'react';
import Auth from './UseAuth';
import './Login.css'

const Login = () => {
    const auth = Auth()

    return (
        <div className="sineIn">
            <h3>join with us</h3>
            {
                auth.user ? <button onClick={auth.sineOut} className="add-to-cart">Sine Out</button> : <button onClick={auth.signInWithGoogle} className="add-to-cart">sine in with google</button>
            }

        </div>
    );
};

export default Login;