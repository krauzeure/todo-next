import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext<{theme: string}>({
  theme: ""
});

// @ts-ignore
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState<string>("classic");

  return (
    <ThemeContext.Provider
      value={{
        theme: theme
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
