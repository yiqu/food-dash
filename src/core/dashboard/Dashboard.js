/* eslint-disable no-unused-vars */
import styles from './Dashboard.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { WelcomeProvider } from '../welcome/store/WelcomeContext';
import SWRWelcome from '../welcome/store/SWRWelcome';
import WelcomeMessage from '../welcome/Welcome';
import HoursOpen from '../hours-open/HoursOpen';
import MealsContext from '../store/MealsContext';

export const Dashboard = () => {

  const [time, setTime] = useState(0);
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

  const onWelcomeSuccesHandler = useCallback(() => {
    setTime(new Date().getTime());
  }, []);

  return (
    <React.Fragment>
      <WelcomeProvider>

        <SWRWelcome onWelcomeSucces={ onWelcomeSuccesHandler }>

          <WelcomeMessage date={ time } user={ user }/>

        </SWRWelcome>

      </WelcomeProvider>

      <HoursOpen hours={ hoursOpen } user={ user.name }/>

      <div className='container'>
        <button onClick={ updateWelcomeDate } className="btn btn-outline-light mr-2" >Update Date {new Date(time).toLocaleTimeString()}</button>
        <button onClick={ updateWelcomeUser } className="btn btn-outline-light mr-2" >Update User ({user.name.first})</button>
        <button onClick={ updateHoursOpen } className="btn btn-outline-light mr-2" >Set hours open (to 4pm or 5pm)</button>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;