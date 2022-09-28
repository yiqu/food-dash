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
import SWRWelcome from "./welcome/store/swr";

const Core = () => {

  const themeContext = useContext(AppThemeContext);

  const [time, setTime] = useState(new Date().getTime());
  const [user, setUser] = useState({
    name: {
      first: 'Kevin',
      last: 'Q'
    }
  });
  const [hoursOpen, setHoursOpen] = useState({
    hoursOpen: {
      start: '8am',
      end: '4pm'
    },
    dateSet: new Date().getTime()
  });

  const updateWelcomeDate = () => {
    setTime(new Date().getTime());
  };

  const updateWelcomeUser = () => {
    setUser({
      name: Math.random() > 0.5 ? {first: 'Kevin', last: 'Q'} : {first: 'Bekah', last: 'Q'}
    });
  };

  const updateHoursOpen = () => {
    setHoursOpen({
      hoursOpen: {
        start: '8am',
        end: Math.round(4 + Math.random() * (5-4)) + 'pm'
      },
      dateSet: new Date().getTime()
    });
  };


  return (
    <div className={ `${themeContext.theme.currentTheme} dash-parent` }>
      <MealsProvider>

        <TopNav />

        <SWRWelcome>
          <WelcomeMessage date={ time } user={ user }/>
        </SWRWelcome>

        <HoursOpen hours={ hoursOpen }/>
        
        <div className='container'>
          <button onClick={ updateWelcomeDate } className="btn btn-outline-light mr-2" >Update Date {new Date(time).toLocaleTimeString()}</button>
          <button onClick={ updateWelcomeUser } className="btn btn-outline-light mr-2" >Update User ({user.name.first})</button>
          <button onClick={ updateHoursOpen } className="btn btn-outline-light mr-2" >Set hours open (to 4pm or 5pm)</button>
        </div>
  
        <Content />

      </MealsProvider>
    </div>
  );
  
};

export default Core;