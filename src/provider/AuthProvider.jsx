import React, {useEffect, useState} from "react";
import {AuthContext} from "./Context";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import {auth} from "../firebase/firebase.config";
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const GoogleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    return signOut(auth);
  };
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };
  const changePassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };
  const profileUpdate = (name, photo) => {
    const userInfo = {
      displayName: name,
      photoURL: photo,
    };
    return updateProfile(auth.currentUser, userInfo);
  };
  const forgetPassword = (email) => {
  
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    createUser,
    logoutUser,
    profileUpdate,
    loginUser,
    loginWithGoogle,
    loading,
    setLoading,
    changePassword,
    forgetPassword,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
