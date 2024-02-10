import { createContext, useEffect } from "react";
import {useState} from 'react';

export const DarkModeContext = createContext();

export const UseDarkModeContext = ({children}) => {

    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem('darkmode')) || false
    )

    const toggle = () => {
        setDarkMode((prevDarkMode)=> !prevDarkMode)
    }

    useEffect (() => {
        localStorage.setItem('darkmode', darkMode)
    }, [darkMode])

    return (
        <DarkModeContext.Provider value = {{darkMode, toggle}}>
            {children}
        </DarkModeContext.Provider>
    )
}