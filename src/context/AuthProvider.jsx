import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // for registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // for sign in
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in user with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // signout user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // get current user info or set a observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in auth state change", currentUser);

      setUser(currentUser);
      setLoading(false);
    });

    // clear the observer
    return () => {
      unsubscribe();
    };
  }, []);

  // creating user and sign in
  const userInfo = {
    user,
    loading,
    signInWithGoogle,
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
