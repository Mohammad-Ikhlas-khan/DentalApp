// AuthContext.js
import { createContext, useState,useEffect } from "react";
import { getUser } from "../utils/authAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
    useEffect(() => {
        const currentUser = getUser();
        setUser(currentUser);
    }, []);


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};