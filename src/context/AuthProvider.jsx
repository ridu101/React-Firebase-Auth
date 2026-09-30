// import React from 'react';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firbase.init";

const AuthProvider = ({children}) => {
    // for registration
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword ( auth, email, password)
    }
    // for sign in
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword ( auth, email, password)
    }
    // creating user and sign in
    const userInfo = {
        createUser,
        signInUser,
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;