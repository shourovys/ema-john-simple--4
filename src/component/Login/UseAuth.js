// import all firebase dependence's
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../Firebase.Config";
import React from 'react'
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";


// ineselize firebase app
firebase.initializeApp(firebaseConfig);

// creat a context api for pass user state
const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)


// get user function
const getUser = (user) => {
    const { displayName, photoURL, email } = user
    return {
        name: displayName,
        img: photoURL,
        email: email
    }
}

// decluer a private route
export function PrivateRoute({ children, ...rest }) {
    const auth = useAuth()

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}


const Auth = () => {

    const [user, setUser] = useState(null)

    const signInWithGoogle = () => {
        // google sine in marthard
        var provider = new firebase.auth.GoogleAuthProvider();

        return firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const newUser = getUser(result.user)
                setUser(newUser)
                return result.user
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
                return errorMessage
            });
    }
    const sineOut = () => {
        firebase.auth().signOut().then(function () {
            setUser(null)
        }).catch(function (error) {
            // An error happened.
        });
    }

    // this effecect chack user state
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                const newUser = getUser(user)
                setUser(newUser)
            } else {
                // User is signed out.

            }
        })
    }, [])

    return {
        signInWithGoogle,
        sineOut,
        user
    }

}

export default Auth