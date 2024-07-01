import React, {useState,createContext} from "react";

// create a context 
const ThemeContext = createContext();

// provide the context
const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState('light');
    const toggleTheme = ()=>{
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};
