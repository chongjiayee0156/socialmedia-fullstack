import { createContext } from "react";
import { useState, useEffect } from "react";

export const AuthContext = createContext();

export const UseAuthContext = ({children})=>{

    const [currentUser, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    const login = ()=> {
        setUser({id: 1, name: "bob", profilepic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" })
    }
    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}
