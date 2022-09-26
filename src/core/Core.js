// eslint-disable-next-line no-unused-vars
import styles from './Core.module.scss';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import AppThemeContext from '../store/context/theme-context';
import TopNav from '../top-nav/TopNav';
import WelcomeMessage from './welcome/Welcome';
import Content from './content/Content';
import { MealsProvider } from './store/MealsContext';
import HoursOpen from './hours-open/HoursOpen';

const Core = () => {

  const themeContext = useContext(AppThemeContext);

  const [time, setTime] = useState(new Date().getTime());
  const [user, setUser] = useState({
    name: {
      first: 'Kevin',
      last: 'Q'
    }
  });
  const [hoursOpen, setHoursOpen] = useState('7am - 3pm');

  const updateWelcomeDate = () => {
    setTime(new Date().getTime());
  };

  const updateWelcomeUser = () => {
    setUser({
      name: Math.random() > 0.5 ? {first: 'Kevin', last: 'Q'} : {first: 'Bekah', last: 'Q'}
    });
  };

  const updateHoursOpen = () => {
    setHoursOpen(new Date().getTime() + '');
  };


  return (
    <div className={ `${themeContext.theme.currentTheme} dash-parent` }>
      <MealsProvider>

        <TopNav />

        <WelcomeMessage date={ time } user={ user }/>

        <HoursOpen hours={ hoursOpen }/>
        
        <div className='container'>
          <button onClick={ updateWelcomeDate } className="btn btn-outline-light" >Update Date {time}</button>
          <button onClick={ updateWelcomeUser } className="btn btn-outline-light" >Update User {user.name.first}</button>
          <button onClick={ updateHoursOpen } className="btn btn-outline-light" >Set hours open</button>
        </div>
  
        <Content />

      </MealsProvider>
    </div>
  );
  
};

export default Core;