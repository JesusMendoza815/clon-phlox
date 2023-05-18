import React from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const sigIn = () => {};
  return <div>AuthContext</div>;
};
