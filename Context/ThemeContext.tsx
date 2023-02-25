import React, { useState, useEffect } from 'react';
import { themeContext } from '../types/types'

export const ThemeContext = React.createContext<themeContext>({
  theme: "",
  updateTheme: () => {}
});

// @ts-ignore
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState<string>("classic");

  useEffect(() => {
    const locatStorageString = window.localStorage.getItem('todoList');
    if (locatStorageString) {
        const localStorageObject = JSON.parse(locatStorageString)
        const theme = localStorageObject.theme
        setTheme(theme);
    } 
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        updateTheme: setTheme
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
