import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({children}) =>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDarkMode])

    const theme = isDarkMode ? "dark" : "light";

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
    );
}