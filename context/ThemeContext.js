import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeContextProdiver = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('darkTheme')) === 'ON') {
      setDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    darkTheme
      ? localStorage.setItem('darkTheme', JSON.stringify('ON'))
      : localStorage.setItem('darkTheme', JSON.stringify('OFF'));
  }, [darkTheme]);

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const value = {
    darkTheme,
    toggleDarkTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext };

export default ThemeContextProdiver;
