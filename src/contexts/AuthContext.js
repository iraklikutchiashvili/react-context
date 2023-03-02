import React, { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState(false);

  const toggleAuth = () => {
    setAuth(!auth);
  };
  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
