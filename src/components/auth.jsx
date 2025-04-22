import { createContext, useContext, useState, useEffect } from "react";
import {auth} from "../config/firebase";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

    useEffect (() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        console.log(user);
        setUser(user);
      });
  
      return () => unsubscribe();
    }, []);

    return (
      <AuthContext.Provider value={{user, setUser}}>
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);