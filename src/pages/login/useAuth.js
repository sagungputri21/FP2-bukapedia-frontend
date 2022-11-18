import { createContext } from "react";
import React from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>  {
    const [user, setUser] = React.useState(null);
  
    const signin = (newUser, callback) => {
      setUser(newUser);
      callback();
    };
  
    const signout = (callback) => {
      setUser(null);
      callback();
    };
  
    const value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }
  
export const useAuth = () => {
    return React.useContext(AuthContext);
}