import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';


const AppThemeContext = React.createContext({
  theme: {},
  setThemeFn: () => {}
});

export const AppThemeContextProvider = (props) => {

  const [themeState, setThemeState] = useState({
    currentTheme: 'dark'
  });

  const setThemeHandler = (themeState) => {
    setThemeState({...themeState});
  };

  return (
    <AppThemeContext.Provider value={ {theme: themeState, setThemeFn: setThemeHandler} }>
      { props.children }
    </AppThemeContext.Provider>
  );

};

export default AppThemeContext;