// eslint-disable-next-line no-unused-vars
import styles from './Core.module.scss';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import AppThemeContext from '../store/context/theme-context';
import TopNav from '../top-nav/TopNav';
import Content from './content/Content';
import { MealsProvider } from './store/MealsContext';
import Dashboard from './dashboard/Dashboard';

const Core = () => {

  const themeContext = useContext(AppThemeContext);

  return (
    <div className={ `${themeContext.theme.currentTheme} dash-parent` }>
      <MealsProvider>

        <TopNav />

        <Dashboard />
  
        <Content />

      </MealsProvider>
    </div>
  );
  
};

export default Core;