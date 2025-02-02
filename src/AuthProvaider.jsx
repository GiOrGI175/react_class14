import React, { useContext, createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (newUser, cb) => {
    setUser(newUser);
    cb();
  };

  const signOut = (cb) => {
    setUser(null);
    cb();
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
