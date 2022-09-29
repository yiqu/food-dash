/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import useSWR from 'swr';
import useMemoCompare from '../../shared/hooks/useMemoCompare';
import MealsContext from '../store/MealsContext';
import { defaultFetcher, documentDefaultFetcher, fetchSubjects } from '../welcome/store/welcome-fetcher';
import styles from './HoursOpen.module.scss';


const HoursOpen = (props) => {

  //const cartContext = useContext(MealsContext);

  const [hoursDisplay, setHoursDisplay] = useState();

  const currentUser = useMemo(() => {
    let firstName = (''+props.user?.first) ?? 'None';
    firstName = firstName.toLowerCase();
    return firstName;
  }, [props.user]);
  
  const { data, error, isValidating, mutate } = useSWR(['hours-open', currentUser], documentDefaultFetcher);

  // memoize the hours open info object by customized comparator fn
  const hoursOpenInfo = useMemoCompare(props.hours, (prev, curr) => {
    return prev?.hoursOpen.end === curr.hoursOpen.end;
  });

  // only calculate if the memoized object changes
  useEffect(() => {
    //console.log("calcuating expensive");
    setHoursDisplay(hoursOpenInfo.hoursOpen.start + ' - ' + hoursOpenInfo.hoursOpen.end + '. (Last updated at ' + 
      new Date(hoursOpenInfo.dateSet).toLocaleTimeString() + ') *notice the last updated time will not updated unless close time is different');
  }, [hoursOpenInfo]);

  return (
    <div className={ `container my-3` }>
      <div className={ `${styles.parent}` }>
        <div>
          Open hours (local state): { hoursDisplay }
        </div>
        <div className='d-flex'>
          {!data && <div className='text-primary'>Loading...</div>}
          {data && <div className='w-14rem'>{currentUser}'s time (fetched state): {data.open} - {data.close}</div>}
          <span>{isValidating && <>Updating...</>}</span>
        </div>
      </div>
    </div>
  );
};

export default HoursOpen;