// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import useMemoCompare from '../../shared/hooks/useMemoCompare';
// eslint-disable-next-line no-unused-vars
import MealsContext from '../store/MealsContext';

const HoursOpen = (props) => {

  //const cartContext = useContext(MealsContext);

  const [hoursDisplay, setHoursDisplay] = useState();

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
    <div className='container'>
      Open hours: { hoursDisplay }
    </div>
  );
};

export default HoursOpen;