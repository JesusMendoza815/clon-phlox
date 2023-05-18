import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isToken, setToken] = useState("");
  const navigate = useNavigate();

  const signIn = (token) => {
    setToken(token);
    navigate("/home");
  };

  const signOut = () => {
    setToken("");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isToken,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
