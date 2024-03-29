import * as React from 'react';
import { createContext, useContext, useEffect, useState } from "react";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
  } from "firebase/auth";
  import { auth } from "../firebase";


  const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
  };

  export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logout = () => signOut(auth);
  
    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);
  
    useEffect(() => {
      const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubuscribe();
    }, []);
  
    return (
      <authContext.Provider
        value={{
          login,
          user,
          logout,
          loading,
          resetPassword,
        }}
      >
        {children}
      </authContext.Provider>
    );
  }