import { onAuthStateChanged } from "firebase/auth";
import { createContext,useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext= createContext();



export const AuthContextProvider = ({children}) => {
    const[ currentUser, setCurrentUser]=useState({});

    useEffect(()=>{
        const onSubmit=onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
        })
        return()=>{
            onSubmit()
        }
    },[])
  return (
   <AuthContext.Provider value={{currentUser}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthContext
