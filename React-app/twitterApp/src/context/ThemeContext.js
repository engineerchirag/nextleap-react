import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [darkTheme, toggleTheme] = useState(false);
    return (
        <ThemeContext.Provider value={{
            darkTheme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;