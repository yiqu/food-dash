// eslint-disable-next-line no-unused-vars
import styles from './Core.module.scss';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext } from 'react';
import AppThemeContext from '../store/context/theme-context';
import TopNav from '../top-nav/TopNav';
import WelcomeMessage from './welcome/Welcome';
import Content from './content/Content';
import { MealsProvider } from './store/MealsContext';

const Core = () => {

  const themeContext = useContext(AppThemeContext);

  const [time, setTime] = useState(new Date().getTime());
  const [user, setUser] = useState({
    name: {
      first: 'Kevin',
      last: 'Q'
    }
  });

  const updateWelcomeDate = () => {
    setTime(new Date().getTime());
  };

  const updateWelcomeUser = () => {
    setUser({
      name: Math.random() > 0.5 ? {first: 'Kevin', last: 'Q'} : {first: 'Bekah', last: 'Q'}
    });
  };

  return (
    <div className={ `${themeContext.theme.currentTheme} dash-parent` }>
      <MealsProvider>

        <TopNav />

        <WelcomeMessage date={ time } user={ user }/>

        <div className='container'>
          <button onClick={ updateWelcomeDate } className="btn btn-outline-light" >Date {time}</button>
          <button onClick={ updateWelcomeUser } className="btn btn-outline-light" >User {user.name.first}</button>
        </div>
  
        <Content />

      </MealsProvider>
    </div>
  );
  
};

export default Core;