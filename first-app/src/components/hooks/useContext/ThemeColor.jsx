import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeColor = () => {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <ToolbarComponent />
        </ThemeContext.Provider>
    )
}

const ToolbarComponent = () => {
    return <ThemeButtonComponent />
}

const ThemeButtonComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
            <button 
                onClick={() => setTheme(theme==='light' ? 'dark' : 'light')}
                style={{ 
                    backgroundColor: theme==='light' ? '#fff' : '#333',
                    color: theme==='light' ? '#000' : '#fff',
                }}
            >Current Theme: {theme}
            </button>
        </div>
    )
}

export default ThemeColor
