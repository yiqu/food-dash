// eslint-disable-next-line no-unused-vars
import classes from './TopNavCart.module.scss';
import CartIcon from './CartIcon';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext } from 'react';
import MealsContext from '../core/store/MealsContext';

const TopNavCart = () => {

  const cartContext = useContext(MealsContext);

  return (
    <button className={ classes.button }>
      <span className={ classes.icon }>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={ classes.badge }>{ cartContext.totalMealsCount }</span>
    </button>
  );
};

export default TopNavCart;