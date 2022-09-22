// eslint-disable-next-line no-unused-vars
import styles from './Core.module.scss';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext } from 'react';
import AppThemeContext from '../store/context/theme-context';


const Core = () => {

  const themeContext = useContext(AppThemeContext);
  

  return (
    <div className={ `${styles.parent} ${ styles[themeContext.theme.currentTheme]}` }>
      <div>
        Title
      </div>
    </div>
  );
  
};

export default Core;