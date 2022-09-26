// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import MealsContext from '../store/MealsContext';

const HoursOpen = (props) => {

  //const cartContext = useContext(MealsContext);

  console.log("Hours Open running");

  return (
    <div className='container'>
      { props.hours }
    </div>
  )
};

export default HoursOpen;