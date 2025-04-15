import { token } from "morgan";
import { useState, useContext, createContext } from "react";
import React from 'react'

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const {[auth,setAuth]} = useState({
  user: null,
  token: "",
  })
  return (
    <AuthContext.Provider value={[ auth, setAuth ]}>
      {children}
    </AuthContext.Provider>
  );
}

//custom hook
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
} 

export { AuthProvider, useAuth }; 