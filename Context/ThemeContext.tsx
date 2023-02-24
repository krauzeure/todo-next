import React, { useState, useEffect } from 'react';
import { themeContext } from '@/types/types';

export const ThemeContext = React.createContext<themeContext>({
  theme: "",
  updateTheme: () => {}
});

// @ts-ignore
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState<string>("classic");

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
