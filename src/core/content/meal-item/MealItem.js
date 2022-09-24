// eslint-disable-next-line no-unused-vars
import styles from './MealItem.module.scss';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext } from 'react';
import MealItemActions from './actions/MealItemActions';
import MealsContext from '../../store/MealsContext';


const MealItem = (props) => {

  const info = props.mealInfo;

  const cartContext = useContext(MealsContext);

  const addActionHandler = (payload) => {
    const amount = +payload;
    cartContext.addMealToCart({
      meal: info,
      amount
    });
  };

  return (
    <li className={ styles.meal }>
      <div>
        <h3>{info.name}</h3>
        <div className={ styles.description }>{info.description}</div>
        <div className={ styles.price }>${info.price}</div>
      </div>
      <React.Fragment>
        <MealItemActions item={ info } onAddAction={ addActionHandler }></MealItemActions>
      </React.Fragment>
    </li>
  );
};

export default MealItem;