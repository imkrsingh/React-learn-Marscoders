import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Create a consumer component using useContext hook
const ThemeToggler = () => {
    // Use useContext hook to consume context value
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Render the component with context value
    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button  className='theme' onClick={toggleTheme}>Click me!</button>
        </div>
    );
};

// Wrap the component tree with provider
const App = () => {
    return (
        <ThemeProvider>
            <ThemeToggler />
        </ThemeProvider>
    );
};

export default App;
